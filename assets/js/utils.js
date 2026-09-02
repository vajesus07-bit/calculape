function fmtPEN(n){return new Intl.NumberFormat('es-PE',{style:'currency',currency:'PEN',maximumFractionDigits:2}).format(Number(n)||0)}
function toNum(v){var n=parseFloat(String(v??'').replace(/,/g,''));return Number.isFinite(n)?n:0}
function dateToStr(d){var dd=String(d.getDate()).padStart(2,'0');var mm=String(d.getMonth()+1).padStart(2,'0');var yyyy=d.getFullYear();return dd+'/'+mm+'/'+yyyy}
function numToWords(n){var UNITS=['','UN','DOS','TRES','CUATRO','CINCO','SEIS','SIETE','OCHO','NUEVE'];var TEENS=['DIEZ','ONCE','DOCE','TRECE','CATORCE','QUINCE','DIECISÉIS','DIECISIETE','DIECIOCHO','DIECINUEVE'];var TENS=['','DIEZ','VEINTE','TREINTA','CUARENTA','CINCUENTA','SESENTA','SETENTA','OCHENTA','NOVENTA'];var HUNDREDS=['','CIENTO','DOSCIENTOS','TRESCIENTOS','CUATROCIENTOS','QUINIENTOS','SEISCIENTOS','SETECIENTOS','OCHOCIENTOS','NOVECIENTOS'];if(n===0)return'CERO';if(n===100)return'CIEN';var r='';var t=Math.floor(n/1000);if(t>0){if(t===1)r+='MIL';else r+=numToWords(t)+' MIL';n%=1000}t=Math.floor(n/100);if(t>0){r+=HUNDREDS[t];n%=100;if(n>0)r+=' '}t=Math.floor(n/10);if(t>=2){r+=TENS[t];n%=10;if(n>0)r+=' Y '}if(t===1){r+=TEENS[n];return r.trim()}t=Math.floor(n);if(t>0){if(r&&t>0&&r.slice(-1)!==' ')r+=' ';r+=UNITS[t]}return r.trim()}

/* Dark Mode */
(function(){
var theme=localStorage.getItem('docsperu-theme');
if(theme)document.documentElement.setAttribute('data-theme',theme);
})();

function toggleTheme(){
var html=document.documentElement;
var current=html.getAttribute('data-theme');
var next=current==='dark'?'light':'dark';
html.setAttribute('data-theme',next);
localStorage.setItem('docsperu-theme',next);
updateThemeIcon(next);
}

function updateThemeIcon(theme){
var btn=document.getElementById('themeToggle');
if(!btn)return;
btn.innerHTML=theme==='dark'
?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

/* PDF Loading Overlay */
function showLoading(msg){
var el=document.getElementById('loadingOverlay');
if(!el){el=document.createElement('div');el.id='loadingOverlay';el.className='loading-overlay';el.innerHTML='<div class="loading-spinner"><div class="spinner"></div><p id="loadingMsg">Generando PDF…</p></div>';document.body.appendChild(el)}
document.getElementById('loadingMsg').textContent=msg||'Generando PDF…';
el.classList.add('active');
}
function hideLoading(){
var el=document.getElementById('loadingOverlay');
if(el)el.classList.remove('active');
}

/* Local History */
function saveToHistory(name,dataUrl){
try{
var h=JSON.parse(localStorage.getItem('docsperu-history')||'[]');
h.unshift({name:name,date:new Date().toISOString(),data:dataUrl});
if(h.length>10)h=h.slice(0,10);
localStorage.setItem('docsperu-history',JSON.stringify(h));
}catch(e){}
}
function getHistory(){
try{return JSON.parse(localStorage.getItem('docsperu-history')||'[]')}catch(e){return[]}
}
function clearHistory(){
localStorage.removeItem('docsperu-history');
var el=document.getElementById('historyList');
if(el)el.innerHTML='<li style="justify-content:center;color:var(--muted);font-size:.85rem">No hay documentos recientes.</li>';
}

/* Share */
function sharePDF(name,dataUrl){
var shareData={title:name,text:'Documento generado en DocsPeru — '+name};
if(navigator.share){navigator.share(shareData).catch(function(){})}
else{
var url='https://wa.me/?text='+encodeURIComponent(name+' — Generado en docsperu.site');
window.open(url,'_blank');
}
}

function copyLink(pageUrl){
navigator.clipboard&&navigator.clipboard.writeText(pageUrl||window.location.href);
var btn=document.querySelector('[data-copy]');
if(btn){var t=btn.textContent;btn.textContent='¡Copiado!';setTimeout(function(){btn.textContent=t},1500)}
}

/* Render History Panel */
function renderHistory(){
var h=getHistory();
var el=document.getElementById('historyList');
if(!el)return;
if(!h.length){el.innerHTML='<li style="justify-content:center;color:var(--muted);font-size:.85rem">No hay documentos recientes.</li>';return}
el.innerHTML=h.map(function(item,i){
var d=new Date(item.date);
var dateStr=dateToStr(d)+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
return '<li><div><span class="name">'+item.name+'</span><br><span class="date">'+dateStr+'</span></div><button onclick="downloadHistory('+i+')">Descargar</button></li>';
}).join('');
}

function downloadHistory(i){
var h=getHistory();
if(!h[i]||!h[i].data)return;
var a=document.createElement('a');
a.href=h[i].data;
a.download=h[i].name+'.pdf';
a.click();
}

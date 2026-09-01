function fmtPEN(n){return new Intl.NumberFormat('es-PE',{style:'currency',currency:'PEN',maximumFractionDigits:2}).format(Number(n)||0)}
function toNum(v){const n=parseFloat(String(v??'').replace(/,/g,''));return Number.isFinite(n)?n:0}
function diffYMD(a,b){let y=b.getFullYear()-a.getFullYear(),m=b.getMonth()-a.getMonth(),d=b.getDate()-a.getDate();if(d<0){m--;d+=new Date(b.getFullYear(),b.getMonth(),0).getDate()}if(m<0){y--;m+=12}return{y,m,d}}

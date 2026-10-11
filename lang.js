(function(){var d=document.documentElement,k='lang',s=localStorage.getItem(k)||((navigator.language||'en').slice(0,2)=='es'?'es':'en');
function set(l){d.setAttribute('data-lang',l);d.lang=l;try{localStorage.setItem(k,l)}catch(e){}}
set(s);document.addEventListener('click',function(e){if(e.target.closest('.lang'))set(d.getAttribute('data-lang')=='es'?'en':'es')})})();

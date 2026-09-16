(function(){
  function heal(){
    const btn=document.getElementById('checkout-btn');
    if(!btn) return;
    const s=getComputedStyle(btn);
    if(s.pointerEvents==='none'){
      btn.style.pointerEvents='auto';
      btn.style.opacity='1';
      btn.style.cursor='pointer';
      btn.style.backgroundColor='#16a34a';
    }
  }
  document.addEventListener('DOMContentLoaded',heal);
  heal();
})();
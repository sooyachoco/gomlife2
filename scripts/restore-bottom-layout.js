/* Restore the intended bottom navigation layout after sync.
   Keep the existing recipe card/button in its original position and put the chat banner below all content. */
(function(){
  const CHAT_URL='https://sooyachoco.github.io/GomChat/';
  function fix(){
    const body=document.body;
    if(!body)return;
    // Remove only the stray injected text node/element that literally contains the malformed recipe label.
    [...body.querySelectorAll('*')].forEach(el=>{
      if(el.children.length===0 && /\\n\\n🔍\\s*곰레시피\\n/i.test(el.textContent||'')) el.remove();
    });
    // If a bottom chat banner already exists, normalize it and move it to the very bottom.
    let banner=body.querySelector('[data-bottom-chat-banner]');
    if(!banner){
      banner=document.createElement('a');
      banner.dataset.bottomChatBanner='true';
      banner.href=CHAT_URL;
      banner.textContent='💬 편안하게 대화해요';
      banner.style.cssText='display:block;margin:28px 16px 24px;padding:18px 22px;border-radius:18px;text-align:center;text-decoration:none;font-weight:700;font-size:18px;background:#f3e5d8;color:#4d3b32;box-shadow:0 4px 14px rgba(70,50,40,.10);';
      body.appendChild(banner);
    }else{
      body.appendChild(banner);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);else fix();
})();

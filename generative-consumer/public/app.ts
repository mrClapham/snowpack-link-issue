/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const int = (targ: string): void => {
    document.addEventListener('DOMContentLoaded', e => {
      const targ = document.querySelector('#targ');
      console.log(targ);
    });
  }
  
  
  
  const app = ((target = 'targ') => { return int(target) })();
  
  
  export default app
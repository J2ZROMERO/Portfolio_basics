/* eslint-disable no-unused-expressions */
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0px 15px 10px -15px gray';
  } else {
    header.style.boxShadow = 'none';
  }
});

document.querySelector('.menu_hamburguer').addEventListener('click', () => {
  const menu = document.querySelector('.quick_acces');
  const mobileVersion = document.querySelector('.mobile_version');
  const head = document.querySelector('.header_mobile');
  menu.style.display = 'flex';
  menu.style.flexDirection = 'column';
  menu.style.flexWrap = 'wrap';
  mobileVersion.style.visibility = 'hidden';
  head.style.visibility = 'hidden';
  const menuUl = document.querySelector('.quick_access_ul');
  menuUl.style.height = '90%';
  menuUl.style.background = 'white';
  menuUl.style.borderRadius = '0 0 10% 10%';
  window.onscroll = () => { window.scroll(0, 0); };
});

document.querySelector('.close').addEventListener('click', () => {
  const menu = document.querySelector('.quick_acces');
  const mobileVersion = document.querySelector('.mobile_version');
  const head = document.querySelector('.header_mobile');
  menu.style.display = 'none';
  mobileVersion.style.visibility = 'visible';
  head.style.visibility = 'visible';
  window.onscroll = () => { };
});

document.querySelector('.portfolio_go').addEventListener('click', () => {
  const menu = document.querySelector('.quick_acces');
  const mobileVersion = document.querySelector('.mobile_version');
  const head = document.querySelector('.header_mobile');
  menu.style.display = 'none';
  mobileVersion.style.visibility = 'visible';
  head.style.visibility = 'visible';
  window.onscroll = () => { };
  
  const workSection = document.querySelector('#works_start');
      workSection.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
});

document.querySelector('.contact_go').addEventListener('click', () => {
  const menu = document.querySelector('.quick_acces');
  const mobileVersion = document.querySelector('.mobile_version');
  const head = document.querySelector('.header_mobile');
  menu.style.display = 'none';
  mobileVersion.style.visibility = 'visible';
  head.style.visibility = 'visible';
  window.onscroll = () => { };
  const formSection = document.querySelector('#formmb');
      formSection.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
});

document.querySelector('.about_go').addEventListener('click', () => {
  const menu = document.querySelector('.quick_acces');
  const mobileVersion = document.querySelector('.mobile_version');
  const head = document.querySelector('.header_mobile');
  menu.style.display = 'none';
  mobileVersion.style.visibility = 'visible';
  head.style.visibility = 'visible';
  window.onscroll = () => { };
  const aboutSection = document.querySelector('#about');
      aboutSection.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
});


function css(variable, style) {
  Object.keys(style).forEach((attr) => {
    variable.style[attr] = style[attr];
  });
}


function popupMobil(botton, work) {
  switch (work) {
    case 'responsive':
      botton.addEventListener('click', () => {
        const section = document.createElement('section');
        section.className = 'containermb';
hideHeader();
        // centerpopup();
        const mbversionelem = `
        <div class="contentmb">
        <img class="closeMMmb" src="images/popup_mobile/Icon.svg">
        <video class="imagemb" controls autoplay>
        <source src="images/recent_works/course.mp4" type="video/webm">
        <source src="images/recent_works/course.mp4" type="video/mp4">
        <img src="images/recent_works/course.png" alt="Imagen de muestra">
      </video>
      
        <h2 class="titlemb" >Development course web page</h2>
        <p class="textmb">This is an informative and responsive website. The styles, events, and effects make the interaction attractive.</p>
        <ul class="works_buttonsmb">
        
        
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">CSS</span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">HTML</span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">GitHub pages</span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">ES6<span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">External typography</span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Animations</span></button></li>
        
        </ul>

        <ul class="buttons_actionmb">
        <li>
        <a href="https://j2zromero.github.io/Responsive-webPage/" target='_blanck'>
        <button class="livemb">
        <span class="seemb">See Live</span>
        <img src="images/popup_mobile/IconExport.svg"></button></a>
        </li>

        <li>
        <a href="https://github.com/J2ZROMERO/Responsive-webPage" target='_blanck'>
        <button class="sourcemb">
        <span class="seemb Pmb">See source</span>
        <img src="images/popup_mobile/IconGitHub.svg"></button></a>
        </li>
        </ul>
        
        </div>
  `;
        section.innerHTML = mbversionelem;

    
        const mobileVersion = document.querySelector('.mobile_version');
        const mobileVE = [];

        while (mobileVersion.hasChildNodes()) {
          mobileVE.push(mobileVersion.firstChild);
          mobileVersion.removeChild(mobileVersion.firstChild);
        }
        document.body.removeChild(mobileVersion);
        document.body.appendChild(section);


        document.querySelector('.closeMMmb').addEventListener('click', () => {
          document.body.removeChild(section);
          showHeader();
  
          document.body.appendChild(mobileVersion);
          for (let i = 0; i <= mobileVE.length - 1; i += 1) {
            mobileVersion.appendChild(mobileVE[i]);
          }

       
        });
      });
      break;
    
    case 'budget':

      botton.addEventListener('click', () => {
        const section = document.createElement('section');
        section.className = 'containermb';
hideHeader();
      

        const mbversionelem = `
        <div class="contentmb">
        <img class="closeMMmb" src="images/popup_mobile/Icon.svg">
        <div>
        <video class="imagemb" controls autoplay>
        <source src="images/recent_works/budget.mp4" type="video/webm">
        <source src="images/recent_works/budget.mp4" type="video/mp4">
        <img src="images/recent_works/budget.png" alt="Imagen de muestra">
      </video>
        </div>
        <h2 class="titlemb" >Budget</h2>
        <p class="textmb">Sign up, confirm, and log in with your credentials. Once you do, you will have access to create your categories and add transactions to them. The website cache will save your credentials and the database of your records.</p>
        <ul class="works_buttonsmb">
        
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Rails</span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Ruby</span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Batchfile</span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">MVC model</span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">ES6<span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Linters</span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Shell</span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">RSpec</span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Render</span></button></li>
        <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Device</span></button></li>
        
        
        </ul>
        <ul class="buttons_actionmb">
        <li>
        <a href="https://github.com/J2ZROMERO/Budget_app" target='_blanck'>
        <button class="livemb">
        <span class="seemb">See Live</span>
        <img src="images/popup_mobile/IconExport.svg"></button></a></li>

        <li><a href="https://budget-app-v1.onrender.com/" target='_blanck'>
        <button class="sourcemb">
        <span class="seemb Pmb">See source</span>
        <img src="images/popup_mobile/IconGitHub.svg"></button></a>
        </li></ul></div>
  `;
        section.innerHTML = mbversionelem;

        const mobileVersion = document.querySelector('.mobile_version');
        const mobileVE = [];

        while (mobileVersion.hasChildNodes()) {
          mobileVE.push(mobileVersion.firstChild);
          mobileVersion.removeChild(mobileVersion.firstChild);
        }
        document.body.removeChild(mobileVersion);
        document.body.appendChild(section);

   

        document.querySelector('.closeMMmb').addEventListener('click', () => {
          document.body.removeChild(section);
        showHeader();
          

          document.body.appendChild(mobileVersion);
          for (let i = 0; i <= mobileVE.length - 1; i += 1) {
            mobileVersion.appendChild(mobileVE[i]);
          }

       
        });
      });
  break;
    case 'todo':
        botton.addEventListener('click', () => {
          const section = document.createElement('section');
          section.className = 'containermb';
  hideHeader();
      
          const mbversionelem = `
          <div class="contentmb">
          <img class="closeMMmb" src="images/popup_mobile/Icon.svg">
          <div>
          <video class="imagemb" controls autoplay>
          <source src="images/recent_works/todolist.mp4" type="video/webm">
        <source src="images/recent_works/todolist.mp4" type="video/mp4">
        <img src="images/recent_works/todolist.png" alt="Imagen de muestra">
      </video>
          </div>
          <h2 class="titlemb" >To-Do list</h2>
          <p class="textmb">Use this project as a tool to remember your daily tasks. Confirming, editing, and removing are actions you can take with tasks. Your data is saved in LocalStorage, so every time you open or refresh the page, all changes will be present.</p>
          <ul class="works_buttonsmb">
          
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Webpack</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">ESlint</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">ES6</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">LocalStorage<span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Jest</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">GitHub pages</span></button></li>
          
          </ul>
          <ul class="buttons_actionmb">
          <li>
          <a href="https://j2zromero.github.io/To-do-list/dist/" target='_blanck'>
          <button class="livemb">
          <span class="seemb">See Live</span>
          <img src="images/popup_mobile/IconExport.svg"></button></a></li>
  
          <li><a href="https://github.com/J2ZROMERO/To-do-list" target='_blanck'>
          <button class="sourcemb">
          <span class="seemb Pmb">See source</span>
          <img src="images/popup_mobile/IconGitHub.svg"></button></a>
          </li></ul></div>
    `;
          section.innerHTML = mbversionelem;
  
          const mobileVersion = document.querySelector('.mobile_version');
          const mobileVE = [];
  
          while (mobileVersion.hasChildNodes()) {
            mobileVE.push(mobileVersion.firstChild);
            mobileVersion.removeChild(mobileVersion.firstChild);
          }
          document.body.removeChild(mobileVersion);
          document.body.appendChild(section);
  
       
          document.querySelector('.closeMMmb').addEventListener('click', () => {
            document.body.removeChild(section);
  showHeader();
            
  
            document.body.appendChild(mobileVersion);
            for (let i = 0; i <= mobileVE.length - 1; i += 1) {
              mobileVersion.appendChild(mobileVE[i]);
            }
  
          
          });
        });
break;  

    case 'math':
        botton.addEventListener('click', () => {
          const section = document.createElement('section');
          section.className = 'containermb';
  hideHeader();
         
  
          const mbversionelem = `
          <div class="contentmb">
          <img class="closeMMmb" src="images/popup_mobile/Icon.svg">
          <div>
          <video class="imagemb" controls autoplay>
          <source src="images/recent_works/math.mp4" type="video/webm">
        <source src="images/recent_works/math.mp4" type="video/mp4">
        <img src="images/recent_works/math.png" alt="Imagen de muestra">
      </video>
          </div>
          <h2 class="titlemb" >Math magicians</h2>
          <p class="textmb">This is a React calculator that can be used for basic operations. It uses React Router to navigate between informative and calculator sections.</p>
          <ul class="works_buttonsmb">
          
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">ES6<span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">React<span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Big js dependency<span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Webpack</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Netlify</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">React Routes</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Eslint</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">State and props</span></button></li>
          
          </ul>
          <ul class="buttons_actionmb">
          <li>
          <a href="https://deploy-preview-6--sage-gaufre-cb8c5e.netlify.app/" target='_blanck'>
          <button class="livemb">
          <span class="seemb">See Live</span>
          <img src="images/popup_mobile/IconExport.svg"></button></a></li>
  
          <li><a href="https://github.com/J2ZROMERO/Math-Magicians" target='_blanck'>
          <button class="sourcemb">
          <span class="seemb Pmb">See source</span>
          <img src="images/popup_mobile/IconGitHub.svg"></button></a>
          </li></ul></div>
    `;
          section.innerHTML = mbversionelem;
  
          const mobileVersion = document.querySelector('.mobile_version');
          const mobileVE = [];
  
          while (mobileVersion.hasChildNodes()) {
            mobileVE.push(mobileVersion.firstChild);
            mobileVersion.removeChild(mobileVersion.firstChild);
          }
          document.body.removeChild(mobileVersion);
          document.body.appendChild(section);
  
         
  
          document.querySelector('.closeMMmb').addEventListener('click', () => {
            document.body.removeChild(section);
  showHeader();
            
  
            document.body.appendChild(mobileVersion);
            for (let i = 0; i <= mobileVE.length - 1; i += 1) {
              mobileVersion.appendChild(mobileVE[i]);
            }
  
          });
        });
break;  


    case 'coin':
        botton.addEventListener('click', () => {
          const section = document.createElement('section');
          section.className = 'containermb';
  hideHeader();
   
  
          const mbversionelem = `
          <div class="contentmb">
          <img class="closeMMmb" src="images/popup_mobile/Icon.svg">
          <div>
          <video class="imagemb" controls autoplay>
          <source src="images/recent_works/coin.mp4" type="video/webm">
        <source src="images/recent_works/coin.mp4" type="video/mp4">
        <img src="images/recent_works/coin.png" alt="Imagen de muestra">
      </video>
          </div>
          <h2 class="titlemb" >Coin stats</h2>
          <p class="textmb">By dispatching the state of React-Redux to retrieve data from a cryptocurrency API, the interface offers details about various coins, while providing links to their official pages for reference.</p>
          <ul class="works_buttonsmb">
          
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">React-Redux</span></button></li>

          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">CSS</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">HTML</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Babel</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">ES6<span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Netlify</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">External API</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">External Official Links</span></button></li>
          
          </ul>
          <ul class="buttons_actionmb">
          <li>
          <a href="https://phenomenal-donut-e18495.netlify.app/" target='_blanck'>
          <button class="livemb">
          <span class="seemb">See Live</span>
          <img src="images/popup_mobile/IconExport.svg"></button></a></li>
  
          <li><a href="https://github.com/J2ZROMERO/Coin-Stats" target='_blanck'>
          <button class="sourcemb">
          <span class="seemb Pmb">See source</span>
          <img src="images/popup_mobile/IconGitHub.svg"></button></a>
          </li></ul></div>
    `;
          section.innerHTML = mbversionelem;
  
          const mobileVersion = document.querySelector('.mobile_version');
          const mobileVE = [];
  
          while (mobileVersion.hasChildNodes()) {
            mobileVE.push(mobileVersion.firstChild);
            mobileVersion.removeChild(mobileVersion.firstChild);
          }
          document.body.removeChild(mobileVersion);
          document.body.appendChild(section);
  
         
  
          document.querySelector('.closeMMmb').addEventListener('click', () => {
            document.body.removeChild(section);
  showHeader();
            
  
            document.body.appendChild(mobileVersion);
            for (let i = 0; i <= mobileVE.length - 1; i += 1) {
              mobileVersion.appendChild(mobileVE[i]);
            }
  
         
          });
        });
break;  

    case 'book':
        botton.addEventListener('click', () => {
          const section = document.createElement('section');
          section.className = 'containermb';
  hideHeader();
          
  
          const mbversionelem = `
          <div class="contentmb">
          <img class="closeMMmb" src="images/popup_mobile/Icon.svg">
          <div>
          <video class="imagemb" controls autoplay>
          <source src="images/recent_works/book.mp4" type="video/webm">
        <source src="images/recent_works/book.mp4" type="video/mp4">
        <img src="images/recent_works/book.png" alt="Imagen de muestra">
      </video>
          </div>
          <h2 class="titlemb" >Awesome books</h2>
          <p class="textmb">Create, remove books, save your data in the local storage, enjoy some style effects and contact us.</p>
          <ul class="works_buttonsmb">
          
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">CSS</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">HTML</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Eslint</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">GitHub pages</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">ES6<span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">LocalStorage</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Luxon library</span></button></li>
      
          
          </ul>
          <ul class="buttons_actionmb">
          <li>
          <a href="https://j2zromero.github.io/Awesome-Books-ES6/" target='_blanck'>
          <button class="livemb">
          <span class="seemb">See Live</span>
          <img src="images/popup_mobile/IconExport.svg"></button></a></li>
  
          <li><a href="https://github.com/J2ZROMERO/Awesome-Books-ES6" target='_blanck'>
          <button class="sourcemb">
          <span class="seemb Pmb">See source</span>
          <img src="images/popup_mobile/IconGitHub.svg"></button></a>
          </li></ul></div>
    `;
          section.innerHTML = mbversionelem;
  
          const mobileVersion = document.querySelector('.mobile_version');
          const mobileVE = [];
  
          while (mobileVersion.hasChildNodes()) {
            mobileVE.push(mobileVersion.firstChild);
            mobileVersion.removeChild(mobileVersion.firstChild);
          }
          document.body.removeChild(mobileVersion);
          document.body.appendChild(section);
  
        
  
          document.querySelector('.closeMMmb').addEventListener('click', () => {
            document.body.removeChild(section);
  showHeader();
            
  
            document.body.appendChild(mobileVersion);
            for (let i = 0; i <= mobileVE.length - 1; i += 1) {
              mobileVersion.appendChild(mobileVE[i]);
            }
  
          
          });
        });
break;  
    case 'board':
        botton.addEventListener('click', () => {
          const section = document.createElement('section');
          section.className = 'containermb';
  hideHeader();
          const mbversionelem = `
          <div class="contentmb">
          <img class="closeMMmb" src="images/popup_mobile/Icon.svg">
          <div>
          <video class="imagemb" controls autoplay>
          <source src="images/recent_works/board.mp4" type="video/webm">
        <source src="images/recent_works/board.mp4" type="video/mp4">
        <img src="images/recent_works/board.png" alt="Imagen de muestra">
      </video>
          </div>
          <h2 class="titlemb" >Leader Board</h2>
          <p class="textmb">Create and save names as well as scores to them, localstorage will save your data.

          </p>
          <ul class="works_buttonsmb">
          
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">CSS</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">HTML</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Eslint</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">GitHub pages</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">ES6<span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">LocalStorage</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">Webpack</span></button></li>
          <li class="toolsmb"><button class="wb_actionmb" value="Input Buttom" type="submit"><span class="tolmb">API</span></button></li>
          
          </ul>
          <ul class="buttons_actionmb">
          <li>
          <a href="https://j2zromero.github.io/Leader-board/dist/" target='_blanck'>
          <button class="livemb">
          <span class="seemb">See Live</span>
          <img src="images/popup_mobile/IconExport.svg"></button></a></li>
  
          <li><a href="https://github.com/J2ZROMERO/Leader-board" target='_blanck'>
          <button class="sourcemb">
          <span class="seemb Pmb">See source</span>
          <img src="images/popup_mobile/IconGitHub.svg"></button></a>
          </li></ul></div>
    `;
          section.innerHTML = mbversionelem;
  
          const mobileVersion = document.querySelector('.mobile_version');
          const mobileVE = [];
  
          while (mobileVersion.hasChildNodes()) {
            mobileVE.push(mobileVersion.firstChild);
            mobileVersion.removeChild(mobileVersion.firstChild);
          }
          document.body.removeChild(mobileVersion);
          document.body.appendChild(section);
  
      
          document.querySelector('.closeMMmb').addEventListener('click', () => {
            document.body.removeChild(section);
  showHeader();
            
  
            document.body.appendChild(mobileVersion);
            for (let i = 0; i <= mobileVE.length - 1; i += 1) {
              mobileVersion.appendChild(mobileVE[i]);
            }
  
          });
        });
break;  
    default: null;
  }
}

///local storage
const nameI = document.querySelector('.name_input');
const emailI = document.querySelector('.email_input');
const textI = document.querySelector('.textarea');

const inputs = [nameI, emailI, textI];

for (let i = 0; i < inputs.length; i += 1) {
  inputs[i].addEventListener('input', () => {
    const data = {
      nameV: nameI.value,
      emailV: emailI.value,
      textAV: textI.value,
    };

    localStorage.setItem('dataFormUser', JSON.stringify(data));
  });
}

window.addEventListener('load', () => {
  let dataLS = localStorage.getItem('dataFormUser');
  dataLS = JSON.parse(dataLS);

  if (dataLS != null) {
    nameI.value = dataLS.nameV;
    emailI.value = dataLS.emailV;
    textI.value = dataLS.textAV;
  }
});

// popup mobile
const seecoursemb = document.querySelector('.seeresponsivemb');
const seetodomb = document.querySelector('.seetodomb');
const seebudgetmb = document.querySelector('.seebudgetmb');
const seemathmb = document.querySelector('.seemathmb');
const seecoinmb = document.querySelector('.seecoinmb');
const seebookmb = document.querySelector('.seebookmb');
const seeboardmb = document.querySelector('.seeboardmb');

popupMobil(seeboardmb, 'board');
popupMobil(seebookmb, 'book');
popupMobil(seecoinmb, 'coin');
popupMobil(seemathmb, 'math');
popupMobil(seebudgetmb, 'budget');
popupMobil(seetodomb, 'todo');
popupMobil(seecoursemb, 'responsive');


const hideHeader = () => {
  
  const head = document.querySelector('.header_mobile');
  head.style.display = 'none';
  const body = document.querySelector('body');
css(body, {
  margin: '0px',
  display: 'flex',
  'align-items': 'center',
});
};
const showHeader = () => {
  
  const head = document.querySelector('.header_mobile');
  head.style.display = 'block';
  head.style.position = 'fixed';

  const body = document.querySelector('body');
css(body, {
  margin: '0',
  'background-color': 'white',
  display: 'block',
});
};
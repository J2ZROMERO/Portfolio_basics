
// desktop

function popupDesktop(botton, work) {
  switch (work) {
    case 'todolist':

      botton.addEventListener('click', () => {
        const section = document.createElement('section');
        section.className = 'container';

        css(section, {
          width: '100vw',
          height: '100vh',
          background: '#C1C7D0',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        });

        const content = document.createElement('div');
        content.className = 'content';

        css(content, {
          'box-sizing': 'border-box',
          display: 'flex',
          'flex-wrap': 'wrap',
          padding: '16px',
          gap: '9px',
          width: '67vh',
          height: '87vh',
          top: '20px',
          background: ' #FFFFFF',
          border: '1px solid #DFE1E6',
          'border-radius': '16px',
          'align-items': 'baseline',
          'justify-content': 'space-between',
        });
        const todolist = `
  <img class="closeMM" src="images/popup_desktop/IconCancel.svg">
   
  <video class="image" controls autoplay>
  <source src="images/recent_works/todolist.webm" type="video/webm">
  <source src="images/recent_works/todolist.mp4" type="video/mp4">
  <img src="images/recent_works/todolist.png" alt="Imagen de muestra">
</video>


  <h2 class="title">To-do list</h2>
  <ul class="buttons_action">
  <li><a href="https://j2zromero.github.io/To-do-list/dist/">
  <button class="live"><span class="see">See Live</span><img src="images/popup_desktop/IconExport.svg"></button></a>
  </li>
  <li><a href="https://github.com/J2ZROMERO/To-do-list">
  <button class="source"><span class="see P">See source</span><img src="images/popup_desktop/IconGitHub.svg"></button></a>
  </li>
  </ul>
  <ul class="works_buttons">
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">css</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Webpack</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">ESlint</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">ES6</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Flex Box</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">LocalStorage</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Jest</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">GitHub pages</button></li>
  </button></li>
  
  </ul>
  <p class="text">Use this project as a tool for remembering your daily tasks, confirming, editing, remove are actions you can do to tasks, your data is saved in the LocalStorage so every time you open or refresh the page all changes will be present.</p>
  
  `;

        content.innerHTML = todolist;
        section.appendChild(content);
        const desktopVersion = document.querySelector('.desktop_version');
        const head = document.querySelector('.backgrund_main');
        const body = document.querySelector('body');
        // head.style.visibility = 'hidden';
        body.insertBefore(section, head);
        
        disableNavbar();

        const desktopVE = [];

        while (desktopVersion.hasChildNodes()) {
          desktopVE.push(desktopVersion.firstChild);
          desktopVersion.removeChild(desktopVersion.firstChild);
        }
        body.removeChild(desktopVersion);

        window.scroll({
          top: 0,
          behavior: 'auto',
        });

        document.querySelector('.closeMM').addEventListener('click', () => {
          
          document.body.removeChild(section);
          
          enableNavbar();
          
          body.appendChild(desktopVersion);
          for (let i = 0; i <= desktopVE.length - 1; i += 1) {
            desktopVersion.appendChild(desktopVE[i]);
          }

          window.scroll({
            top: 1100,
            behavior: 'auto',
          });
        });
      });

      break;
    case 'course':

      botton.addEventListener('click', () => {
        const section = document.createElement('section');
        section.className = 'container';

        css(section, {
          width: '100vw',
          height: '100vh',
          background: '#C1C7D0',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        });

        const content = document.createElement('div');
        content.className = 'content';

        css(content, {
          'box-sizing': 'border-box',
          display: 'flex',
          'flex-wrap': 'wrap',
          padding: '16px',
          gap: '9px',
          width: '67vh',
          height: '87vh',
          top: '20px',
          background: ' #FFFFFF',
          border: '1px solid #DFE1E6',
          'border-radius': '16px',
          'align-items': 'baseline',
          'justify-content': 'space-between',
        });
        const course = `
  <img class="closeMM" src="images/popup_desktop/IconCancel.svg">
  <video class="image" controls autoplay>
  <source src="images/recent_works/course.webm" type="video/webm">
  <source src="images/recent_works/course.mp4" type="video/mp4">
  <img src="images/recent_works/course.png" alt="Imagen de muestra">
</video>

  <h2 class="title">Development course web page</h2>
  <ul class="buttons_action"><li><a href="https://j2zromero.github.io/Responsive-webPage/" target='_blanck'><button class="live" style="display: flex; align-items: center; padding: 12px 5px 12px 0px; gap: 2px; height: 37px; border: 0px; background: rgb(54, 179, 127); width: 101px; border-radius: 4px; justify-content: end; cursor: pointer;"><span class="see" style="width: 72px; height: 24px; font-style: normal; font-weight: 500; font-size: 11px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See Live</span><img src="images/popup_desktop/IconExport.svg"></button></a></li>
  <li><a href="https://github.com/J2ZROMERO/Responsive-webPage" target='_blanck'><button class="source"><span class="see P">See source</span>
  <img src="images/popup_desktop/IconGitHub.svg"></button></a></li></ul>
  <ul class="works_buttons">

        <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Webpack</button></li>
        <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Eslint</button></li>
        <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Flexbox</button></li>
        <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Jest</button></li>
        <li class="tools"><button class="button_work" value="Input Buttom" type="submit">ES6</button></li>
  
  </ul>
  <p class="text">Use a responsive web page, to add several sections to your web page and show activities like, courses, events, concerts, etc.</p>
  
  `;

        content.innerHTML = course;
        section.appendChild(content);

        const desktopVersion = document.querySelector('.desktop_version');
        const head = document.querySelector('.backgrund_main');
        const body = document.querySelector('body');
        body.insertBefore(section, head);

        const desktopVE = [];
        disableNavbar();
        while (desktopVersion.hasChildNodes()) {
          desktopVE.push(desktopVersion.firstChild);
          desktopVersion.removeChild(desktopVersion.firstChild);
        }
        body.removeChild(desktopVersion);

        window.scroll({
          top: 0,
          behavior: 'auto',
        });

        document.querySelector('.closeMM').addEventListener('click', () => {
          document.body.removeChild(section);
          enableNavbar();
          body.appendChild(desktopVersion);
          for (let i = 0; i <= desktopVE.length - 1; i += 1) {
            desktopVersion.appendChild(desktopVE[i]);
          }

          window.scroll({
            top: 1100,
            behavior: 'auto',
          });
        });
      });

      break;
    case 'math':
        botton.addEventListener('click', () => {
          const section = document.createElement('section');
          section.className = 'container';
  
          css(section, {
            width: '100vw',
            height: '100vh',
            background: '#C1C7D0',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
          });
  
          const content = document.createElement('div');
          content.className = 'content';
  
          css(content, {
            'box-sizing': 'border-box',
            display: 'flex',
            'flex-wrap': 'wrap',
            padding: '16px',
            gap: '9px',
            width: '67vh',
            height: '87vh',
            top: '20px',
            background: ' #FFFFFF',
            border: '1px solid #DFE1E6',
            'border-radius': '16px',
            'align-items': 'baseline',
            'justify-content': 'space-between',
          });
          const course = `
    <img class="closeMM" src="images/popup_desktop/IconCancel.svg">
    <video class="image" controls autoplay>
    <source src="images/recent_works/math.webm" type="video/webm">
    <source src="images/recent_works/math.mp4" type="video/mp4">
    <img src="images/recent_works/math.png" alt="Imagen de muestra">
  </video>
  
    <h2 class="title">Math Magicians</h2>
    <ul class="buttons_action">
    <li><a href="https://deploy-preview-6--sage-gaufre-cb8c5e.netlify.app/" target='_blanck'><button class="live" style="display: flex; align-items: center; padding: 12px 5px 12px 0px; gap: 2px; height: 37px; border: 0px; background: rgb(54, 179, 127); width: 101px; border-radius: 4px; justify-content: end; cursor: pointer;"><span class="see" style="width: 72px; height: 24px; font-style: normal; font-weight: 500; font-size: 11px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See Live</span><img src="images/popup_desktop/IconExport.svg"></button></a></li>
    <li><a href="https://github.com/J2ZROMERO/Math-Magicians" target='_blanck'><button class="source"><span class="see P">See source</span>
    <img src="images/popup_desktop/IconGitHub.svg"></button></a></li></ul>
    <ul class="works_buttons">
  
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Webpack</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Netlify</button></li>   
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">ES6</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">ESlint</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">React</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Big js dependency</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">State and Props</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">React Routes</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Flex Box</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">GitHub pages</button></li>
    
    </ul>
    <p class="text">This is a React calculator that can be used for basic operations. It offers a navbar to navigate through 3 sections and to see more information about it.</p>
    
    `;
  
          content.innerHTML = course;
          section.appendChild(content);
  
          const desktopVersion = document.querySelector('.desktop_version');
          const head = document.querySelector('.backgrund_main');
          const body = document.querySelector('body');
          body.insertBefore(section, head);
  
          const desktopVE = [];
          disableNavbar();
          while (desktopVersion.hasChildNodes()) {
            desktopVE.push(desktopVersion.firstChild);
            desktopVersion.removeChild(desktopVersion.firstChild);
          }
          body.removeChild(desktopVersion);
  
          window.scroll({
            top: 0,
            behavior: 'auto',
          });
  
          document.querySelector('.closeMM').addEventListener('click', () => {
            document.body.removeChild(section);
            enableNavbar();
            body.appendChild(desktopVersion);
            for (let i = 0; i <= desktopVE.length - 1; i += 1) {
              desktopVersion.appendChild(desktopVE[i]);
            }
  
            window.scroll({
              top: 1100,
              behavior: 'auto',
            });
          });
        });
      break;
    case 'budget':

      botton.addEventListener('click', () => {
        const section = document.createElement('section');
        section.className = 'container';

        css(section, {
          width: '100vw',
          height: '100vh',
          background: '#C1C7D0',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        });

        const content = document.createElement('div');
        content.className = 'content';

        css(content, {
          'box-sizing': 'border-box',
          display: 'flex',
          'flex-wrap': 'wrap',
          padding: '16px',
          gap: '9px',
          width: '67vh',
          height: '87vh',
          top: '20px',
          background: ' #FFFFFF',
          border: '1px solid #DFE1E6',
          'border-radius': '16px',
          'align-items': 'baseline',
          'justify-content': 'space-between',
        });
        const course = `
  <img class="closeMM" src="images/popup_desktop/IconCancel.svg">
  <video class="image" controls autoplay>
  <source src="images/recent_works/budget.webm" type="video/webm">
  <source src="images/recent_works/budget.mp4" type="video/mp4">
  <img src="images/recent_works/budget.png" alt="Imagen de muestra">
</video>

  <h2 class="title">Budget app</h2>
  <ul class="buttons_action">
  <li><a href="https://budget-app-v1.onrender.com/" target='_blanck'><button class="live" style="display: flex; align-items: center; padding: 12px 5px 12px 0px; gap: 2px; height: 37px; border: 0px; background: rgb(54, 179, 127); width: 101px; border-radius: 4px; justify-content: end; cursor: pointer;"><span class="see" style="width: 72px; height: 24px; font-style: normal; font-weight: 500; font-size: 11px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See Live</span><img src="images/popup_desktop/IconExport.svg"></button></a></li>
  <li><a href="https://github.com/J2ZROMERO/Budget_app" target='_blanck'><button class="source"><span class="see P">See source</span>
  <img src="images/popup_desktop/IconGitHub.svg"></button></a></li></ul>
  <ul class="works_buttons">

  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Rails</button></li>
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Ruby</button></li>
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Batchfile</button></li>
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">MVC model</button></li>
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">ES6</button></li>
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Linters</button></li>
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Shell</button></li>
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">RSpec</button></li>
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Render</button></li>
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Device</button></li>
  
  </ul>
  <p class="text">Create your categories and add some transactions, the web cache will save your credentials and the database of your recordings.</p>
  
  `;

        content.innerHTML = course;
        section.appendChild(content);

        const desktopVersion = document.querySelector('.desktop_version');
        const head = document.querySelector('.backgrund_main');
        const body = document.querySelector('body');
        body.insertBefore(section, head);

        const desktopVE = [];
        disableNavbar();
        while (desktopVersion.hasChildNodes()) {
          desktopVE.push(desktopVersion.firstChild);
          desktopVersion.removeChild(desktopVersion.firstChild);
        }
        body.removeChild(desktopVersion);

        window.scroll({
          top: 0,
          behavior: 'auto',
        });

        document.querySelector('.closeMM').addEventListener('click', () => {
          document.body.removeChild(section);
          enableNavbar();
          body.appendChild(desktopVersion);
          for (let i = 0; i <= desktopVE.length - 1; i += 1) {
            desktopVersion.appendChild(desktopVE[i]);
          }

          window.scroll({
            top: 1100,
            behavior: 'auto',
          });
        });
      });
      break;
    case 'coin':
      
      botton.addEventListener('click', () => {
        const section = document.createElement('section');
        section.className = 'container';

        css(section, {
          width: '100vw',
          height: '100vh',
          background: '#C1C7D0',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        });

        const content = document.createElement('div');
        content.className = 'content';

        css(content, {
          'box-sizing': 'border-box',
          display: 'flex',
          'flex-wrap': 'wrap',
          padding: '16px',
          gap: '9px',
          width: '67vh',
          height: '87vh',
          top: '20px',
          background: ' #FFFFFF',
          border: '1px solid #DFE1E6',
          'border-radius': '16px',
          'align-items': 'baseline',
          'justify-content': 'space-between',
        });
        const course = `
  <img class="closeMM" src="images/popup_desktop/IconCancel.svg">
  <video class="image" controls autoplay>
  <source src="images/recent_works/coin.webm" type="video/webm">
  <source src="images/recent_works/coin.mp4" type="video/mp4">
  <img src="images/recent_works/coin.png" alt="Imagen de muestra">
</video>

  <h2 class="title">Coin Stat</h2>
  <ul class="buttons_action">
  <li><a href="https://phenomenal-donut-e18495.netlify.app/" target='_blanck'><button class="live" style="display: flex; align-items: center; padding: 12px 5px 12px 0px; gap: 2px; height: 37px; border: 0px; background: rgb(54, 179, 127); width: 101px; border-radius: 4px; justify-content: end; cursor: pointer;"><span class="see" style="width: 72px; height: 24px; font-style: normal; font-weight: 500; font-size: 11px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See Live</span><img src="images/popup_desktop/IconExport.svg"></button></a></li>
  <li><a href="https://github.com/J2ZROMERO/Coin-Stats" target='_blanck'><button class="source"><span class="see P">See source</span>
  <img src="images/popup_desktop/IconGitHub.svg"></button></a></li></ul>
  <ul class="works_buttons">

  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Rails</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">CSS</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">HTML</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Babel</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">ES6</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">React-Redux</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Netlify</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">External API</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">External official links</button></li>
  </ul>
  <p class="text">The interface consumes a cryptocurrency API and displays details about various coins while providing links to their official pages for reference.</p>
  
  `;

        content.innerHTML = course;
        section.appendChild(content);

        const desktopVersion = document.querySelector('.desktop_version');
        const head = document.querySelector('.backgrund_main');
        const body = document.querySelector('body');
        body.insertBefore(section, head);

        const desktopVE = [];
        disableNavbar();
        while (desktopVersion.hasChildNodes()) {
          desktopVE.push(desktopVersion.firstChild);
          desktopVersion.removeChild(desktopVersion.firstChild);
        }
        body.removeChild(desktopVersion);

        window.scroll({
          top: 0,
          behavior: 'auto',
        });

        document.querySelector('.closeMM').addEventListener('click', () => {
          document.body.removeChild(section);
          enableNavbar();
          body.appendChild(desktopVersion);
          for (let i = 0; i <= desktopVE.length - 1; i += 1) {
            desktopVersion.appendChild(desktopVE[i]);
          }

          window.scroll({
            top: 1100,
            behavior: 'auto',
          });
        });
      });
      break;
    case 'book':
      
      botton.addEventListener('click', () => {
        const section = document.createElement('section');
        section.className = 'container';

        css(section, {
          width: '100vw',
          height: '100vh',
          background: '#C1C7D0',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        });

        const content = document.createElement('div');
        content.className = 'content';

        css(content, {
          'box-sizing': 'border-box',
          display: 'flex',
          'flex-wrap': 'wrap',
          padding: '16px',
          gap: '9px',
          width: '67vh',
          height: '87vh',
          top: '20px',
          background: ' #FFFFFF',
          border: '1px solid #DFE1E6',
          'border-radius': '16px',
          'align-items': 'baseline',
          'justify-content': 'space-between',
        });
        const course = `
  <img class="closeMM" src="images/popup_desktop/IconCancel.svg">
  <video class="image" controls autoplay>
  
  <source src="images/recent_works/book.webm" type="video/webm">
  <source src="images/recent_works/book.mp4" type="video/mp4">
  <img src="images/recent_works/book.png" alt="Imagen de muestra">
</video>

  <h2 class="title">Awesome Books</h2>
  <ul class="buttons_action">
  <li><a href="https://j2zromero.github.io/Awesome-Books-ES6/" target='_blanck'><button class="live" style="display: flex; align-items: center; padding: 12px 5px 12px 0px; gap: 2px; height: 37px; border: 0px; background: rgb(54, 179, 127); width: 101px; border-radius: 4px; justify-content: end; cursor: pointer;"><span class="see" style="width: 72px; height: 24px; font-style: normal; font-weight: 500; font-size: 11px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See Live</span><img src="images/popup_desktop/IconExport.svg"></button></a></li>
  <li><a href="https://github.com/J2ZROMERO/Awesome-Books-ES6" target='_blanck'><button class="source"><span class="see P">See source</span>
  <img src="images/popup_desktop/IconGitHub.svg"></button></a></li></ul>
  <ul class="works_buttons">
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">CSS</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">HTML</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">ES6</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">ESlint</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">LocalStorage</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">GitHub pages</button></li>
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Luxon library</button></li>
  </ul>
  <p class="text">Create, remove books, save your data in the local storage, and contact us.</p>
  
  `;

        content.innerHTML = course;
        section.appendChild(content);

        const desktopVersion = document.querySelector('.desktop_version');
        const head = document.querySelector('.backgrund_main');
        const body = document.querySelector('body');
        body.insertBefore(section, head);

        const desktopVE = [];
        disableNavbar();
        while (desktopVersion.hasChildNodes()) {
          desktopVE.push(desktopVersion.firstChild);
          desktopVersion.removeChild(desktopVersion.firstChild);
        }
        body.removeChild(desktopVersion);

        window.scroll({
          top: 0,
          behavior: 'auto',
        });

        document.querySelector('.closeMM').addEventListener('click', () => {
          document.body.removeChild(section);
          enableNavbar();
          body.appendChild(desktopVersion);
          for (let i = 0; i <= desktopVE.length - 1; i += 1) {
            desktopVersion.appendChild(desktopVE[i]);
          }

          window.scroll({
            top: 1100,
            behavior: 'auto',
          });
        });
      });
      break;
    case 'board':
      
      botton.addEventListener('click', () => {
        const section = document.createElement('section');
        section.className = 'container';

        css(section, {
          width: '100vw',
          height: '100vh',
          background: '#C1C7D0',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        });

        const content = document.createElement('div');
        content.className = 'content';

        css(content, {
          'box-sizing': 'border-box',
          display: 'flex',
          'flex-wrap': 'wrap',
          padding: '16px',
          gap: '9px',
          width: '67vh',
          height: '87vh',
          top: '20px',
          background: ' #FFFFFF',
          border: '1px solid #DFE1E6',
          'border-radius': '16px',
          'align-items': 'baseline',
          'justify-content': 'space-between',
        });
        const course = `
  <img class="closeMM" src="images/popup_desktop/IconCancel.svg">
  <video class="image" controls autoplay>
  <source src="images/recent_works/board.webm" type="video/webm">
  <source src="images/recent_works/board.mp4" type="video/mp4">
  <img src="images/recent_works/board.png" alt="Imagen de muestra">
</video>

  <h2 class="title">Awesome Books</h2>
  <ul class="buttons_action">
  <li><a href="https://j2zromero.github.io/Leader-board/dist/" target='_blanck'><button class="live" style="display: flex; align-items: center; padding: 12px 5px 12px 0px; gap: 2px; height: 37px; border: 0px; background: rgb(54, 179, 127); width: 101px; border-radius: 4px; justify-content: end; cursor: pointer;"><span class="see" style="width: 72px; height: 24px; font-style: normal; font-weight: 500; font-size: 11px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See Live</span><img src="images/popup_desktop/IconExport.svg"></button></a></li>
  <li><a href="https://github.com/J2ZROMERO/Leader-board" target='_blanck'><button class="source"><span class="see P">See source</span>
  <img src="images/popup_desktop/IconGitHub.svg"></button></a></li></ul>
  <ul class="works_buttons">
  <li class="tools"><button class="button_work" value="Input Buttom" type="submit">CSS</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">HTML</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">ES6</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">ESlint</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">LocalStorage</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">GitHub pages</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">Webpack</button></li>
    <li class="tools"><button class="button_work" value="Input Buttom" type="submit">API</button></li>
  </ul>
  <p class="text">Create and save names as well as scores to them.</p>
  
  `;

        content.innerHTML = course;
        section.appendChild(content);

        const desktopVersion = document.querySelector('.desktop_version');
        const head = document.querySelector('.backgrund_main');
        const body = document.querySelector('body');
        body.insertBefore(section, head);

        const desktopVE = [];
        disableNavbar();
        while (desktopVersion.hasChildNodes()) {
          desktopVE.push(desktopVersion.firstChild);
          desktopVersion.removeChild(desktopVersion.firstChild);
        }
        body.removeChild(desktopVersion);

        window.scroll({
          top: 0,
          behavior: 'auto',
        });

        document.querySelector('.closeMM').addEventListener('click', () => {
          document.body.removeChild(section);
          enableNavbar();
          body.appendChild(desktopVersion);
          for (let i = 0; i <= desktopVE.length - 1; i += 1) {
            desktopVersion.appendChild(desktopVE[i]);
          }

          window.scroll({
            top: 1100,
            behavior: 'auto',
          });
        });
      });
      break;
    default: null;
 
  }
}
// end desktop menu


// desktop menu
const seetodo = document.querySelector('.seetodo');
const seemath = document.querySelector('.seemath');
const seecourse = document.querySelector('.seecourse');
const seebudget = document.querySelector('.seebudget');
const seecoin = document.querySelector('.seecoin');
const seebook = document.querySelector('.seebook');

const seeboard = document.querySelector('.seeboard');

popupDesktop(seeboard, 'board');
popupDesktop(seebook, 'book');
popupDesktop(seecoin, 'coin');
popupDesktop(seebudget, 'budget');
popupDesktop(seetodo, 'todolist');
popupDesktop(seecourse, 'course');
popupDesktop(seemath, 'math');

const enableNavbar = () => {
  const desktopHeader = document.querySelector('.desktop_header');
  desktopHeader.style.display = 'flex';

};

const disableNavbar = (element) => {
  const desktopHeader = document.querySelector('.desktop_header');
  desktopHeader.style.display = 'none';
};

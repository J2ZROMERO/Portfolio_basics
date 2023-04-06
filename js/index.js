
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
  <iframe class="image" src="images/recent_works/todolist.mp4"></iframe>
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
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">css</button></li>
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">css</button></li>
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">css</button></li>
                <li class="tools"><button class="button_work" value="Input Buttom" type="submit">css</button></li>
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
  <iframe class="image" src="images/recent_works/course.mp4"></iframe>
  <h2 class="title">Development course web page</h2>
  <ul class="buttons_action"><li><a href="https://j2zromero.github.io/Responsive-webPage/" style="text-decoration: none;"><button class="live" style="display: flex; align-items: center; padding: 12px 5px 12px 0px; gap: 2px; height: 37px; border: 0px; background: rgb(54, 179, 127); width: 101px; border-radius: 4px; justify-content: end; cursor: pointer;"><span class="see" style="width: 72px; height: 24px; font-style: normal; font-weight: 500; font-size: 11px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See Live</span><img src="images/popup_desktop/IconExport.svg"></button></a></li>
  <li><a href="https://github.com/J2ZROMERO/Responsive-webPage"><button class="source"><span class="see P">See source</span>
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
    default: null;
  }
}
// end desktop menu


// desktop menu
const seetodo = document.querySelector('.seetodo');
const seecourse = document.querySelector('.seecourse');
popupDesktop(seetodo, 'todolist');
popupDesktop(seecourse, 'course');

const enableNavbar = () => {
  const desktopHeader = document.querySelector('.desktop_header');
  desktopHeader.style.display = 'flex';

};

const disableNavbar = (element) => {
  const desktopHeader = document.querySelector('.desktop_header');
  desktopHeader.style.display = 'none';
};
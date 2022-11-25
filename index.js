/* eslint-disable no-unused-expressions */
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
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
  window.scroll({
    top: 700,
    behavior: 'smooth',
  });
});

document.querySelector('.contact_go').addEventListener('click', () => {
  const menu = document.querySelector('.quick_acces');
  const mobileVersion = document.querySelector('.mobile_version');
  const head = document.querySelector('.header_mobile');
  menu.style.display = 'none';
  mobileVersion.style.visibility = 'visible';
  head.style.visibility = 'visible';
  window.onscroll = () => { };
  window.scroll({
    top: 6500,
    behavior: 'smooth',
  });
});

document.querySelector('.about_go').addEventListener('click', () => {
  const menu = document.querySelector('.quick_acces');
  const mobileVersion = document.querySelector('.mobile_version');
  const head = document.querySelector('.header_mobile');
  menu.style.display = 'none';
  mobileVersion.style.visibility = 'visible';
  head.style.visibility = 'visible';
  window.onscroll = () => { };
  window.scroll({
    top: 5700,
    behavior: 'smooth',
  });
});


function css(variable, style) {
  Object.keys(style).forEach((attr) => {
    variable.style[attr] = style[attr];
  });
}


function popupMobil(botton, work) {
  switch (work) {
    case 'todolist':
      botton.addEventListener('click', () => {
        const section = document.createElement('section');
        section.className = 'container';

        css(section, {
          width: '375px',
          height: '882px',
          background: '#C1C7D0',

          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        });

        const mbversionelem = `
  <div class="content" style="box-sizing: border-box;display: flex;flex-direction: column;align-items: flex-start;padding: 16px;gap: 12px;width: 343px;height: 836px;top: 20px;background: rgb(255, 255, 255);border: 1px solid rgb(223, 225, 230);border-radius: 16px;justify-content: space-between;"><img class="closeMM" src="images/popup_mobile/Icon.svg" style="position: absolute; margin-left: 276px; margin-top: 21px; cursor: pointer;">
  <iframe class="image" src="images/recent_works/todolist.mp4" style="height:50%"> </iframe>
  <h2 class="title" style="width: 259px;height: +;font-style: normal;font-weight: 600;font-size: 32px;line-height: 44px;color: rgb(23, 43, 77);margin: 0px;">To-do list</h2>
  <ul class="works_buttons" style="list-style: none; display: flex; flex-direction: row; align-items: center; padding: 0px; gap: 8px; margin: 0px; width: 246px; height: 32px;">
  <li class="tools"><button class="wb_action" style="padding: 8px 12px; height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif;">
  <span class="tol" style="width: 79px; height: 16px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 600; font-size: 11px; line-height: 16px; letter-spacing: 0.03em; color: rgb(58, 74, 66);">Ruby on rails</span>
  </button></li><li><button class="wb_action" style="padding: 8px 12px; height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif;">
  <span class="tol" style="width: 79px; height: 16px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 600; font-size: 11px; line-height: 16px; letter-spacing: 0.03em; color: rgb(58, 74, 66);">css</span></button>
  </li><li><button class="wb_action" style="padding: 8px 12px; height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif;">
  <span class="tol" style="width: 79px; height: 16px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 600; font-size: 11px; line-height: 16px; letter-spacing: 0.03em; color: rgb(58, 74, 66);">Javascript</span></button></li></ul>
  <p style="width: 311px;font-family: &quot;Inter UI&quot;, sans-serif;font-style: normal;font-weight: 400;font-size: 16px;line-height: 24px;color: rgb(52, 69, 99);margin: 0px;">Use this project as a tool for remembering your daily tasks, confirming, editing, remove are actions you can do to tasks, your data is saved in the LocalStorage so every time you open or refresh the page all changes will be present.</p>
  <ul class="buttons_action" style="width: 311px; height: 56px; list-style: none; display: flex; justify-content: space-between; padding: 0px;">
  <li><a href="https://j2zromero.github.io/To-do-list/dist" style="text-decoration: none;"><button class="live" style="display: flex; flex-direction: row; align-items: flex-start; padding: 12px 0px; gap: 12px; justify-content: center; width: 141px; height: 48px; border: 0px; background: rgb(54, 179, 127); border-radius: 4px;"><span class="see" style="width: 78px; height: 24px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 500; font-size: 14px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See Live</span>
  <img src="images/popup_mobile/IconExport.svg"></button></a></li><li><a href="https://github.com/J2ZROMERO/To-do-list" style="text-decoration: none;"><button class="source" style="display: flex; flex-direction: row; align-items: flex-start; padding: 12px 0px; gap: 12px; justify-content: center; width: 141px; height: 48px; border: 0px; background: rgb(54, 179, 127); border-radius: 4px;">
  <span class="see P" style="width: 78px; height: 24px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 500; font-size: 14px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See source</span><img src="images/popup_mobile/IconGitHub.svg"></button></a>
  </li></ul></div>
  `;
        section.innerHTML = mbversionelem;

        const head = document.querySelector('.header_mobile');
        head.style.display = 'none';
        const mobileVersion = document.querySelector('.mobile_version');
        const mobileVE = [];

        while (mobileVersion.hasChildNodes()) {
          mobileVE.push(mobileVersion.firstChild);
          mobileVersion.removeChild(mobileVersion.firstChild);
        }
        document.body.removeChild(mobileVersion);
        document.body.appendChild(section);

        window.scroll({
          top: 0,
          behavior: 'auto',
        });

        document.querySelector('.closeMM').addEventListener('click', () => {
          document.body.removeChild(section);

          head.style.visibility = 'visible';

          document.body.appendChild(mobileVersion);
          for (let i = 0; i <= mobileVE.length - 1; i += 1) {
            mobileVersion.appendChild(mobileVE[i]);
          }

          window.scroll({
            top: 700,
            behavior: 'auto',
          });
        });
      });

      break;
    case 'responsivewp':
      botton.addEventListener('click', () => {
        const section = document.createElement('section');
        section.className = 'container';

        css(section, {
          width: '375px',
          height: '882px',
          background: '#C1C7D0',

          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        });

        const mbversionelem = `
  <div class="content" style="box-sizing: border-box;display: flex;flex-direction: column;align-items: flex-start;padding: 16px;gap: 12px;width: 343px;height: 836px;top: 20px;background: rgb(255, 255, 255);border: 1px solid rgb(223, 225, 230);border-radius: 16px;justify-content: space-between;"><img class="closeMM" src="images/popup_mobile/Icon.svg" style="position: absolute; margin-left: 276px; margin-top: 21px; cursor: pointer;">
  <iframe class="image" src="images/recent_works/course.mp4" style="height:50%"> </iframe>
  <h2 class="title" style="width: 259px;height: +;font-style: normal;font-weight: 600;font-size: 32px;line-height: 44px;color: rgb(23, 43, 77);margin: 0px;">Development course web page</h2>
  <ul class="works_buttons" style="list-style: none; display: flex; flex-direction: row; align-items: center; padding: 0px; gap: 8px; margin: 0px; width: 246px; height: 32px;">
  <li class="tools"><button class="wb_action" style="padding: 8px 12px; height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif;">
  <span class="tol" style="width: 79px; height: 16px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 600; font-size: 11px; line-height: 16px; letter-spacing: 0.03em; color: rgb(58, 74, 66);">Ruby on rails</span>
  </button></li><li><button class="wb_action" style="padding: 8px 12px; height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif;">
  <span class="tol" style="width: 79px; height: 16px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 600; font-size: 11px; line-height: 16px; letter-spacing: 0.03em; color: rgb(58, 74, 66);">css</span></button>
  </li><li><button class="wb_action" style="padding: 8px 12px; height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif;">
  <span class="tol" style="width: 79px; height: 16px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 600; font-size: 11px; line-height: 16px; letter-spacing: 0.03em; color: rgb(58, 74, 66);">Javascript</span></button></li></ul>
  <p style="width: 311px;font-family: &quot;Inter UI&quot;, sans-serif;font-style: normal;font-weight: 400;font-size: 16px;line-height: 24px;color: rgb(52, 69, 99);margin: 0px;">Use a responsive web page, to add several sections to your web page and show activities like, courses, events, concerts, etc.</p>
  <ul class="buttons_action" style="width: 311px; height: 56px; list-style: none; display: flex; justify-content: space-between; padding: 0px;">
  <li><a href="https://j2zromero.github.io/Responsive-webPage/" style="text-decoration: none;"><button class="live" style="display: flex; flex-direction: row; align-items: flex-start; padding: 12px 0px; gap: 12px; justify-content: center; width: 141px; height: 48px; border: 0px; background: rgb(54, 179, 127); border-radius: 4px;"><span class="see" style="width: 78px; height: 24px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 500; font-size: 14px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See Live</span>
  <img src="images/popup_mobile/IconExport.svg"></button></a></li><li><a href="https://github.com/J2ZROMERO/Responsive-webPage" style="text-decoration: none;"><button class="source" style="display: flex; flex-direction: row; align-items: flex-start; padding: 12px 0px; gap: 12px; justify-content: center; width: 141px; height: 48px; border: 0px; background: rgb(54, 179, 127); border-radius: 4px;">
  <span class="see P" style="width: 78px; height: 24px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 500; font-size: 14px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See source</span><img src="images/popup_mobile/IconGitHub.svg"></button></a>
  </li></ul></div>
  `;
        section.innerHTML = mbversionelem;

        const head = document.querySelector('.header_mobile');
        head.style.display = 'none';
        const mobileVersion = document.querySelector('.mobile_version');
        const mobileVE = [];

        while (mobileVersion.hasChildNodes()) {
          mobileVE.push(mobileVersion.firstChild);
          mobileVersion.removeChild(mobileVersion.firstChild);
        }
        document.body.removeChild(mobileVersion);
        document.body.appendChild(section);

        window.scroll({
          top: 0,
          behavior: 'auto',
        });

        document.querySelector('.closeMM').addEventListener('click', () => {
          document.body.removeChild(section);

          head.style.visibility = 'visible';

          document.body.appendChild(mobileVersion);
          for (let i = 0; i <= mobileVE.length - 1; i += 1) {
            mobileVersion.appendChild(mobileVE[i]);
          }

          window.scroll({
            top: 700,
            behavior: 'auto',
          });
        });
      });
      break;

    default: null;
  }
}

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
  <img class="closeMM" src="images/popup_desktop/IconCancel.svg" style="margin-left: 97%; margin-top: 1%; cursor: pointer;">
  <iframe class="image" src="images/recent_works/todolist.mp4" style="width: 100%; border-radius: 8px; height: 60%;"></iframe>
  <h2 class="title" style="width: 359px; height: 68px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 600; font-size: 24px; line-height: 32px; color: rgb(23, 43, 77); margin: 0px; text-align: start;">To-do list</h2>
  <ul class="buttons_action" style="width: 213px; height: 49px; list-style: none; display: flex; justify-content: space-between; padding: 0px;"><li><a href="https://j2zromero.github.io/To-do-list/dist/" style="text-decoration: none;"><button class="live" style="display: flex; align-items: center; padding: 12px 5px 12px 0px; gap: 2px; height: 37px; border: 0px; background: rgb(54, 179, 127); width: 101px; border-radius: 4px; justify-content: end; cursor: pointer;"><span class="see" style="width: 72px; height: 24px; font-style: normal; font-weight: 500; font-size: 11px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See Live</span><img src="images/popup_desktop/IconExport.svg"></button></a>
  </li><li><a href="https://github.com/J2ZROMERO/To-do-list" style="text-decoration: none;"><button class="source" style="display: flex; align-items: center; padding: 12px 5px 12px 0px; gap: 2px; height: 37px; border: 0px; background: rgb(54, 179, 127); width: 101px; border-radius: 4px; justify-content: end;"><span class="see P" style="width: 72px; height: 24px; font-style: normal; font-weight: 500; font-size: 11px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See source</span><img src="images/popup_desktop/IconGitHub.svg"></button></a></li></ul>
  <ul class="works_buttons" style="list-style: none; display: flex; flex-direction: row; align-items: center; padding: 0px; gap: 8px; margin: 0px; width: 100%; height: 32px; justify-content: flex-start;"><li class="tools"><button class="wb_action" style="height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif; padding: 6px; cursor: pointer;"><span class="tol" style="height: 15px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-size: 0.62em; line-height: 16px; letter-spacing: 0.03em; color: rgb(52, 69, 99); font-weight: bolder;">JavaScript</span></button></li><li><button class="wb_action" style="height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif; padding: 6px; cursor: pointer;"><span class="tol" style="height: 19px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-size: 0.62em; line-height: 16px; letter-spacing: 0.03em; color: rgb(52, 69, 99); font-weight: bolder;">HTML</span></button></li><li><button class="wb_action" style="height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif; padding: 6px; cursor: pointer;"><span class="tol" style="height: 19px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-size: 0.62em; line-height: 16px; letter-spacing: 0.03em; color: rgb(52, 69, 99); font-weight: bolder;">Css</span></button></li><li><button class="wb_action" style="height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif; padding: 6px;"><span class="Git" style="height: 19px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-size: 0.62em; line-height: 16px; letter-spacing: 0.03em; color: rgb(52, 69, 99); font-weight: bolder;">Git</span>
  </button></li><li><button class="wb_action" style="height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif; padding: 6px;"><span class="tol" style="height: 19px; font-family: &quot;Inter UI&quot;, sans-serif; font-size: 0.62em; line-height: 16px; letter-spacing: 0.03em; color: rgb(52, 69, 99); font-weight: bolder;">Github</span></button></li></ul>
  <p style="width: 100%; height: 183px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 400; font-size: 16px; line-height: 24px; color: rgb(52, 69, 99); margin: 2% 0px 0px; text-align: start;">Use this project as a tool for remembering your daily tasks, confirming, editing, remove are actions you can do to tasks, your data is saved in the LocalStorage so every time you open or refresh the page all changes will be present.</p>
  
  `;

        content.innerHTML = todolist;
        section.appendChild(content);

        const desktopVersion = document.querySelector('.desktop_version');
        const head = document.querySelector('.backgrund_main');
        const body = document.querySelector('body');
        // head.style.visibility = 'hidden';
        body.insertBefore(section, head);

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
  <img class="closeMM" src="images/popup_desktop/IconCancel.svg" style="margin-left: 97%; margin-top: 1%; cursor: pointer;">
  <iframe class="image" src="images/recent_works/course.mp4" style="width: 100%; border-radius: 8px; height: 60%;"></iframe>
  <h2 class="title" style="width: 359px; height: 68px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 600; font-size: 24px; line-height: 32px; color: rgb(23, 43, 77); margin: 0px; text-align: start;">Development course web page</h2>
  <ul class="buttons_action" style="width: 213px; height: 49px; list-style: none; display: flex; justify-content: space-between; padding: 0px;"><li><a href="https://j2zromero.github.io/Responsive-webPage/" style="text-decoration: none;"><button class="live" style="display: flex; align-items: center; padding: 12px 5px 12px 0px; gap: 2px; height: 37px; border: 0px; background: rgb(54, 179, 127); width: 101px; border-radius: 4px; justify-content: end; cursor: pointer;"><span class="see" style="width: 72px; height: 24px; font-style: normal; font-weight: 500; font-size: 11px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See Live</span><img src="images/popup_desktop/IconExport.svg"></button></a></li>
  <li><a href="https://github.com/J2ZROMERO/Responsive-webPage" style="text-decoration: none;"><button class="source" style="display: flex; align-items: center; padding: 12px 5px 12px 0px; gap: 2px; height: 37px; border: 0px; background: rgb(54, 179, 127); width: 101px; border-radius: 4px; justify-content: end;"><span class="see P" style="width: 72px; height: 24px; font-style: normal; font-weight: 500; font-size: 11px; line-height: 24px; text-align: center; letter-spacing: 0.03em; color: rgb(255, 255, 255);">See source</span><img src="images/popup_desktop/IconGitHub.svg"></button></a></li></ul>
  <ul class="works_buttons" style="list-style: none; display: flex; flex-direction: row; align-items: center; padding: 0px; gap: 8px; margin: 0px; width: 100%; height: 32px; justify-content: flex-start;"><li class="tools"><button class="wb_action" style="height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif; padding: 6px; cursor: pointer;"><span class="tol" style="height: 15px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-size: 0.62em; line-height: 16px; letter-spacing: 0.03em; color: rgb(52, 69, 99); font-weight: bolder;">JavaScript</span></button></li><li><button class="wb_action" style="height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif; padding: 6px; cursor: pointer;"><span class="tol" style="height: 19px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-size: 0.62em; line-height: 16px; letter-spacing: 0.03em; color: rgb(52, 69, 99); font-weight: bolder;">HTML</span></button></li>
  <li><button class="wb_action" style="height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif; padding: 6px; cursor: pointer;"><span class="tol" style="height: 19px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-size: 0.62em; line-height: 16px; letter-spacing: 0.03em; color: rgb(52, 69, 99); font-weight: bolder;">Css</span></button></li><li><button class="wb_action" style="height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif; padding: 6px;"><span class="Git" style="height: 19px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-size: 0.62em; line-height: 16px; letter-spacing: 0.03em; color: rgb(52, 69, 99); font-weight: bolder;">Git</span></button></li><li><button class="wb_action" style="height: 32px; font-style: normal; font-weight: 600; letter-spacing: 0.03em; color: rgb(58, 74, 66); background-color: rgb(238, 248, 243); border: 0px; border-radius: 4px; font-family: &quot;Inter UI&quot;, sans-serif; padding: 6px;"><span class="tol" style="height: 19px; font-family: &quot;Inter UI&quot;, sans-serif; font-size: 0.62em; line-height: 16px; letter-spacing: 0.03em; color: rgb(52, 69, 99); font-weight: bolder;">Github</span></button></li></ul>
  <p style="width: 100%; height: 183px; font-family: &quot;Inter UI&quot;, sans-serif; font-style: normal; font-weight: 400; font-size: 16px; line-height: 24px; color: rgb(52, 69, 99); margin: 2% 0px 0px; text-align: start;">Use a responsive web page, to add several sections to your web page and show activities like, courses, events, concerts, etc.</p>
  
  `;

        content.innerHTML = course;
        section.appendChild(content);

        const desktopVersion = document.querySelector('.desktop_version');
        const head = document.querySelector('.backgrund_main');
        const body = document.querySelector('body');
        body.insertBefore(section, head);

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

// call function mobil_menu
const seecoursemv = document.querySelector('.seecoursemv');
const seetodolistmv = document.querySelector('.seetodolistmv');
popupMobil(seecoursemv, 'todolist');
popupMobil(seetodolistmv, 'responsivewp');
//

// desktop menu
const seetodo = document.querySelector('.seetodo');
const seecourse = document.querySelector('.seecourse');
popupDesktop(seetodo, 'todolist');
popupDesktop(seecourse, 'course');

//

/// //form validation

const email = document.getElementById('mail');

const characters = /^[a-z0-9-]+@[a-z0-9]+\.[a-z0-9.]+$/;

document.querySelector('.form_button').addEventListener('click', (event) => {
  if (!characters.test(email.value)) {
    const error = document.querySelector('.error');

    error.style.display = 'block';

    event.preventDefault();
    if (email.value === '') {
      error.style.display = 'none';
    }
  }
});

email.addEventListener('input', () => {
  if (characters.test(email.value)) {
    const error = document.querySelector('.error');
    error.style.display = 'none';
  }
});

const emailD = document.getElementById('mailD');
const charactersD = /^[a-z0-9-]+@[a-z0-9]+\.[a-z0-9.]+$/;

document.querySelector('.form_buttonD').addEventListener('click', (event) => {
  const errorD = document.querySelector('.errorD');

  if (!charactersD.test(emailD.value)) {
    errorD.style.display = 'block';

    event.preventDefault();
    if (emailD.value === '') {
      errorD.style.display = 'none';
    }
  }
});

emailD.addEventListener('input', () => {
  if (charactersD.test(emailD.value)) {
    const errorD = document.querySelector('.errorD');
    errorD.style.display = 'none';
  }
});

// mobile local storage

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

// desktop Local storage
const nameID = document.querySelector('.name_inputD');
const snameID = document.querySelector('.sname_inputD');
const emailID = document.querySelector('.email_inputD');
const textID = document.querySelector('.textareaD');

const inputsD = [nameID, snameID, emailID, textID];

for (let i = 0; i < inputsD.length; i += 1) {
  inputsD[i].addEventListener('input', () => {
    const dataD = {
      nameV: nameID.value,
      snameV: snameID.value,
      emailV: emailID.value,
      textAV: textID.value,
    };

    localStorage.setItem('dataFormUserD', JSON.stringify(dataD));
  });
}

window.addEventListener('load', () => {
  let dataLS = localStorage.getItem('dataFormUserD');
  dataLS = JSON.parse(dataLS);

  if (dataLS != null) {
    nameID.value = dataLS.nameV;
    snameID.value = dataLS.snameV;
    emailID.value = dataLS.emailV;
    textID.value = dataLS.textAV;
  }
});

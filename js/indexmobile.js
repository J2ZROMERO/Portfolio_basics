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
const seecoursemv = document.querySelector('.seecoursemv');
const seetodolistmv = document.querySelector('.seetodolistmv');
popupMobil(seecoursemv, 'todolist');
popupMobil(seetodolistmv, 'responsivewp');
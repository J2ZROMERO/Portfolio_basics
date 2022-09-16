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

//

// functions styles and properties

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

function css(variable, style) {
  Object.keys(style).forEach((attr) => {
    variable.style[attr] = style[attr];
  });
}

// buttons hover and mouseout
function bottonEventOutA(event) {
  event.addEventListener('mouseout', () => {
    event.style.backgroundColor = '#36B37F';

    event.style.cursor = 'pointer';
  });
}

function bottonEventA(event) {
  event.addEventListener('mouseover', () => {
    event.style.backgroundColor = 'green';

    event.style.cursor = 'pointer';
  });
}

function bottonEventOut(event) {
  event.addEventListener('mouseout', () => {
    event.style.backgroundColor = 'rgb(238, 248, 243)';

    event.style.cursor = 'pointer';
  });
}
function bottonEvent(event) {
  event.addEventListener('mouseover', () => {
    event.style.backgroundColor = '#ebeff4';

    event.style.cursor = 'pointer';
  });
}

//
function popupMobil(botton) {
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

    const content = document.createElement('div');
    content.className = 'content';

    css(content, {
      'box-sizing': 'border-box',
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'flex-start',
      padding: '16px',
      gap: '12px',
      width: '343px',
      height: '836px',
      top: '20px',
      background: '#FFFFFF',
      border: '1px solid #DFE1E6',
      'border-radius': '16px',
    });

    const x = document.createElement('img');
    const attributesX = {
      class: 'closeMM',
      src: 'images/popup_mobile/Icon.svg',
    };

    setAttributes(x, attributesX);

    css(x, {
      position: 'absolute',
      'margin-left': '276px',
      'margin-top': '21px',
      cursor: 'pointer',
    });

    const image = document.createElement('img');
    const attributesImage = {
      class: 'image',
      src: 'images/popup_mobile/Snapshoot Portfolio.svg',
    };
    setAttributes(image, attributesImage);

    /* let image_class = document. querySelector('.image');

      css(image,{
        position: 'fixed',
        width: '311px',
        height: '220px',
        'border-radius': '8px'

      }); */

    const h2 = document.createElement('h2');

    h2.className = 'title';
    css(h2, {
      width: '259px',
      height: '135px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',
      'font-weight': 600,
      'font-size': '32px',
      'line-height': '44px',
      color: '#172B4D',
      margin: 0,
    });
    h2.innerHTML = 'Keeping track of hundreds ofcomponents';

    const ul = document.createElement('ul');
    ul.className = 'works_buttons';

    css(ul, {
      'list-style': 'none',
      display: 'flex',
      'flex-direction': 'row',
      'align-items': 'center',
      padding: '0px',
      gap: '8px',
      margin: 0,
      width: '246px',
      height: '32px',
    });
    const tools1 = document.createElement('li');
    tools1.className = 'tools';

    const tools1B = document.createElement('button');
    tools1B.className = 'wb_action';
    css(tools1B, {
      padding: '8px 12px',
      height: '32px',
      'font-style': 'normal',
      'font-weight': 600,
      'letter-spacing': '0.03em',
      color: '#3A4A42',
      'background-color': '#eef8f3',
      border: 0,
      'border-radius': '4px',
      'font-family': 'Inter UI, sans-serif',

    });
    const tools1BS = document.createElement('span');
    tools1BS.className = 'tol';

    css(tools1BS, {
      width: '79px',
      height: '16px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',
      'font-weight': 600,
      'font-size': '11px',
      'line-height': '16px',
      'letter-spacing': '0.03em',
      color: '#3A4A42',
    });
    tools1BS.innerHTML = 'Ruby on rails';
    const tools2 = document.createElement('li');

    const tools2B = document.createElement('button');
    tools2B.className = 'wb_action';
    css(tools2B, {
      padding: '8px 12px',
      height: '32px',
      'font-style': 'normal',
      'font-weight': 600,
      'letter-spacing': '0.03em',
      color: '#3A4A42',
      'background-color': '#eef8f3',

      border: 0,
      'border-radius': '4px',
      'font-family': 'Inter UI, sans-serif',

    });
    const tools2BS = document.createElement('span');
    tools2BS.className = 'tol';

    css(tools2BS, {
      width: '79px',
      height: '16px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',
      'font-weight': 600,
      'font-size': '11px',
      'line-height': '16px',
      'letter-spacing': '0.03em',
      color: '#3A4A42',
    });
    tools2BS.innerHTML = 'css';
    const tools3 = document.createElement('li');
    const tools3B = document.createElement('button');
    tools3B.className = 'wb_action';
    css(tools3B, {
      padding: '8px 12px',
      height: '32px',
      'font-style': 'normal',
      'font-weight': 600,
      'letter-spacing': '0.03em',
      color: '#3A4A42',
      'background-color': '#eef8f3',

      border: 0,
      'border-radius': '4px',
      'font-family': 'Inter UI, sans-serif',

    });
    const tools3BS = document.createElement('span');
    tools3BS.className = 'tol';

    css(tools3BS, {
      width: '79px',
      height: '16px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',
      'font-weight': 600,
      'font-size': '11px',
      'line-height': '16px',
      'letter-spacing': '0.03em',
      color: '#3A4A42',
    });
    tools3BS.innerHTML = 'Javascript';

    const p = document.createElement('p');
    css(p, {
      width: '311px',
      height: '313px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',
      'font-weight': 400,
      'font-size': '16px',
      'line-height': '24px',
      color: '#344563',
      margin: 0,
    });
    p.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummtext ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the  printing and typesetting industry. Lorem Ipsum has been the industrys  standard dummy text ever since the 1500s, when an unknown printer took a   galley of type and scrambled it 1960s with the relea';

    const ulAction = document.createElement('ul');
    ulAction.className = 'buttons_action';
    css(ulAction, {
      width: '311px',
      height: '56px',
      'list-style': 'none',
      display: 'flex',
      'justify-content': 'space-between',
      padding: '0px',
    });

    const seeL = document.createElement('li');
    const seeLB = document.createElement('button');
    seeLB.className = 'live';

    css(seeLB, {
      display: 'flex',
      'flex-direction': 'row',
      'align-items': 'flex-start',
      padding: '12px 16px',
      gap: '12px',
      'justify-content': 'center',
      'padding-left': 0,
      'padding-right': 0,
      width: '141px',
      height: '48px',
      border: 0,
      background: '#36B37F',
      'border-radius': '4px',
    });
    const linkSeeL = document.createElement('a');
    linkSeeL.href = 'https://j2zromero.github.io/Personal_Portafolio_Web_Site/';
    linkSeeL.style.textDecoration = 'none';

    const seeLBS = document.createElement('span');
    seeLBS.className = 'see';

    css(seeLBS, {
      width: '78px',
      height: '24px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',
      'font-weight': 500,
      'font-size': '14px',
      'line-height': '24px',
      'text-align': 'center',
      'letter-spacing': '0.03em',
      color: '#FFFFFF',
    });

    seeLBS.innerHTML = 'See Live';
    const seeLBSI = document.createElement('img');
    seeLBSI.src = 'images/popup_mobile/IconExport.svg';

    const seeG = document.createElement('li');
    const seeGB = document.createElement('button');
    seeGB.className = 'source';

    css(seeGB, {
      display: 'flex',
      'flex-direction': 'row',
      'align-items': 'flex-start',
      padding: '12px 16px',
      gap: '12px',
      'justify-content': 'center',
      'padding-left': 0,
      'padding-right': 0,
      width: '141px',
      height: '48px',
      border: 0,
      background: '#36B37F',
      'border-radius': '4px',
    });
    const linkSeeG = document.createElement('a');
    linkSeeG.href = 'https://github.com/J2ZROMERO/Personal_Portafolio_Web_Site';
    linkSeeG.style.textDecoration = 'none';

    const seeGBS = document.createElement('span');
    seeGBS.className = 'see P';

    css(seeGBS, {
      width: '78px',
      height: '24px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',
      'font-weight': 500,
      'font-size': '14px',
      'line-height': '24px',
      'text-align': 'center',
      'letter-spacing': '0.03em',
      color: '#FFFFFF',
    });

    seeGBS.innerHTML = 'See source';
    const seeGBSI = document.createElement('img');
    seeGBSI.src = 'images/popup_mobile/IconGitHub.svg';

    section.appendChild(content);
    content.appendChild(x);
    content.appendChild(image);
    content.appendChild(h2);

    ul.appendChild(tools1);
    tools1.appendChild(tools1B);
    tools1B.appendChild(tools1BS);

    ul.appendChild(tools2);
    tools2.appendChild(tools2B);
    tools2B.appendChild(tools2BS);

    ul.appendChild(tools3);
    tools3.appendChild(tools3B);
    tools3B.appendChild(tools3BS);

    content.appendChild(ul);
    content.appendChild(p);

    ulAction.appendChild(seeL);
    seeL.appendChild(linkSeeL);
    linkSeeL.appendChild(seeLB);
    seeLB.appendChild(seeLBS);
    seeLB.appendChild(seeLBSI);

    ulAction.appendChild(seeG);
    seeG.appendChild(linkSeeG);
    linkSeeG.appendChild(seeGB);
    seeGB.appendChild(seeGBS);
    seeGB.appendChild(seeGBSI);

    content.appendChild(ulAction);

    const mobileVersion = document.querySelector('.mobile_version');
    const head = document.querySelector('.header_mobile');
    const body = document.querySelector('body');
    head.style.visibility = 'hidden';
    body.insertBefore(section, head);

    const mobileVE = [];

    while (mobileVersion.hasChildNodes()) {
      mobileVE.push(mobileVersion.firstChild);
      mobileVersion.removeChild(mobileVersion.firstChild);
    }
    body.removeChild(mobileVersion);

    window.scroll({
      top: 0,
      behavior: 'auto',
    });

    x.addEventListener('click', () => {
      section.style.display = 'none';
      head.style.visibility = 'visible';

      body.appendChild(mobileVersion);
      for (let i = 0; i <= mobileVE.length - 1; i += 1) {
        mobileVersion.appendChild(mobileVE[i]);
      }

      window.scroll({
        top: 700,
        behavior: 'auto',
      });
    });

    seeGB.addEventListener('mouseover', () => {
      seeGB.style.backgroundColor = 'green';

      seeGB.style.cursor = 'pointer';
    });

    seeGB.addEventListener('mouseout', () => {
      seeGB.style.backgroundColor = '#36B37F';

      seeLB.style.cursor = 'pointer';
    });
    seeLB.addEventListener('mouseover', () => {
      seeLB.style.backgroundColor = 'green';

      seeLB.style.cursor = 'pointer';
    });

    seeLB.addEventListener('mouseout', () => {
      seeLB.style.backgroundColor = '#36B37F';

      seeLB.style.cursor = 'pointer';
    });

    tools1B.addEventListener('mouseover', () => {
      tools1B.style.backgroundColor = '#ebeff4';

      tools1B.style.cursor = 'pointer';
    });

    tools1B.addEventListener('mouseout', () => {
      tools1B.style.backgroundColor = 'rgb(238, 248, 243)';

      tools1B.style.cursor = 'pointer';
    });
    tools2B.addEventListener('mouseover', () => {
      tools2B.style.backgroundColor = '#ebeff4';

      tools2B.style.cursor = 'pointer';
    });

    tools2B.addEventListener('mouseout', () => {
      tools2B.style.backgroundColor = 'rgb(238, 248, 243)';

      tools2B.style.cursor = 'pointer';
    });
    tools3B.addEventListener('mouseover', () => {
      tools3B.style.backgroundColor = '#ebeff4';

      tools3B.style.cursor = 'pointer';
    });

    tools3B.addEventListener('mouseout', () => {
      tools3B.style.backgroundColor = 'rgb(238, 248, 243)';

      tools3B.style.cursor = 'pointer';
    });
  });
}

// desktop

function popupDesktop(botton) {
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

    const x = document.createElement('img');
    const attributesX = {
      class: 'closeMM',
      src: 'images/popup_desktop/IconCancel.svg',
    };

    setAttributes(x, attributesX);

    css(x, {
      position: 'block',
      'margin-left': '97%',
      'margin-top': '1%',
      cursor: 'pointer',
    });

    const image = document.createElement('img');
    const attributesImage = {
      class: 'image',
      src: 'images/popup_desktop/SnapshootPortfolio.svg',
    };
    setAttributes(image, attributesImage);

    css(image, {
      width: '100%',
      'border-radius': '8px',

    });

    const h2 = document.createElement('h2');

    h2.className = 'title';

    css(h2, {
      width: '359px',
      height: '68px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',
      'font-weight': ' 600',
      'font-size': '24px',
      'line-height': '32px',
      color: '#172B4D',
      margin: '0',
      'text-align': 'start',
    });
    h2.innerHTML = 'Keeping track of hundreds of components';

    const ul = document.createElement('ul');
    ul.className = 'works_buttons';

    css(ul, {
      'list-style': 'none',
      display: 'flex',
      'flex-direction': 'row',
      'align-items': 'center',
      padding: '0px',
      gap: '8px',
      margin: '0',
      width: '100%',
      height: '32px',
      'justify-content': 'flex-start',
    });
    const tools1 = document.createElement('li');
    tools1.className = 'tools';

    const tools1B = document.createElement('button');
    tools1B.className = 'wb_action';

    css(tools1B, {

      height: '32px',
      'font-style': 'normal',
      'font-weight': '600',
      'letter-spacing': '0.03em',
      color: '#3A4A42',
      'background-color': '#eef8f3',

      border: '0',
      'border-radius': '4px',
      'font-family': 'Inter UI, sans-serif',

      padding: '6px',
    });
    const tools1BS = document.createElement('span');
    tools1BS.className = 'tol';

    css(tools1BS, {

      height: '15px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',

      'font-size': '0.62em',
      'line-height': '16px',
      'letter-spacing': '0.03em',
      color: '#344563',
      'font-weight': 'bolder',
    });
    tools1BS.innerHTML = 'Codekit';
    const tools2 = document.createElement('li');

    const tools2B = document.createElement('button');
    tools2B.className = 'wb_action';

    css(tools2B, {

      height: '32px',
      'font-style': 'normal',
      'font-weight': '600',
      'letter-spacing': '0.03em',
      color: '#3A4A42',
      'background-color': '#eef8f3',

      border: '0',
      'border-radius': '4px',
      'font-family': 'Inter UI, sans-serif',

      padding: '6px',
    });

    const tools2BS = document.createElement('span');
    tools2BS.className = 'tol';

    css(tools2BS, {

      height: '19px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',

      'font-size': '0.62em',
      'line-height': '16px',
      'letter-spacing': '0.03em',
      color: '#344563',
      'font-weight': 'bolder',
    });
    tools2BS.innerHTML = 'GitHub';

    const tools3 = document.createElement('li');
    const tools3B = document.createElement('button');
    tools3B.className = 'wb_action';

    css(tools3B, {

      height: '32px',
      'font-style': 'normal',
      'font-weight': '600',
      'letter-spacing': '0.03em',
      color: '#3A4A42',
      'background-color': '#eef8f3',

      border: '0',
      'border-radius': '4px',
      'font-family': 'Inter UI, sans-serif',

      padding: '6px',
    });
    const tools3BS = document.createElement('span');
    tools3BS.className = 'tol';

    css(tools3BS, {

      height: '19px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',

      'font-size': '0.62em',
      'line-height': '16px',
      'letter-spacing': '0.03em',
      color: '#344563',
      'font-weight': 'bolder',
    });
    tools3BS.innerHTML = 'Javascript';
    //
    const tools4 = document.createElement('li');
    const tools4B = document.createElement('button');
    tools4B.className = 'wb_action';

    css(tools4B, {

      height: '32px',
      'font-style': 'normal',
      'font-weight': '600',
      'letter-spacing': '0.03em',
      color: '#3A4A42',
      'background-color': '#eef8f3',

      border: '0',
      'border-radius': '4px',
      'font-family': 'Inter UI, sans-serif',

      padding: '6px',
    });
    const tools4BS = document.createElement('span');
    tools4BS.className = 'tol';

    css(tools4BS, {

      height: '19px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',

      'font-size': '0.62em',
      'line-height': '16px',
      'letter-spacing': '0.03em',
      color: '#344563',
      'font-weight': 'bolder',
    });
    tools4BS.innerHTML = 'Bootstrap';
    //
    const tools5 = document.createElement('li');
    const tools5B = document.createElement('button');
    tools5B.className = 'wb_action';

    css(tools5B, {

      height: '32px',
      'font-style': 'normal',
      'font-weight': '600',
      'letter-spacing': '0.03em',
      color: '#3A4A42',
      'background-color': '#eef8f3',

      border: '0',
      'border-radius': '4px',
      'font-family': 'Inter UI, sans-serif',

      padding: '6px',
    });
    const tools5BS = document.createElement('span');
    tools5BS.className = 'tol';

    css(tools5BS, {

      height: '19px',
      'font-family': 'Inter UI, sans-serif',

      'font-size': '0.62em',
      'line-height': '16px',
      'letter-spacing': '0.03em',
      color: '#344563',
      'font-weight': 'bolder',

    });
    tools5BS.innerHTML = 'Terminal';
    //
    const tools6 = document.createElement('li');
    const tools6B = document.createElement('button');
    tools3B.className = 'wb_action';

    css(tools6B, {

      height: '32px',
      'font-style': 'normal',
      'font-weight': '600',
      'letter-spacing': '0.03em',
      color: '#3A4A42',
      'background-color': '#eef8f3',

      border: '0',
      'border-radius': '4px',
      'font-family': 'Inter UI, sans-serif',

      padding: '6px',
    });
    const tools6BS = document.createElement('span');
    tools6BS.className = 'tol';

    css(tools6BS, {

      height: '19px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',

      'font-size': '0.62em',
      'line-height': '16px',
      'letter-spacing': '0.03em',
      color: '#344563',
      'font-weight': 'bolder',

    });
    tools6BS.innerHTML = 'Codepen';
    //

    const p = document.createElement('p');
    css(p, {
      width: '100%',
      height: '183px',
      'font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',
      'font-weight': '400',
      'font-size': '16px',
      'line-height': '24px',
      color: '#344563',
      margin: '0',
      'margin-top': '2%',
      'text-align': 'start',
    });
    p.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummtext ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the  printing and typesetting industry. Lorem Ipsum has been the industrys  standard dummy text ever since the 1500s, when an unknown printer took a   galley of type and scrambled it 1960s with the relea';

    const ulAction = document.createElement('ul');
    ulAction.className = 'buttons_action';

    css(ulAction, {
      width: '213px',
      height: '49px',
      'list-style': 'none',
      display: 'flex',
      'justify-content': 'space-between',
      padding: '0px',
    });

    const seeL = document.createElement('li');
    const seeLB = document.createElement('button');
    seeLB.className = 'live';

    css(seeLB, {
      display: 'flex',
      'align-items': 'center',
      padding: '12px 16px',
      gap: '2px',
      'padding-left': '0',
      'padding-right': '5px',
      height: '37px',
      border: '0',
      background: '#36B37F',
      width: '101px',
      'border-radius': '4px',
      'justify-content': 'end',
    });

    const linkSeeL = document.createElement('a');
    linkSeeL.href = 'https://j2zromero.github.io/Personal_Portafolio_Web_Site/';
    linkSeeL.style.textDecoration = 'none';

    const seeLBS = document.createElement('span');
    seeLBS.className = 'see';

    css(seeLBS, {
      width: '72px',
      height: '24px',
      ' font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',
      'font-weight': '500',
      'font-size': '11px',
      'line-height': '24px',
      'text-align': 'center',
      'letter-spacing': '0.03em',
      color: '#FFFFFF',
    });

    seeLBS.innerHTML = 'See Live';
    const seeLBSI = document.createElement('img');
    seeLBSI.src = 'images/popup_desktop/IconExport.svg';

    const seeG = document.createElement('li');
    const seeGB = document.createElement('button');
    seeGB.className = 'source';

    css(seeGB, {
      display: 'flex',
      'align-items': 'center',
      padding: '12px 16px',
      gap: '2px',
      'padding-left': '0',
      'padding-right': '5px',
      height: '37px',
      border: '0',
      background: '#36B37F',
      width: '101px',
      'border-radius': '4px',
      'justify-content': 'end',
    });

    const linkSeeG = document.createElement('a');
    linkSeeG.href = 'https://github.com/J2ZROMERO/Personal_Portafolio_Web_Site';
    linkSeeG.style.textDecoration = 'none';

    const seeGBS = document.createElement('span');
    seeGBS.className = 'see P';

    css(seeGBS, {
      width: '72px',
      height: '24px',
      ' font-family': 'Inter UI, sans-serif',
      'font-style': 'normal',
      'font-weight': '500',
      'font-size': '11px',
      'line-height': '24px',
      'text-align': 'center',
      'letter-spacing': '0.03em',
      color: '#FFFFFF',
    });

    seeGBS.innerHTML = 'See source';
    const seeGBSI = document.createElement('img');
    seeGBSI.src = 'images/popup_desktop/IconGitHub.svg';

    section.appendChild(content);
    content.appendChild(x);
    content.appendChild(image);
    content.appendChild(h2);

    ulAction.appendChild(seeL);
    seeL.appendChild(linkSeeL);
    linkSeeL.appendChild(seeLB);
    seeLB.appendChild(seeLBS);
    seeLB.appendChild(seeLBSI);

    ulAction.appendChild(seeG);
    seeG.appendChild(linkSeeG);
    linkSeeG.appendChild(seeGB);
    seeGB.appendChild(seeGBS);
    seeGB.appendChild(seeGBSI);

    content.appendChild(ulAction);

    ul.appendChild(tools1);
    tools1.appendChild(tools1B);
    tools1B.appendChild(tools1BS);

    ul.appendChild(tools2);
    tools2.appendChild(tools2B);
    tools2B.appendChild(tools2BS);

    ul.appendChild(tools3);
    tools3.appendChild(tools3B);
    tools3B.appendChild(tools3BS);

    ul.appendChild(tools4);
    tools4.appendChild(tools4B);
    tools4B.appendChild(tools4BS);

    ul.appendChild(tools5);
    tools5.appendChild(tools5B);
    tools5B.appendChild(tools5BS);

    ul.appendChild(tools6);
    tools6.appendChild(tools6B);
    tools6B.appendChild(tools6BS);

    content.appendChild(ul);
    content.appendChild(p);

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

    x.addEventListener('click', () => {
      section.style.display = 'none';
      // head.style.visibility = 'visible';

      body.appendChild(desktopVersion);
      for (let i = 0; i <= desktopVE.length - 1; i += 1) {
        desktopVersion.appendChild(desktopVE[i]);
      }

      window.scroll({
        top: 1100,
        behavior: 'auto',
      });
    });

    bottonEventA(seeLB);
    bottonEventA(seeGB);
    bottonEventOutA(seeLB);
    bottonEventOutA(seeGB);

    bottonEvent(tools1B);
    bottonEvent(tools2B);
    bottonEvent(tools3B);
    bottonEvent(tools4B);
    bottonEvent(tools5B);
    bottonEvent(tools6B);

    bottonEventOut(tools1B);
    bottonEventOut(tools2B);
    bottonEventOut(tools3B);
    bottonEventOut(tools4B);
    bottonEventOut(tools5B);
    bottonEventOut(tools6B);
  });
}
// end desktop menu

// call function mobil_menu
const seeP = document.querySelectorAll('.see_project');

for (let i = 0; i < 7; i += 1) {
  popupMobil(seeP[i]);
}
//

// desktop menu
const seePD = document.querySelectorAll('.seeMM');

for (let i = 0; i < 6; i += 1) {
  popupDesktop(seePD[i]);
}
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

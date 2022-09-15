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
  })
}
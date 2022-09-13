const header = document.querySelector('header');
 window.addEventListener('scroll', () => {
   if (window.scrollY > 600) {
     header.style.boxShadow = '0px 15px 10px -15px gray';
   } else {
     header.style.boxShadow = 'none';
   }
 });
 

 document.querySelector('.menu_hamburguer').addEventListener('click',() =>{
  const menu = document.querySelector('.quick_acces');
  const mobile_version = document.querySelector('.mobile_version');
  const head = document.querySelector('.header_mobile');
  menu.style.display = 'flex';
  menu.style.flexDirection = 'column' ;
  menu.style.flexWrap = 'wrap' ;
  
  mobile_version.style.visibility = 'hidden';
  head.style.visibility = 'hidden';
    const menu_ul = document.querySelector('.quick_access_ul');
    menu_ul.style.height = "90%";
    menu_ul.style.background = 'white';
    menu_ul.style.borderRadius= "0 0 10% 10%";
    window.onscroll = () => { window.scroll(0, 0); };


   });
   


document.querySelector('.close').addEventListener('click',() =>{
const menu = document.querySelector('.quick_acces');
const mobile_version = document.querySelector('.mobile_version');
const head = document.querySelector('.header_mobile');
menu.style.display = 'none';
mobile_version.style.visibility = 'visible';
head.style.visibility = 'visible';
window.onscroll = () => { };


    });



document.querySelector('.portfolio_go').addEventListener('click',() =>{

    
        const menu = document.querySelector('.quick_acces');
        const mobile_version = document.querySelector('.mobile_version');
        const head = document.querySelector('.header_mobile');
        
        menu.style.display = 'none';
        mobile_version.style.visibility = 'visible';
        head.style.visibility = 'visible';
        
        
        window.onscroll = () => { };
        window.scroll({
            
            top: 700,
            
            
            behavior: 'smooth'
          });
        
        
    });

    document.querySelector('.contact_go').addEventListener('click',() =>{
    
      const menu = document.querySelector('.quick_acces');
      const mobile_version = document.querySelector('.mobile_version');
      const head = document.querySelector('.header_mobile');
      
      menu.style.display = 'none';
      mobile_version.style.visibility = 'visible';
head.style.visibility = 'visible';
      window.onscroll = () => { };
      window.scroll({
          top:6500,
          
          behavior: 'smooth'
        });
      
      
  });

  document.querySelector('.about_go').addEventListener('click',() =>{

    
    const menu = document.querySelector('.quick_acces');
    const mobile_version = document.querySelector('.mobile_version');
    const head = document.querySelector('.header_mobile');
    
    menu.style.display = 'none';

    mobile_version.style.visibility = 'visible';
    head.style.visibility = 'visible';


    window.onscroll = () => { };
    window.scroll({
    top: 5700,

    behavior: 'smooth'
   });

  });







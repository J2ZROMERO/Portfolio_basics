
// welcome link
const welcomeLink = document.querySelector('a[href="#welcome"]');

welcomeLink.addEventListener('click', (event) => {
      event.preventDefault(); // prevent the default link behavior
      const welcomeSection = document.querySelector('#welcome');
      welcomeSection.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
    });
      

// about link
const aboutLink = document.querySelector('a[href="#about"]');

aboutLink.addEventListener('click', (event) => {
      event.preventDefault(); // prevent the default link behavior
      const aboutSection = document.querySelector('#about_section');
      aboutSection.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
    });
      
    
    // contact link
      const contactLink = document.querySelector('a[href="#contact"]');
        
          contactLink.addEventListener('click', (event) => {
            event.preventDefault(); // prevent the default link behavior
            const contactSection = document.querySelector('#opinion_section');
            contactSection.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
          });
    

          // portofolio link
      const portofoliotLink = document.querySelector('a[href="#portofolio"]');
        
      portofoliotLink .addEventListener('click', (event) => {
        event.preventDefault(); // prevent the default link behavior
        const portofolioSection = document.querySelector('#portofolio_section');
        portofolioSection.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
      });




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


// desktop Local event storage
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

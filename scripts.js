const switchElement = document.querySelector('.switch');
const contactLink = document.querySelector('a[href="#footer"]');

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

contactLink.addEventListener('click', (event) => {
  event.preventDefault();
  const footerElement = document.querySelector('#footer');
  footerElement.scrollIntoView({ behavior: 'smooth' });
});


function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '5px';
  }
}


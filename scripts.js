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

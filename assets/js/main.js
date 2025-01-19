const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Select all nav-link elements within the menu-list
const navLinks = document.querySelectorAll('.menu-list .nav-link');

// Add a click event listener to each nav-link
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    // Remove the 'active' class from all nav-links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the 'active' class to the clicked nav-link
    navLink.classList.add('active');
  });
});


// setTimout is not necessary
setTimeout(function () {

  $('.recaptcha').each(function () {
    grecaptcha.render(this.id, {
      'sitekey': '6LdVkwkUAAAAACeeETRX--v9Js0vWyjQOTIZxxeB',
      "theme": "light"
    });
  });

}, 2000);


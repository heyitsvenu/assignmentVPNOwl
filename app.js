const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const message = document.querySelector('.message');
const removeMessage = document.querySelector('.remove-message');
const welcomeTime = document.querySelector('.welcome-time');
const colorInput = document.querySelector('.color-picker input');

window.addEventListener('DOMContentLoaded', function () {
  // Set date
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 0 && hour < 12) {
    welcomeTime.textContent = 'Morning';
  } else if (hour >= 12 && hour < 17) {
    welcomeTime.textContent = 'Afternoon';
  } else if (hour >= 17 && hour <= 23) {
    welcomeTime.textContent = 'Evening';
  }

  // Add show message class
  message.classList.add('show-message');

  // remove on-click
  removeMessage.addEventListener('click', function (e) {
    e.preventDefault();
    message.classList.remove('show-message');
  });

  // remove after 10sec
  setTimeout(function () {
    message.classList.remove('show-message');
  }, 10000);
});

// navbar toggle
navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
});

// color picker
colorInput.addEventListener('keyup', function (e) {
  let value = e.target.value;
  if (/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value)) {
    document.body.style.backgroundColor = value;
  } else {
    document.body.style.backgroundColor = 'rgb(53, 51, 51)';
  }
});

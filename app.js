// local reviews data
const reviews = [
  {
    id: 1,
    name: 'John Smith',
    job: 'Network Analyst',
    img: './images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',
    text: 'imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor',
  },
  {
    id: 2,
    name: 'Emily Warner',
    job: 'Freelancer',
    img: './images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg',
    text: 'ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies',
  },
  {
    id: 3,
    name: 'Jacob Wade',
    job: 'Web Developer',
    img: './images/austin-wade-X6Uj51n5CE8-unsplash.jpg',
    text: 'vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet',
  },
  {
    id: 4,
    name: 'Mary Jones',
    job: 'Fashion Designer',
    img: './images/edward-cisneros-_H6wpor9mjs-unsplash.jpg',
    text: 'massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in',
  },
];

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const message = document.querySelector('.message');
const removeMessage = document.querySelector('.remove-message');
const welcomeTime = document.querySelector('.welcome-time');
const colorInput = document.querySelector('.color-picker input');

// reviews items
const img = document.querySelector('.person-img');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const info = document.querySelector('.info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

// default color input
colorInput.value = '#353333';

// when dom content loads
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

  showPerson(currentItem);
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
    document.body.style.backgroundColor = '#353333';
  }
});

// reviews
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) currentItem = 0;
  showPerson(currentItem);
});
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) currentItem = reviews.length - 1;
  showPerson(currentItem);
});

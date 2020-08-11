const createBtn = document.getElementById('createBtn');
const crownBtn = document.getElementById('crownBtn');
const proBtn = document.getElementById('proBtn');
const coverLayer = document.getElementById('cover');
const leftBtn = document.getElementById('leftBtn');

const toggleDropdown = () => {
  const dropdown = document.getElementById('designArea');
  dropdown.classList.toggle('show');
};

const addProPage = () => {
  const proPage = document.getElementById('canvaPro');
  proPage.classList.add('pro-show');
  coverLayer.style.display = 'block';
};
const closePropage = () => {
  const proPage = document.getElementById('canvaPro');
  proPage.classList.remove('pro-show');
  coverLayer.style.display = 'none';
};

const closeCoverLayer = () => {
  const leftShow = document.getElementById('leftShow');

  leftShow.style.animationName = 'leftShowOut';
  leftShow.style.animationDuration = '1s';
  setTimeout(() => {
    leftShow.style.display = 'none';
  }, 1000);

  coverLayer.style.display = 'none';
};

const openLeftShow = () => {
  const leftShow = document.getElementById('leftShow');
  leftShow.style.display = 'block';
  leftShow.style.animationName = 'leftShowIn';
  leftShow.style.animationDuration = '1s';
  coverLayer.style.display = 'block';
};

createBtn.addEventListener('click', toggleDropdown);
proBtn.addEventListener('click', closePropage);
crownBtn.addEventListener('click', addProPage);
leftBtn.addEventListener('click', openLeftShow);
coverLayer.addEventListener('click', closeCoverLayer);

const createBtn = document.getElementById('createBtn');
const crownBtn = document.getElementById('crownBtn');
const proBtn = document.getElementById('proBtn');
const coverLayer = document.getElementById('cover');

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

createBtn.addEventListener('click', toggleDropdown);
proBtn.addEventListener('click', closePropage);
crownBtn.addEventListener('click', addProPage);

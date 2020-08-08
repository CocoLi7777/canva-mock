const createBtn = document.getElementById('createBtn');

const toggleDropdown = () => {
  const dropdown = document.getElementById('designArea');
  dropdown.classList.toggle('show');
};

createBtn.addEventListener('click', toggleDropdown);

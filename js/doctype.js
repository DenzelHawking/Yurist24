let doctypePage = document.querySelector('#doctype');
let passwordData = document.querySelector('.password');
let confirmPassword = document.querySelector('.confirm-password');

document.body.style.overflow = 'hidden';

confirmPassword.onclick = () => {
  if (passwordData.value == 'yurist24') {
    doctypePage.remove();
    document.body.style.overflow = 'auto';
  } else {
    alert('Доступ запрещен!');
  };
};

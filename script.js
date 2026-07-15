document.getElementById('nav-toggle').addEventListener('click', function(){
  const nav = document.getElementById('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(form);
  // For now just show a quick confirmation. Integrate email/endpoint as needed.
  status.textContent = 'Thanks — message received (demo only).';
  status.classList.remove('muted');
  form.reset();
});

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})


const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-sun')) {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');

        document.body.classList.toggle('dark');
        return ;
    }

    else if (mode.classList.contains('fa-moon')) {
      mode.classList.remove('fa-moon');
      mode.classList.add('fa-sun');
      document.body.classList.remove('dark'); // Desativa o modo dark
  }
});


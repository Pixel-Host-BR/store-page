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

// Start of Tawk.to Script
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6821b4c85fa91f190c49b7a7/1ir1qkclc';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

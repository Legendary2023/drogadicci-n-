document.getElementById('toggle-button').addEventListener('click', function() {
    var menu=document.getElementById('men');
    if(menu.style.left === '0px'){
        menu.style.left = '-250px';
    } else {
        menu.style.left = '0px';
    }
});
playButton.addEventListener('click', function() {
    if (audioElement.paused) {
      audioElement.play();
      playButton.style.display = 'block'; // Muestra el botón
    } else {
      audioElement.pause();
    }
  });


function toggleNav() {
    var nav = document.querySelector('.navigation');
    nav.style.left = nav.style.left === '-250px' ? '-250px' : '0px';
}

function toggleNav() {
  var menu = document.getElementById('menu');
  if (menu.style.left === '-250px') {
      menu.style.left = '0';
  } else {
      menu.style.left = '-250px';
  }
}
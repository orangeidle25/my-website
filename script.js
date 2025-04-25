document.getElementById('enter-button').addEventListener('click', function() {
    document.getElementById('enter-prompt').style.display = 'none';
    document.getElementById('profile-container').classList.remove('hidden');

    const music = document.getElementById('background-music');
    music.play();
});

  function discord() {
    alert("Discord username: orangeidle25");
  }

  function github() {
    if (confirm("You will be redirected to github.com. Do you want to continue?")) {
      window.location.href = "https://github.com/orangeidle25";
    }
  }

  function twitter() {
    if (confirm("You will be redirected to x.com. Do you want to continue?")) {
      window.location.href = "https://x.com/orangeidle";
    }
  }
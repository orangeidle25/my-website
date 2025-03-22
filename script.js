// Wait for the user to click "Enter" and start interactions
document.getElementById('enter-button').addEventListener('click', function() {
    // Hide the prompt and show the profile
    document.getElementById('enter-prompt').style.display = 'none';
    document.getElementById('profile-container').classList.remove('hidden');

    // Start the music after interaction
    const music = document.getElementById('background-music');
    music.play();
});

var MusicManager = function(intensityLevel) {
  //Increment music speed
  
  //Listen for explosion event
    //play explosion sound bite
  document.addEventListener('explode', this.explosion(), false);

};

MusicManager.prototype.explosion = function() {
  //play explosion
  var explosionSound = '<audio class="explosionSound" autoplay="false"><source src="audio/explosion.mp3" type="audio/mp3"><source src="audio/explosion.wav" type="audio/wav">I' + "'" + 'm sorry; your browser doesn' + "'" + 't support .mp3 or .wav audio format.</audio>'
  $('.sound').append(explosionSound);
};

MusicManager.prototype.setPlaybackRate = function(intensityLevel) {
  $('audio').playbackRate = 1 + intensityLevel * 0.25;
};


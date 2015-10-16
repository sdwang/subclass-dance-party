var MusicManager = function(intensityLevel) {
  //Increment music speed
  document.addEventListener('explode', this.explosion, false);

};

MusicManager.prototype.explosion = function() {
  console.log('Explode!');
  var explosionSound = '<audio class="explosionSound" src="audio/explosion.wav" autoplay>Your browser does not support the <code>audio</code> element.</audio>'
  $('.sound').append(explosionSound);
};

MusicManager.prototype.setPlaybackRate = function(intensityLevel) {
  document.getElementsByClassName('sandStorm')[0].playbackRate = 1 + intensityLevel * 0.005;
};


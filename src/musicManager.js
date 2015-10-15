var MusicManager = function(intensityLevel) {
  //Increment music speed
  
  //Play explosion sound effect

};

musicManager.prototype.explosion = function() {
  //play explosion
};

musicManager.prototype.setPlaybackRate = function(intensityLevel) {
  $('audio').playbackRate = 1 + intensityLevel * 0.25;
};
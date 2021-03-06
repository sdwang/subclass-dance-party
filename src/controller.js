var Controller = function(danceManager, intensityObject, musicManager) {
  this.danceManager = danceManager;
  this.intensityObject = intensityObject;
  this.musicManager = musicManager;
}

Controller.prototype.intensityButtonHandler = function() {
  // signal to increase intensity
  // get instensity value
  // pass intensity value to dance manager checker thing

  // pass intensity to mediaManager
  this.intensityObject.increaseIntensity();
  var currentIntensity = this.intensityObject.getIntensity();
  this.danceManager.setIntensity(currentIntensity)
  this.musicManager.setPlaybackRate(currentIntensity);
};
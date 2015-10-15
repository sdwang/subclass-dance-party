var Controller = function(danceManager, intensityObject) {
  this.danceManager = danceManager;
  this.intensityObject = intensityObject;
}

Controller.prototype.intensityButtonHandler = function() {
  // signal to increase intensity
  // get instensity value
  // pass intensity value to dance manager checker thing

  // pass intensity to mediaManager
  this.intensityObject.increaseIntensity();
  var currentIntensity = this.intensityObject.getIntensity();
  this.danceManager.setIntensity(currentIntensity)
};
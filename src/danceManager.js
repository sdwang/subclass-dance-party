var DanceManager = function(arrayOfDancers) {
  this.dancers = arrayOfDancers;

}

DanceManager.prototype.setIntensity = function(intensityValue) {
  for (var i = 0; i < this.dancers.length; i++) {
    this.dancers[i].checkThreshold(intensityValue);
  }
}
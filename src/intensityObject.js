var IntensityObject = function() {
  this.intensityValue = 0;


};

IntensityObject.prototype.increaseIntensity = function() {
  this.intensityValue += 5;
};

IntensityObject.prototype.getIntensity = function() {
  return this.intensityValue;
};

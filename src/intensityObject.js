var IntensityObject = function() {
  this.intensityValue = 0;


};

IntensityObject.prototype.increaseIntensity = function() {
  this.intensityValue += 8;
};

IntensityObject.prototype.getIntensity = function() {
  return this.intensityValue;
};

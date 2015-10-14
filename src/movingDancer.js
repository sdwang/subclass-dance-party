var movingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

movingDancer.prototype = Object.create(makeDancer.prototype);
movingDancer.prototype.constructor = movingDancer;

movingDancer.prototype.step = function() {
  var oldStep = makeDancer.prototype.step;

  oldStep.call(this);

  var moveLeft = Math.floor(Math.random() * 20);
  var moveUp = Math.floor(Math.random() * 20);

  this.setPosition(this.top + moveUp, this.left + moveLeft);

}
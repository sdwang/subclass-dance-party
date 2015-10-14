var pulsingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
}

pulsingDancer.prototype = Object.create(makeDancer.prototype);
pulsingDancer.prototype.constructor = pulsingDancer;

pulsingDancer.prototype.step = function () {
  var mainStep = makeDancer.prototype.step;
  mainStep.call(this);

  var getRandomPx = function () {
    return Math.floor(Math.random() * 21) + 20;
  }
  var newDiameter = getRandomPx();
  this.setSize(newDiameter);
}

pulsingDancer.prototype.setSize = function (diameter) {
  this.$node.css("width", diameter);
}
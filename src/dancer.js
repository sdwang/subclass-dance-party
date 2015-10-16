var Dancer = function(name, thresholds, location) {
  // make node and append
  
  var makeDancerElement = function(name, location) {
    // hold array of image links for body

    // make node
    var $node = $('<div id="' + name + '" class="dancer" style="float: ' + location + ';" width="400px"></div>')
    // set location
    // set image
    var image = '<img class="dancerImage" src="img/' + name + '.gif"' + 'alt="' + name + '" width="365px"/>'
    // append to document
    $node.append(image);
    //return node
    return $node;
  }

  this.name = name;
  this.location = location;
  this.$node = makeDancerElement(name, location);
  this.thresholds = thresholds;
  this.intensityLevel = 0;
  // time between steps

  // start looper
}

// looper function
  // calls head animation function that toggles css class

Dancer.prototype.checkThreshold = function(intensityValue) {
  console.log("Intensity Value: ", intensityValue, "Threshold: ", this.thresholds[this.intensityLevel]);
  var exceedsCurrentThreshold = intensityValue >= this.thresholds[this.intensityLevel];
  if (exceedsCurrentThreshold) {
    this.increaseIntensityLevel();
    this.changeAnimation();
    // call something that checks the current gif and swaps it with faster one
  }
};

Dancer.prototype.increaseIntensityLevel = function() {
  this.intensityLevel++;
  console.log("Intensity Level: ", this.intensityLevel);
}

Dancer.prototype.removeAnimation = function() {
  $('#' + this.name).empty();
};

Dancer.prototype.changeAnimation = function() {
  if(this.intensityLevel >= 3) {
    var event = new Event('explode');
    document.dispatchEvent(event);
    var newImage = '<img src="img/explosion.gif"' + 'alt="defeated!" width="355px" height="535px"/>'
    this.removeAnimation();
    $('#' + this.name).append(newImage);
    setTimeout(this.removeAnimation.bind(this), 1200);
  } else {
    var newImage = '<img class="dancerImage" src="img/' + this.name + this.intensityLevel + '.gif"' + 'alt="' + this.name + '" width="365px"/>'
    this.removeAnimation();
    $('#' + this.name).append(newImage);
  }

}
var Dancer = function(name, thresholds, location) {
  // make node and append
  
  var makeDancerElement = function(name, location) {
    // hold array of image links for body

    // make node
    var $node = $('<div class="dancer" style="float: ' + location + ';"></div>')
    // set location
    // set image
    var image = '<img src="img/' + name + '.gif"' + 'alt="' + name + '"/>'
    // append to document
    $node.append(image);
    //return node
    return $node;
  }

  this.$node = makeDancerElement(name, location);
  this.thresholds = thresholds;
  this.intensityLevel = 0;
  // time between steps

  // start looper
}

// looper function
  // calls head animation function that toggles css class

Dancer.prototype.checkThreshold = function(intensityValue) {
  var exceedsCurrentThreshold = intensityValue >= this.threshold[this.intensityLevel];
  if (exceedsCurrentThreshold) {
    this.increaseIntensityLevel();
    this.changeAnimation();
    // call something that checks the current gif and swaps it with faster one
  }
};

Dancer.prototype.increaseIntensityLevel = function() {
  this.intensityLevel++;
}

Dancer.prototype.changeAnimation = function() {
  // get reference to dance and head gifs
  // check for explosion
    // explode
    // or change source link on gif by incrementing the file name
}
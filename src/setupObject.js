var setup = function () {
  window.danceApp = {};

  var makeDancers = function() {
    var dancers = [];
    var location = [[],[]];
    var names = ["fred", "allen"];

    var generateThresholds = function() {
      var thresholds = [];
      thresholds[0] = 10 + Math.floor(Math.random() * 20);
      thresholds[1] = 30 + Math.floor(Math.random() * 20);
      thresholds[2] = 50 + Math.floor(Math.random() * 20);
      return thresholds;
    };

    for (var i = 0; i < 1; i++) {
      var dancer = new Dancer(names[i], generateThresholds(), location[i]);
      dancers.push(dancer);
    }
    return dancers;
  };

  var danceManager = new DanceManager(makeDancers());

  var intensityObject = new IntensityObject();

  window.danceApp.controller = new Controller(danceManager, intensityObject);

  // think about fading out logo and other things here
};

var setup = function () {
  window.danceApp = {};

  var makeDancers = function() {
    var dancers = [];
    var location = ['left','right'];
    var names = ["fred", "allen"];

    var generateThresholds = function() {
      var thresholds = [];
      thresholds[0] = 10 + Math.floor(Math.random() * 30);
      thresholds[1] = 40 + Math.floor(Math.random() * 30);
      thresholds[2] = 60 + Math.floor(Math.random() * 30);
      return thresholds;
    };

    for (var i = 0; i < 2; i++) {
      var dancer = new Dancer(names[i], generateThresholds(), location[i]);
      dancers.push(dancer);
      $('.dancerContainer').append(dancer.$node);
    }
    return dancers;
  };

  var danceManager = new DanceManager(makeDancers());

  var musicManager = new MusicManager();

  var intensityObject = new IntensityObject();

  window.danceApp.controller = new Controller(danceManager, intensityObject, musicManager);

  // think about fading out logo and other things here
};

$(document).ready(function() {

  setup();

  $(".buttonContainer").on("click", function(event) {
    //Increase music playback speed
    //Increment the intensity level
    console.log('button click');
    danceApp.controller.intensityButtonHandler();
  });

});


$(document).ready(function() {
  $("#preload").show();
  $("#frame").hide();
  $("#loading").hide();
  $("#cursor-blank").hide();
  $("#error").hide();
  $("#serverReady").hide();

  $(document).on({
    'keypress': function(e) {
      if (e.which === 13) {
        initMachine();
        $(this).off(e);
      }
    }
  });

  $(document).on({
    'touchstart': function(e) {
      initMachine();
      $(this).off(e);
    }
  });
});

function initMachine() {
  $("#preload").hide();
  $("#frame").show();

  console.log("H3ll0 Y0u C0d3 V0y3ur!! I'll open source this site when it ressembles something :P Don't forget to say hi on twitter -> @_juanmnl");

  var loading = function() {
    $("#loading").show().append().typed({
      strings: ['...', '...', '<small><span class="warning">Warning: ** This site is a prototype and under heavy development **^500</span></small>', '<small>Work: <span class="ok">Local/remote</span><br>Job: <span class="ok">Open - Full-time</span><br>Languages: <span class="ok">HTML5 - CSS <i>(Sass-Less)</i> - Js <i>(jQuery-React-Ember-Meteor)</i></span><br>Platforms: <span class="ok">Web/Mobile</span></small><br>'],
      showCursor: false,
      contentType: 'html'
    });
  };
  var loadingOff = function() {
    $("#loading").hide();
  };

  var errorShow = function() {
    $("#error").show();
  };
  var errorHide = function() {
    $("#error").hide();
  };

  var thinking = function() {
    $(".thinking").hide();
  };

  var serverReady = function() {
    $("#serverReady").show();
  };
  var serverReadyHide = function() {
    $("#serverReady").hide();
  };

  var welcomeText = function() {
    $("#frame #screen .text span").typed({
      strings: [
        'Hello there! :)^1000',
        'How are you?^1000',
        'My name is Juan Manuel Cornejo and i\'m a frontend designer/engineer.^2000<br>I currently work from Quito,^200 Ecuador. ^500 <small>(0.2333° S, 78.5167° W – UTC/GMT -5)^1500</small><br><br> ^500 I love building things for the web.^500 My areas of interest are:^500<br><br>- RESEARCH and DEVELOPMENT^1000<br>- UI ENGINEERING <i><small>(User interface)</small></i>^1000<br>- UX DESIGN <i><small>(User experience)</small></i>^1000<br>- PRODUCT DESIGN^1000 <br>- PROTOTYPE DEVELOPMENT^1000<br>- WEB/MOBILE CONSULTING^1500<br><br> ^1000 <small>This is a WIP (work-in-progress) of an UI research i\'m working on.^1500</small><br><br>If you want to get in touch,^500 please contact me on twitter^300<br>or throw me an email juanmnl@me.com^3000<br><br>Thank you for stopping by!^500<br><br>:P<br><br>  – Juanmnl^2000<br><br><small>** Please continue with the buttons on the right <i>(external links for now)</i> **</small>'
      ],
      contentType: 'html',
      loop: false,
      startDelay: 1200
    });
  };

  setTimeout(loading, 400);
  setTimeout(loadingOff, 19000);
  setTimeout(errorShow, 1800);
  setTimeout(errorHide, 2500);
  setTimeout(thinking, 19700);
  setTimeout(serverReady, 19300);
  setTimeout(serverReadyHide, 19700);
  setTimeout(welcomeText, 20000);
}

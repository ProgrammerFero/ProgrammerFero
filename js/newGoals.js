$(document).ready(function(){
  progress_bar();
});

function progress_bar() {
  var speed = 30;
  var totalProgress = 0;
  var totalTasks = 0;
  var items = $('.progress_bar').find('.progress_bar_item');
  
  items.each(function() {
      var item = $(this).find('.progress');
      var itemValue = item.data('progress');
      totalProgress += itemValue;
      totalTasks++;
      var i = 0;
      var value = $(this);
      
      var count = setInterval(function(){
          if(i <= itemValue) {
              var iStr = i.toString();
              item.css({
                  'width': iStr+'%'
              });
              value.find('.item_value').html(iStr +'%');
          }
          else {
              clearInterval(count);
          }
          i++;
      },speed);

  });

  var totalPercentage = totalProgress / totalTasks;
  $('#2024-progress-total').text(totalPercentage.toFixed(2) + '%');
  
}

// Sub Email  Number
if (localStorage.getItem("subemail") && localStorage.getItem("subnumber")) {
  console.log("There Is Sub Email , Number");
} else {
  window.location = "../subscribe.html" ;
}

var fullscreenButton = document.getElementById("fullscreenButton");

fullscreenButton.addEventListener("click", function () {
    toggleFullScreen();
});

function toggleFullScreen() {
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
      }
  } else {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
  }

  setTimeout(function () {
    window.scrollBy(0, 1);
  }, 100);
  
  updateFullscreenIcon();
}

function updateFullscreenIcon() {
  var fulllIcon = document.getElementById("fullscreenButton");

  if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    fulllIcon.classList.add("bx-fullscreen");
    fulllIcon.classList.remove("bx-exit-fullscreen");
  } else {
    fulllIcon.classList.add("bx-exit-fullscreen");
    fulllIcon.classList.remove("bx-fullscreen");
  }
}

// --------------------------------  
// Menu Icon
let menu_icons = document.querySelector('.menu-icons'),
nav = document.querySelector('nav');

menu_icons.addEventListener('click', () => {
    nav.classList.toggle('active');
});
  
// NavBar Link Course
var a1 = document.querySelector(".a1");
var a2 = document.querySelector(".a2");
var a3 = document.querySelector(".a3");
var a4 = document.querySelector(".a4");
var a5 = document.querySelector(".a5");
var a6 = document.querySelector(".a6");
var a7 = document.querySelector(".a7");
var a8 = document.querySelector(".a8");
// Footer Links
var f1 = document.querySelector(".f1");
var f2 = document.querySelector(".f2");
var f3 = document.querySelector(".f3");

function saveId(id) {
  localStorage.setItem("courseId", id);
  window.location = "html/courses.html";
}

a1.addEventListener("click", function() { saveId(1); });
f1.addEventListener("click", function() { saveId(1); });

a2.addEventListener("click", function() { saveId(2); });
f2.addEventListener("click", function() { saveId(2); });

a3.addEventListener("click", function() { saveId(3); });
f3.addEventListener("click", function() { saveId(3); });

a4.addEventListener("click", function() { saveId(4); });
a5.addEventListener("click", function() { saveId(5); });
a6.addEventListener("click", function() { saveId(6); });
a7.addEventListener("click", function() { saveId(7); });
a8.addEventListener("click", function() { saveId(8); });


// Know User Online Or Offline
window.onload = function () {
    if (!window.navigator.onLine) {
      c();
    };
};

window.addEventListener("offline" , function() {
    offline()
})

function offline() {
  window.location = "../html/offline.html" ;
}

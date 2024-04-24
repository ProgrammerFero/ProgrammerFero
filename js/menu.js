// Sub Email  Number
if (localStorage.getItem("subemail") && localStorage.getItem("subnumber")) {
  console.log("There Is Sub Email , Number");
} else {
  window.location = "../subscribe.html" ;
}

const audio = new Audio("../Sound_Effect/button.wav");
function sound() {
  audio.play();
}

window.addEventListener("DOMContentLoaded", function () {
  var darkon = localStorage.getItem("DarkLightMode");
  if (darkon == "on") {
    DarkLightMode();
  }

});

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

// Dark Mode
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const services = document.querySelector('.services');
const navH = document.querySelector('nav');
const info_content_h2 = document.querySelector('.info-content h2');
const info_content_h2_span = document.querySelector('.info-content h2 span');
const info_content_p = document.querySelector('.info-content p');
const info_content_p_span = document.querySelector('.info-content p span');
const sectitle = document.querySelector('.sec-title');

function DarkLightMode() {
  toggle.classList.toggle('bi-brightness-high-fill');
  if(toggle.classList.toggle('bi-moon')){
      body.style.background = '#fafafa';
      body.style.color = 'black';

      services.style.color = 'black';
      services.style.background = '#fafafa';

      navH.style.background = 'black';

      info_content_h2.style.color = '#27005D';
      info_content_h2_span.style.color = '#000';
      info_content_p.style.color = '#27005D';
      info_content_p_span.style.color = '#000';

      sectitle.style.color = '#000';

      
  }else{
      body.style.background = '#323946';
      body.style.transition = '2s';

      services.style.color = 'black';
      services.style.background = '#323946';

      navH.style.background = '#1f243d';

      info_content_h2.style.color = '#0ef';
      info_content_h2_span.style.color = '#fff';
      info_content_p.style.color = '#0ef';
      info_content_p_span.style.color = '#fff';

      sectitle.style.color = '#fff';

  }
}

toggle.addEventListener('click', function() {
  localStorage.setItem("DarkLightMode", toggle.classList.contains('bi-moon') ? "on" : "Off");
  DarkLightMode();
});

// --------------------------------
// New Message
var newMessage = document.querySelector(".newMessage");
var newUpdateLocal = localStorage.getItem("Update14")

if (newUpdateLocal) {
  newMessage.style.display = "none" ;
  newMessage.style.opacity = "0" ;
  newMessage.style.visibility = "hidden" ;
} else {
  newMessage.style.display = "block" ;
  newMessage.style.opacity = "1" ;
  newMessage.style.visibility = "visible" ;
}

let NewMessage = [
  {
      id: 1 ,
      icon: "bx bxs-cog" ,
      heading: "The New Update 14" ,
      iconheading: "🌟🚀" ,
      time: "In 10/4/2024",
      desc: "what's new ? <br/><br/> * The Goals Page Is Updated By The Programmer Fero , And That Update Will Like You <br/> * 4 Quotes Is Added  <br/> * When You Visit My Site 50 Times Then I Will Send To You A Message <br/> * The Website has been Faster <br/> * More Improvements" ,
      btnContent: "OK",
  },
];

function drawMSG() {
  let updatesME = NewMessage.map((msg) => {
      return `
      <div class="message-content">
          <i class='${msg.icon}'></i>
          <h3>${msg.heading} <span> ${msg.iconheading}</span></h3>
          <span>${msg.time}</span>
          <p>${msg.desc}</p>
          <button onclick="sound()" type="button" class="okBtnUpdate">${msg.btnContent}</button>
      </div>
      `;
  });

  newMessage.innerHTML = updatesME.join(''); 
}
drawMSG();

var SendUpdate = document.querySelector(".okBtnUpdate");

SendUpdate.addEventListener('click' , function() {
  localStorage.setItem("Update14" , JSON.stringify("Updated"));

  var itemsToRemove = ["Update10" , "Update11" , "Update12" , "Update13"];
  itemsToRemove.forEach(function(item) {
    localStorage.removeItem(item);
  });

  newMessage.style.display = "none" ;
})

// New Message
var subscribeMessage = document.querySelector(".subscribeMessage");
var subscribedYT = localStorage.getItem("subscribedYT")

if (subscribedYT) {
  subscribeMessage.style.display = "none" ;
  subscribeMessage.style.opacity = "0" ;
  subscribeMessage.style.visibility = "hidden" ;
} else {
  subscribeMessage.style.display = "block" ;
  subscribeMessage.style.opacity = "1" ;
  subscribeMessage.style.visibility = "visible" ;
}

let SubMessages = [
  {
      id: 1 ,
      icon: "bx bxl-youtube" ,
      heading: "Support Me" ,
      iconheading: "🌟🚀" ,
      time: "In 20/1/2024",
      desc: "The least you can do to help me or support me is to subscribe to my YouTube channel. I hope you will be honest and help me. Thank you." ,
  },
];

function drawSubMSG() {
  let updatesME = SubMessages.map((msg) => {
      return `
      <div class="subscribeMessage-content">
          <i class='${msg.icon}' style="color: red;"></i>
          <h3>${msg.heading} <span> ${msg.iconheading}</span></h3>
          <p>${msg.desc}</p>
          <button onclick="sound()" type="button" class="subBtn">Subscribe</button>
      </div>
      `;
  });

  subscribeMessage.innerHTML = updatesME.join(''); 
}
drawSubMSG();

var SendUpdate = document.querySelector(".subBtn");

SendUpdate.addEventListener('click' , function() {
  localStorage.setItem("subscribedYT" , JSON.stringify("Subscribed"));
  subscribeMessage.style.display = "none" ;
  window.location = "https://youtube.com/@programmerfero" ;
})

// Messages
var yourOpinionMSG = document.querySelector(".opionMsg");
var yourOpinionV = localStorage.getItem("visits") ;

if (yourOpinionV < 5) {
  yourOpinionMSG.style.display = "none" ;
  yourOpinionMSG.style.opacity = "0" ;
  yourOpinionMSG.style.visibility = "hidden" ;
} else {
  yourOpinionMSG.style.display = "block" ;
  yourOpinionMSG.style.opacity = "1" ;
  yourOpinionMSG.style.visibility = "visible" ;
}


var yourOpinion2 = localStorage.getItem("opinion") ;
if (yourOpinion2) {
  yourOpinionMSG.style.display = "none" ;
  yourOpinionMSG.style.opacity = "0" ;
  yourOpinionMSG.style.visibility = "hidden" ;
}

let yourOpinionMSGs = [
  {
      id: 1 ,
      icon: "bx bxs-cog" ,
      heading: "Give Me Your Opinion" ,
      iconheading: "🌟" ,
      btnContent: "OK",
  },
];

function drawOpion() {
  let updateOp = yourOpinionMSGs.map((msg) => {
      return `
      <div class="message-content">
          <i class='${msg.icon}'></i>
          <h3>${msg.heading} <span> ${msg.iconheading}</span></h3>

        <form method="post" name="opioion-form" vaildate>

            <input type="email" name="email" placeholder="email@gmail.com" class="input-email-opioin" required>

            <label>
              <input type="radio" name="opioion" value="1" > ⭐
            </label>
            
            <label>
              <input type="radio" name="opioion" value="2" > ⭐⭐
            </label>
            
            <label>
              <input type="radio" name="opioion" value="3" > ⭐⭐⭐
            </label>    

            <label>
              <input type="radio" name="opioion" value="4" > ⭐⭐⭐⭐
            </label>   

            <label>                                         
              <input type="radio" name="opioion" value="5" required> ⭐⭐⭐⭐⭐
            </label>   

          <button type="submit" class="okBtnUpdateOP">Ok</button>
        </form>

      </div>


      `;
  });

  yourOpinionMSG.innerHTML = updateOp.join(''); 
}

// VisitThank MSG
var VisitThankMSG = document.querySelector(".VisitThank");
var VisitThank = localStorage.getItem("VisitThank")

if(localStorage.getItem('visits') >= 49) {
  if (VisitThank) {
    VisitThankMSG.style.display = "none" ;
    VisitThankMSG.style.opacity = "0" ;
    VisitThankMSG.style.visibility = "hidden" ;
  } else {
    VisitThankMSG.style.display = "block" ;
    VisitThankMSG.style.opacity = "1" ;
    VisitThankMSG.style.visibility = "visible" ;
  }
  
  let VisitThankMessage = [
    {
        id: 1 ,
        icon: "bx bxs-keyboard" ,
        heading: "Thank You" ,
        iconheading: "🌟🚀" ,
        time: "In 9/4/2024",
        desc: "This is The 50 Times You Visit My Web I Hope This Web Like You , And Thanks Again , And I Hope You Founded What You Are Looking For  .  The Programmer Fero" ,
    },
  ];
  
  function drawVisitThank() {
    let updatesME2 = VisitThankMessage.map((msg) => {
        return `
        <div class="VisitThank-content">
            <i class='${msg.icon}' style="color: red;"></i>
            <h3>${msg.heading} <span> ${msg.iconheading}</span></h3>
            <p>${msg.desc}</p>
            <button onclick="sound()" type="button" class="subthank">Ok Thanks</button>
        </div>
        `;
    });
  
    VisitThankMSG.innerHTML = updatesME2.join(''); 
  }
  drawVisitThank();
  
  var subthank = document.querySelector(".subthank");
  
  subthank.addEventListener('click' , function() {
    localStorage.setItem("VisitThank" , JSON.stringify("Done"));
    VisitThankMSG.style.display = "none" ;
  })
  } else {
  console.log("Until 50 Times");
}


// Visits
if(localStorage.getItem('visits')) {
  var visits = parseInt(localStorage.getItem('visits')) + 1;

  if(visits >= 6) {
    drawOpion();
  }

  localStorage.setItem('visits', visits);
} else {
  localStorage.setItem('visits', 1);
}

const scriptURL = "https://script.google.com/macros/s/AKfycbybhv0i-WAeVkl8U6K9rzJURWHiS9tLKBsDKehyYbRG8j-d_YiNItheBqERzvivJ3l2og/exec";

const formOp = document.forms['opioion-form'];

formOp.addEventListener("submit", e => {
    e.preventDefault();
    fetch(scriptURL, { method: "post", body: new FormData(formOp) }) // Corrected 'form' to 'formOp'
        .then(() => { window.location.reload(); })
        .catch(error => console.error("Error!!", error.message));

    localStorage.setItem("opinion", JSON.stringify("Updated"));
    yourOpinionMSG.style.display = "none";
});


// Save Id
function saveCourse(id) {
    localStorage.setItem("courseId" , id)
    window.location = "html/courses.html"
}

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


var AllCoursesFind;
var projectName;

switch (productId) {
    case "1":
        AllCoursesFind = editApps;
        projectName = "Course Edit Apps";
        break;
    case "2":
        AllCoursesFind = sketchware;
        projectName = "Course SketchWare";
        break;
    case "3":
        AllCoursesFind = fixProblems;
        projectName = "Fix Problems";
        break;
    case "4":
        AllCoursesFind = github;
        projectName = "Github";
        break;
    case "5":
        AllCoursesFind = hostWeb;
        projectName = "Hosting Website";
        break;
    case "6":
        AllCoursesFind = VsCode;
        projectName = "VsCode";
        break;
    case "7":
        AllCoursesFind = whatsapp;
        projectName = "WhatsApp";
        break;
    case "8":
        AllCoursesFind = languages;
        projectName = "Languages";
        break;

    default:

    break;
}
// drawCourseInfo();
lastproject.innerHTML = projectName;


// Know User Online Or Offline

window.onload = function () {
    if (!window.navigator.onLine) {
      offline();
    };
};

window.addEventListener("offline" , function() {
    offline()
})

function offline() {
  window.location = "../html/offline.html" ;
}
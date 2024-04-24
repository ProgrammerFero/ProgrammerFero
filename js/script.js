// Menu Icon
let menu_icons = document.querySelector('.menu-icons'),
nav = document.querySelector('nav');

menu_icons.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Check Sub Email , Number
if (localStorage.getItem("subemail") && localStorage.getItem("subnumber")) {
  console.log("There Is Sub Email , Number");
} else {
  window.location = "subscribe.html" ;
}

const audio = new Audio("Sound_Effect/button.wav");
function sound() {
  audio.play();
}
sound();

window.addEventListener("DOMContentLoaded", function () {
  var darkon = localStorage.getItem("DarkLightMode");
  if (darkon == "on") {
    darkmode();
  }

});

var fullscreenButton = document.getElementById("fullscreenButton");

fullscreenButton.addEventListener("click", function () {
    toggleFullScreen();
    if (document.fullscreenEnabled) {
      toggleFullScreen();
  } else {
      alert("Fullscreen not supported.");
  }
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
const section = document.querySelector('.sec');
const landing2 = document.querySelector('.landing2');
const ul_fix_problems = document.querySelectorAll('.ul-fix-problems');
const aboutme = document.querySelector('.about-me');
const services = document.querySelector('.servicesH');
const lproj = document.querySelector('.last-project');
const lproj2 = document.querySelector('.last-project2');
const navH = document.querySelector('nav');
const contact = document.querySelector('.contact');
const offertitle = document.querySelector('.offer-content #fo-title');
const offer  = document.querySelector('.offer');
const servicesQuote  = document.querySelector('.servicesQuote');

function darkmode() {
  toggle.classList.toggle('bi-brightness-high-fill');
  if(toggle.classList.toggle('bi-moon')){
      body.style.background = '#fff';
      body.style.color = 'black';
      body.style.transition = '2s';
      
      section.style.color = 'black';
      section.style.background = 'white';
      section.style.transition = '2s';

      aboutme.style.color = 'black';
      aboutme.style.background = '#eee';
      aboutme.style.transition = '2s';

      services.style.color = 'black';
      services.style.background = 'rgba(243, 238, 235, 0.678)';
      services.style.transition = '2s';

      navH.style.background = 'black';
      navH.style.transition = '2s';

      contact.style.background = '#dcdce9';
      contact.style.transition = '2s';

      offertitle.style.color = "#000" ;

      offer.style.background = "#fff" ;

      lproj.style.color = "#000" ;
      lproj2.style.color = "#000" ;

      servicesQuote.style.background = "#fff" ;
      servicesQuote.style.color = "#000" ;

      landing2.style.background = "rgba(243, 238, 235, 0.678)" ;
      landing2.style.color = "#000" ;

      ul_fix_problems.forEach(item => {
        item.style.color = "rgb(3, 3, 123)";
      });

  }else{
      body.style.background = '#1f242d';
      body.style.color = 'white';
      body.style.transition = '2s';

      section.style.color = 'white';
      section.style.background = '#1f242d';
      section.style.transition = '2s';

      aboutme.style.color = 'white';
      aboutme.style.background = '#333946';
      aboutme.style.transition = '2s';

      services.style.color = 'black';
      services.style.background = '#323946';
      services.style.transition = '2s';

      navH.style.background = '#1f243d';
      navH.style.transition = '2s';
  
      contact.style.background = '#323946';
      contact.style.transition = '2s';

      offertitle.style.color = "#fff" ;

      offer.style.background = "#1f242d" ;

      lproj.style.color = "#fff" ;

      lproj2.style.color = "#fff" ;

      servicesQuote.style.background = "#1f242d" ;
      servicesQuote.style.color = "#000" ;

      landing2.style.background = "#323946" ;
      landing2.style.color = "#fff" ;

      ul_fix_problems.forEach(item => {
        item.style.color = "#0ef";
    });
  
  }
}

toggle.addEventListener('click', function() {
  localStorage.setItem("DarkLightMode", toggle.classList.contains('bi-moon') ? "on" : "Off");
  darkmode();
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

// New Message
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

  localStorage.setItem('visits', visits);
} else {
  localStorage.setItem('visits', 1);
}


// Draw Cards
let allCourses = [
  {
      id: 1 ,
      imgUrl: "assest/images_courses/Intro_Edit_App.png" ,
      heading: "Edit Apps" ,
      desc: "Edit Any Apps On Phone Using Mt-Manage And Apk Editor" ,
  },
  {
      id: 2 ,
      imgUrl: "assest/images_courses/intro Sketchware.png" ,
      heading: "SketchWare" ,
      desc: "Create A New App Using SketchWare , Start A New App A Good App Easliy" ,
  },
  {
      id: 3 ,
      imgUrl: "assest/images_courses/fix problems.png" ,
      heading: "Fix Problems" ,
      desc: "Fix A Lot Of Problems In Windows , Windows Update And Another Problems" ,
  },
  {
      id: 4 ,
      imgUrl: "assest/images_courses/account_github.png" ,
      heading: "Github" ,
      desc: "Every Things In GitHub , How To Create Account , Upload Your Web .." ,
  },
  {
      id: 5 ,
      imgUrl: "assest/images_courses/hostweb_github.png" ,
      heading: "Hosting Websites" ,
      desc: "Host Your Web In Github Or Google Drive For Free And Share URL" ,
  },
  {
      id: 6 ,
      imgUrl: "assest/images_courses/vscode-extensions.png" ,
      heading: "Vs Code" ,
      desc: "There Are Many Shortcut And Extensions In VsCode Coming Soon" ,
  },
  {
    id: 8 ,
    imgUrl: "assest/Lang/coverCourse.png" ,
    heading: "Languages" ,
    desc: "Learn More Than 8 Languages Free With Taleek And ZAmericanEnglish" ,
    new: "New",    
  },
];

window.onload = function() {
  localStorage.setItem("allCourses" , JSON.stringify(allCourses));
}

var servicescards = document.querySelector("#cards");

function drawproduct() {
  let productUi = allCourses.map((item) => {
      return `
      <div class="servicesH-card">
      ${item.new ? `<span class="new">${item.new}</span>` : "" }
          <div class="servicesH-img" style="padding: 10px;">
              <img src="${item.imgUrl}" loading="lazy" alt="${item.heading}">
          </div>
          <div class="servicesH-info">
              <h3 class="title">${item.heading}</h3>
              <p>${item.desc}</p>
              <a herf="#" onClick="saveCourse(${item.id})">Read More</a>
          </div>
      </div>
      `;
  });
  localStorage.setItem("allCourses" , JSON.stringify(allCourses));
  servicescards.innerHTML = productUi.join(''); 
}

drawproduct();

// Draw Quotes

let AllQuotes = [
  {
    id: 28 ,
    imgUrl: "https://i.ibb.co/xsk3mRT/28.png" ,
    heading: "Quote 28" ,
    new: "New" ,
    time: "Added On 19/3/2024" ,
  },
  {
    id: 29 ,
    imgUrl: "https://i.ibb.co/59X7zLQ/29.png" ,
    heading: "Quote 29" ,
    new: "New" ,
    time: "Added On 26/3/2024" ,
  },
  {
    id: 30 ,
    imgUrl: "https://i.ibb.co/9gvDjfD/30.png" ,
    heading: "Quote 30" ,
    new: "New" ,
    time: "Added On 8/4/2024" ,
  },
];

var cardsQuote = document.querySelector("#cards-Quote");
function drawQuotes() {
  let quotee = AllQuotes.map((item) => {
      return `
      <div class="servicesQuote-card">
      ${item.new ? `<span class="new">${item.new}</span>` : "" }
          <div class="servicesQuote-img" style="padding: 10px;">
              <img style="padding: 5px;" loading="lazy" alt="${item.heading}" src="${item.imgUrl}" loading="lazy" alt="">
          </div>
          <div class="servicesQuote-info">
              <h3 class="title">${item.heading}</h3>
              <p>${item.time}</p>
              <a herf="#" onclick="downloadImage('${item.imgUrl}', '${item.heading}')">Download Image</a>
          </div>
      </div>
      `;
  });
  cardsQuote.innerHTML = quotee.join(''); 

}
drawQuotes();

function downloadImage(imgUrl, heading) {
  var link = document.createElement('a');
  link.href = imgUrl;
  link.download = heading;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function searchCards() {
  var input, filter, cards, card, title, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  cards = document.getElementById("cards");
  card = cards.getElementsByClassName("servicesQuote-card");

  for (i = 0; i < card.length; i++) {
      title = card[i].getElementsByClassName("title")[0];
      if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
          card[i].style.display = "";
      } else {
          card[i].style.display = "none";
      }
  }
}

// Save Id In LocalSotorage 
function saveCourse(id) {
  localStorage.setItem("courseId" , id)

  window.location = "html/courses.html";
}

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


// Typing
var typed = new Typed('#element', {
    strings: ["FrontEnd" , "Youtuber" , "Freelancer" , "Programmer" ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var tupe = new Typed('#elementProblem', {
  strings: ["I know that there are many problems on my website, issues with colors, some designs, and many other problems. However, every day or every 3 days, an update is released to fix all the issues, colors, and everything. The important thing is to start your work and develop it. 💪🌟 But if you don't do your work, there is nothing to improve. 🚀 You can also monitor the bar at the bottom of the page (Footer) to see the number of updates until now. <strong>#Programmer_Fero</strong>"],
  typeSpeed: 100,
  backDelay: 10,
  loop: false
});

// scroll receal 
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.left ,.landing-info ', { origin: 'left' });


// Send Data Form
const scriptURL = "https://script.google.com/macros/s/AKfycbzmh974CEOC4SN72v12x4rEcZIJ-l-PyECelUagW2Nvt1uW-xA1nbRaeEg18ZsGOQCfGw/exec";

const form = document.forms['contact-form'];

form.addEventListener("submit" , e => {
    e.preventDefault()
    fetch(scriptURL , {method: "post" , body: new FormData(form)})
    .then(response => alert("Thank You\nYour Data Is Submitted"))
    .then(() => {window.location.reload();})
    .catch(error => console.error("Error!!" , error.message))

})


// Btn Top , Down
var topBtn = document.querySelector(".top");
var bottomBtn = document.querySelector(".bottom");
var topI = document.querySelector(".top i");

bottomBtn.addEventListener("click", function() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});


window.onscroll = function() {
  if (scrollY <= 500) {
    topBtn.style.display = "none" ;
    bottomBtn.style.display = "block" ;
  }
  
  else {
    topBtn.style.display = "block" ;
    bottomBtn.style.display = "none" ;
  }
}

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
  window.location = "html/offline.html" ;
}
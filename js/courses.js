let OrgProducts = JSON.parse(localStorage.getItem("allCourses"));
let productId = localStorage.getItem("courseId");
let productsDetails = OrgProducts.find((item) => item.id == productId);
var servicescards = document.querySelector(".services-cards");

window.onload = function() {
    if (localStorage.getItem("courseId") == null) {
        window.location = history.back() ;
    }
}

let editApps = [
    {
        id: 1 ,
        imgUrl: "../assest/images_courses/Intro_Edit_App.png" ,
        heading: "Intro Edit Apps" ,
        desc: "Edit Any Apps On Phone Using Mt Manage And Apk Editor" ,
        watchYoutube: "https://youtu.be/RQ3QqpaP6QA?feature=shared" ,
    },
    {
        id: 2 ,
        imgUrl: "../assest/images_courses/Edit App 1.png" ,
        heading: "Edit Apps 1" ,
        desc: "Edit Any Apps On Phone Using Mt Manage And Apk Editor" ,
        watchYoutube: "https://youtu.be/Jwhb16WupNg?feature=shared" ,
    },
    {
        id: 3 ,
        imgUrl: "../assest/images_courses/Edit App 2.png" ,
        heading: "Edit Apps 2" ,
        desc: "Edit Any Apps On Phone Using Mt Manage And Apk Editor" ,
        watchYoutube: "https://youtu.be/VQzYwjJUr_U?feature=shared" ,
    },
    {
        id: 5 ,
        imgUrl: "../assest/images_courses/Edit App 3.png" ,
        heading: "Edit Apps 3" ,
        desc: "Edit Any Apps On Phone Using Mt Manage And Apk Editor" ,
        watchYoutube: "https://youtu.be/JyRkIDFdeDM?feature=shared" ,
    },
    {
        id: 6 ,
        imgUrl: "../assest/images_courses/Edit App 4.png" ,
        heading: "Edit Apps 4" ,
        desc: "Edit Any Apps On Phone Using Mt Manage And Apk Editor" ,
        watchYoutube: "https://youtu.be/a6mUv3lTsM8?feature=shared" ,
    },
];

let sketchware = [
{
    id: 1 ,
    imgUrl: "../assest/images_courses/intro Sketchware.png" ,
    heading: "Intro Sketchware" ,
    desc: "Edit Any Apps On Phone Using Mt-Manage And Apk Editor" ,
    watchYoutube: "https://youtu.be/l6Ekg1V8EZc?feature=shared" ,
},
{
    id: 2 ,
    imgUrl: "../assest/images_courses/Sketchware 1.png" ,
    heading: "Sketchware 1" ,
    desc: "Edit Any Apps On Phone Using Mt-Manage And Apk Editor" ,
    watchYoutube: "https://youtu.be/Gg43stF_rok?feature=shared" ,
},
{
    id: 3 ,
    imgUrl: "../assest/images_courses/Sketchware 2.png" ,
    heading: "Sketchware 2" ,
    desc: "Edit Any Apps On Phone Using Mt-Manage And Apk Editor" ,
    watchYoutube: "https://youtu.be/Z9WVBWnOk60?feature=shared" ,
},
];

let fixProblems = [
    {
        id: 1 ,
        imgUrl: "../assest/images_courses/problem 1.png" ,
        heading: "How To Fix Msvcp140_codecvt_ids.dll" ,
        desc: "Fix Error dill On Windows" ,
        watchYoutube: "https://youtu.be/8CAOE37iLnA?feature=shared" ,
    },
    {
        id: 2 ,
        imgUrl: "../assest/images_courses/problem 2.png" ,
        heading: "How To Fix Vcruntime_140_1.dll" ,
        desc: "Fix Error dill On Windows" ,
        watchYoutube: "https://youtu.be/VwCQ2otIi5M?feature=shared" ,
    },
    {
        id: 3 ,
        imgUrl: "../assest/images_courses/problem 3.png" ,
        heading: "How To Remove Preview Panel In Windows" ,
        desc: "Remove Preview Panel Easily" ,
        watchYoutube: "https://youtu.be/cvA0kKIx-44?feature=shared" ,
    },
    {
        id: 4 ,
        imgUrl: "../assest/images_courses/problem 4.png" ,
        heading: "How To Connecting the Internet to computer" ,
        desc: "via Mobile Without LAN and Intel Wi-Fi" ,
        watchYoutube: "https://youtu.be/_TuXibU3pik?feature=shared" ,
    },
    {
        id: 5 ,
        imgUrl: "../assest/images_courses/problem 5.png" ,
        heading: "How To Stop Windows Updates Forever" ,
        desc: "Stop Windows Updates" ,
        watchYoutube: "https://youtu.be/8t9w0WaeiZU?feature=shared" ,
    },
    {
        id: 6 ,
        imgUrl: "../assest/images_courses/problem 6.png" ,
        heading: "How To Fix Windows Update Error" ,
        desc: "Fix Windows Update" ,
        watchYoutube: "https://youtu.be/ODMUjDPDWv8?feature=shared" ,
    },
    {
        id: 7 ,
        imgUrl: "../assest/images_courses/problem 7.png" ,
        heading: "How To Fix virtualization Systems" ,
        desc: "SandBox , VmWare" ,
        watchYoutube: "https://youtu.be/aJQSbNemKkA?feature=shared" ,
    },
    {
        id: 8 ,
        imgUrl: "../assest/images_courses/problem 8.png" ,
        heading: "How To Fix This Error" ,
        desc: "Inside This Video , We Can't Active Windows , Active Windows" ,
        watchYoutube: "https://youtu.be/gweDiyaW7dc?feature=shared" ,
        new: "New",
    },
    {
        id: 9 ,
        imgUrl: "../assest/images_courses/problem 9.png" ,
        heading: "How To Change Battery Message" ,
        desc: "10% --> 32%" ,
        watchYoutube: "https://youtu.be/uCdtbwPnk0U?feature=shared" ,
        new: "New",
    },
];

let github = [
    {
        id: 1 ,
        imgUrl: "../assest/images_courses/account_github.png" ,
        heading: "How To Create Account On Github" ,
        desc: "Github" ,
        watchYoutube: "https://youtu.be/IMYGudoRkNo?feature=shared" ,
        new: "New",
    },
];

let hostWeb = [
    {
        id: 1 ,
        imgUrl: "../assest/images_courses/hostweb_github.png" ,
        heading: "How To host A Website On Github" ,
        desc: "Hosting Web" ,
        watchYoutube: "https://youtu.be/H5vb-0V9jrw?feature=shared" ,
        new: "New",
    },
];

let VsCode = [
    {
        id: 1 ,
        imgUrl: "../assest/images_courses/vscode-extensions.png" ,
        heading: "How To Install Vscode Extensions" ,
        desc: "Vscode" ,
        watchYoutube: "https://youtu.be/MgARkr-tc3I?feature=shared" ,
        new: "New",
    },
];

let whatsapp = [
    {
        id: 1 ,
        imgUrl: "../assest/images_courses/whatsapp-channel.png" ,
        heading: "How To Create WhatsApp Channel" ,
        desc: "WhatsApp Channel" ,
        watchYoutube: "https://youtu.be/i9hUzQ_jD7k?feature=shared" ,
        new: "New",
    },
];

let languages = [
    {
        id: 1 ,
        imgUrl: "../assest/Lang/english.png" ,
        heading: "Learn English Simply Free" ,
        desc: "Languages" ,
        watchYoutube: "https://youtu.be/fI1sj6b0MVs" ,
        new: "New",
    },
    {
        id: 2 ,
        imgUrl: "../assest/Lang/chinese.png" ,
        heading: "Learn Chinese Simply Free" ,
        desc: "Languages" ,
        watchYoutube: "https://youtu.be/vG0xco_YhQk" ,
        new: "New",
    },
    {
        id: 3 ,
        imgUrl: "../assest/Lang/japan.jpg" ,
        heading: "Learn Japanese Simply Free" ,
        desc: "Languages" ,
        watchYoutube: "https://youtu.be/6ZZ6Eojteqo" ,
        new: "New",
    },
    {
        id: 4 ,
        imgUrl: "../assest/Lang/coverCourse.png" ,
        heading: "Learn More Than 8 Langugaes Free" ,
        desc: "Languages" ,
        watchYoutube: "https://youtu.be/ARS7gB2_Lho" ,
        new: "New",
    },
];

var setitle = document.querySelector(".sec-title");

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

setitle.innerHTML = projectName;

function drawCourseInfo() {
    let productUi = AllCoursesFind.map((item) => {
        return `
        <div class="services-card">
            ${item.new ? `<span class="new">${item.new}</span>` : "" }
            <div class="services-img">
                <img loading="lazy" alt="${item.heading}" src="${item.imgUrl}" alt="">
            </div>
            <div class="services-info">
                <h3 class="title">${item.heading}</h3>
                <p>${item.desc}</p>
                <a href="${item.watchYoutube}" onClick="saveCourse(${item.id})">Watch Now</a>
            </div>
        </div>
        `;
    });
    servicescards.innerHTML = productUi.join(''); 
}
drawCourseInfo();

function searchCards() {
    var input, filter, cards, card, title, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    cards = document.getElementById("cards");
    card = cards.getElementsByClassName("services-card");

    for (i = 0; i < card.length; i++) {
        title = card[i].getElementsByClassName("title")[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}

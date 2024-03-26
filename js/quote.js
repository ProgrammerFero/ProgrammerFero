let AllQuotes = [
    {
        id: 1 ,
        imgUrl: "../assest/quotes/1.png" ,
        heading: "Quote 1" ,
        iframe: "https://www.youtube.com/embed/iNotJe7KR7Q?si=bHYeZLFApy1QrtGF" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 2 ,
        imgUrl: "../assest/quotes/2.png" ,
        heading: "Quote 2" ,
        iframe: "https://www.youtube.com/embed/NbRvjh9uHNQ?si=az_IJqLaqFnb6SPa" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 3 ,
        imgUrl: "../assest/quotes/3.png" ,
        heading: "Quote 3" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 4 ,
        imgUrl: "../assest/quotes/4.png" ,
        heading: "Quote 4" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 5 ,
        imgUrl: "../assest/quotes/5.png" ,
        heading: "Quote 5" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 6 ,
        imgUrl: "../assest/quotes/6.png" ,
        heading: "Quote 6" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 7 ,
        imgUrl: "../assest/quotes/7.png" ,
        heading: "Quote 7" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 8 ,
        imgUrl: "../assest/quotes/8.png" ,
        heading: "Quote 8" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 9 ,
        imgUrl: "../assest/quotes/9.png" ,
        heading: "Quote 9" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 10 ,
        imgUrl: "../assest/quotes/10.png" ,
        heading: "Quote 10" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 11 ,
        imgUrl: "../assest/quotes/11.png" ,
        heading: "Quote 11" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 12 ,
        imgUrl: "../assest/quotes/12.png" ,
        heading: "Quote 12" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 13 ,
        imgUrl: "../assest/quotes/13.jpg" ,
        heading: "Quote 13" ,
        time: "Added On 25/1/2024" ,
    },
    {
        id: 14 ,
        imgUrl: "../assest/quotes/14.png" ,
        heading: "Quote 14" ,
        time: "Added On 29/1/2024" ,
    },
    {
        id: 15 ,
        imgUrl: "../assest/quotes/15.png" ,
        heading: "Quote 15" ,
        time: "Added On 29/1/2024" ,
    },
    {
        id: 16 ,
        imgUrl: "../assest/quotes/16.png" ,
        heading: "Quote 16" ,
        time: "Added On 30/1/2024" ,
    },
    {
        id: 17 ,
        imgUrl: "../assest/quotes/17.png" ,
        heading: "Quote 17" ,
        time: "Added On 2/2/2024" ,
    },
    {
        id: 18 ,
        imgUrl: "../assest/quotes/18.png" ,
        heading: "Quote 18" ,
        time: "Added On 5/2/2024" ,
    },
    {
        id: 19 ,
        imgUrl: "../assest/quotes/19.png" ,
        heading: "Quote 19" ,
        time: "Added On 22/2/2024" ,
    },
    {
        id: 20 ,
        imgUrl: "../assest/quotes/20.png" ,
        heading: "Quote 20" ,
        time: "Added On 23/2/2024" ,
    },

    {
        id: 21 ,
        imgUrl: "../assest/quotes/21.png" ,
        heading: "Quote 21" ,
        time: "Added On 27/2/2024" ,
    },

    {
        id: 22 ,
        imgUrl: "../assest/quotes/22.png" ,
        heading: "Quote 22" ,
        time: "Added On 29/2/2024" ,
    },

    {
        id: 23 ,
        imgUrl: "../assest/quotes/23.png" ,
        heading: "Quote 23" ,
        time: "Added On 1/3/2024" ,
    },

    {
        id: 24 ,
        imgUrl: "../assest/quotes/24.png" ,
        heading: "Quote 24" ,
        time: "Added On 3/3/2024" ,
    },

    {
        id: 25 ,
        imgUrl: "../assest/quotes/25.png" ,
        heading: "Quote 25" ,
        time: "Added On 6/3/2024" ,
    },

    {
        id: 26 ,
        imgUrl: "../assest/quotes/26.png" ,
        heading: "Quote 26" ,
        time: "Added On 10/3/2024" ,
    },

    {
        id: 27 ,
        imgUrl: "../assest/quotes/27.png" ,
        heading: "Quote 27" ,
        new: "New" ,
        time: "Added On 17/3/2024" ,
    },

    {
        id: 28 ,
        imgUrl: "../assest/quotes/28.png" ,
        heading: "Quote 28" ,
        new: "New" ,
        time: "Added On 19/3/2024" ,
    },
];

var servicescards = document.querySelector("#cards");
function drawproduct() {
    let productUi = AllQuotes.map((item) => {
        return `
        <div class="services-card">
        ${item.new ? `<span class="new">${item.new}</span>` : "" }
            <div class="services-img">
                <img loading="lazy" alt="${item.heading}" src="${item.imgUrl}" loading="lazy" alt="">
            </div>
            <div class="services-info">
                <h3 class="title">${item.heading}</h3>
                <p>${item.time}</p>
                <a herf="#" onclick="downloadImage('${item.imgUrl}', '${item.heading}')">Download Image</a>
            </div>
        </div>
        `;
    });
    servicescards.innerHTML = productUi.join(''); 

}
drawproduct();

var secTitle = document.querySelector(".sec-title");
secTitle.innerHTML= "There Are " + AllQuotes.length + " Quotes" ;

document.title = AllQuotes.length + " Quotes" ;

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
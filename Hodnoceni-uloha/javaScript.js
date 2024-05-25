let ifScored = false;
let finalScore = 0;
let count = 0;
let butComentCount = 0;
let plusMinus = 0;


const poleItemu = [
    { score: "0", name: "Guinsoo's Rageblade", number: 3000, source: "https://static.wikia.nocookie.net/leagueoflegends/images/6/64/Guinsoo%27s_Rageblade_item_HD.png/revision/latest/scale-to-width-down/64?cb=20201110230134", order: 1 },
    { score: "0", name: "Navori Flickerblade", number: 2600, source: "https://static.wikia.nocookie.net/leagueoflegends/images/e/e7/Navori_Flickerblade_item_HD.png/revision/latest/scale-to-width-down/64?cb=20240506150432", order: 2 },
    { score: "0", name: "Yun Tal Wildarrows", number: 3200, source: "https://static.wikia.nocookie.net/leagueoflegends/images/e/eb/Yun_Tal_Wildarrows_item_HD.png/revision/latest/scale-to-width-down/64?cb=20240506150444", order:3 },
    { score: "0", name: "The Collector", number: 3200, source: "https://static.wikia.nocookie.net/leagueoflegends/images/9/91/The_Collector_item.png/revision/latest?cb=20221019172837", order:4  },
    { score: "0", name: "Terminus", number: 3000, source: "https://static.wikia.nocookie.net/leagueoflegends/images/d/df/Terminus_item_HD.png/revision/latest/scale-to-width-down/64?cb=20231204214915", order:5 },
    { score: "0", name: "Statikk Shiv", number: 2900, source: "https://static.wikia.nocookie.net/leagueoflegends/images/4/4f/Statikk_Shiv_item_HD.png/revision/latest/scale-to-width-down/64?cb=20230518120817", order:6 },
    { score: "0", name: "Rapid Firecanon", number: 2600, source: "https://static.wikia.nocookie.net/leagueoflegends/images/4/48/Rapid_Firecannon_item_HD.png/revision/latest/scale-to-width-down/64?cb=20240109214154", order:7 },
    { score: "0", name: "Runaan's Hurricane", number: 2600, source: "https://static.wikia.nocookie.net/leagueoflegends/images/f/ff/Runaan%27s_Hurricane_item_HD.png/revision/latest/scale-to-width-down/64?cb=20201111001820",order:8 },
    { score: "0", name: "Phantom Dancer", number: 2600, source: "https://static.wikia.nocookie.net/leagueoflegends/images/5/5e/Phantom_Dancer_item_HD.png/revision/latest/scale-to-width-down/64?cb=20230613182250", order:9 }
]
let butNext = document.getElementById("next");
let cPoc = 6;
for (let i = 0; i < 3; i++) {
    cPoc += 5;
    let container = document.createElement("div");
    container.className = "d2";
    let ctverD = document.createElement("div");
    let div = document.createElement("div");
    ctverD.className = "ctverD";
    for (let l = 0; l < 5; l++) {
        let ctverP = document.createElement("div");
        ctverP.className = "square";
        ctverP.id = cPoc;
        cPoc++;
        ctverD.appendChild(ctverP)
    }
    let nameP = document.createElement("h2");
    let numberP = document.createElement("h3");
    let imgP = document.createElement("img");
    let butK = document.createElement("div");
    butK.className = "butKom";
    butK.id = butComentCount;
    butComentCount++;
    imgP.className = "img_d";
    nameP.innerText = poleItemu[i + plusMinus].name;
    numberP.innerText = poleItemu[i + plusMinus].number;
    imgP.src = poleItemu[i + plusMinus].source;

    div.appendChild(ctverD);
    div.appendChild(nameP);
    div.appendChild(numberP);
    div.appendChild(butK);
    container.appendChild(div);
    container.appendChild(imgP);
    document.getElementById("d1").appendChild(container);
    addEventSquare();
}
let sortButHigher = document.getElementById("but_Higher");

let sortButLower = document.getElementById("but_Lower");

sortButHigher.addEventListener("click", function () {
    let res = poleItemu.sort(function (a, b) { return b.score - a.score })
    alert(res[0].score);
    let containerDiv = document.getElementById("d1");
    for (let f = containerDiv.children.length - 1; f > 0; f--) {
        if (containerDiv.children[f].className !== "borderBut") {
            containerDiv.removeChild(containerDiv.children[f]);
        }
    }
    cPoc = 6;
    for (let s = 0; s < plusMinus + 3; s++) {
        cPoc += 5;
        let container = document.createElement("div");
        container.className = "d2";
        let ctverD = document.createElement("div");
        let div = document.createElement("div");
        ctverD.className = "ctverD";
        for (let l = 0; l < 5; l++) {
            let ctverP = document.createElement("div");
            ctverP.className = "square";
            let iD = res[s].order.toString() + (l+1).toString();
            ctverP.id = iD;
            cPoc++;
            ctverD.appendChild(ctverP)
        }
        let nameP = document.createElement("h2");
        let numberP = document.createElement("h3");
        let imgP = document.createElement("img");
        let butK = document.createElement("div");
        butK.className = "butKom";
        butK.id = butComentCount;
        butComentCount++;
        imgP.className = "img_d";
        nameP.innerText = res[s].name;
        numberP.innerText = res[s].number;
        imgP.src = res[s].source;

        div.appendChild(ctverD);
        div.appendChild(nameP);
        div.appendChild(numberP);
        div.appendChild(butK);
        container.appendChild(div);
        container.appendChild(imgP);
        document.getElementById("d1").appendChild(container);
        if (plusMinus == poleItemu.length - 3) {
            butNext.style.display = "none";

        }
        addEventSquare();


    }
    let squareDivs = document.getElementsByClassName("ctverD");
    for (let j = 0; j < containerDiv.children.length; j++) {
        if (squareDivs[j] != undefined)
            {
                let iD = squareDivs[j].id;
                for(let s=poleItemu[parseInt(iD[0])]; s>0 ; s--)
                    {
                        let nextID = iD[0].toString() + s.toString();
                        document.getElementById(nextID).style,backgroundColor = "yellow";
                    }
            }
        


    }




})

butNext.addEventListener("click", nextThree)

function nextThree() {

    if (plusMinus != poleItemu.length - 3) {
        plusMinus += 3;

        for (let i = 0; i < 3; i++) {
            cPoc += 5;
            let container = document.createElement("div");
            container.className = "d2";
            let ctverD = document.createElement("div");
            let div = document.createElement("div");
            ctverD.className = "ctverD";
            for (let l = 0; l < 5; l++) {
                let ctverP = document.createElement("div");
                ctverP.className = "square";
                ctverP.id = cPoc;
                cPoc++;
                ctverD.appendChild(ctverP)
            }
            let nameP = document.createElement("h2");
            let numberP = document.createElement("h3");
            let imgP = document.createElement("img");
            let butK = document.createElement("div");
            butK.className = "butKom";
            butK.id = butComentCount;
            butComentCount++;
            imgP.className = "img_d";
            nameP.innerText = poleItemu[i + plusMinus].name;
            numberP.innerText = poleItemu[i + plusMinus].number;
            imgP.src = poleItemu[i + plusMinus].source;

            div.appendChild(ctverD);
            div.appendChild(nameP);
            div.appendChild(numberP);
            div.appendChild(butK);
            container.appendChild(div);
            container.appendChild(imgP);
            document.getElementById("d1").appendChild(container);
            if (plusMinus == poleItemu.length - 3) {
                butNext.style.display = "none";

            }
            addEventSquare();


        }

        let komenty = document.getElementsByClassName("butKom");

        for (let k = 0; k < komenty.length; k++) {
            (function (index) {
                komenty[index].addEventListener("click", function () {
                    otevZavKoment(index);
                });
            })(k);
        }

    }
    addEventSquare();


}

function addEventSquare() {
    let ctverH = document.getElementsByClassName("square");
    for (let i = 0; i < ctverH.length; i++) {
        const element = ctverH[i];
        let j = element.id;




        function clickHandler() {
            if (poleItemu[j[0] - 1].score == "0") {
                count++;
                for (let s = j[1]; s > 0; s--) {
                    document.getElementById(j - s + 1).style.backgroundColor = "yellow";
                }

                poleItemu[j[0] - 1].score = j[1];
                alert("Hodnotíte item " + poleItemu[j[0] - 1].name + " " + poleItemu[j[0] - 1].score + "/5!");
                celkHodnoceni(j[1], count);
            }

        }




        element.addEventListener("click", clickHandler);

    }
}



let ch = document.getElementById("cH");

function celkHodnoceni(Hod, count) {
    let p = parseInt(Hod);
    finalScore += p;
    cH = (finalScore / (count * 5)) * 100;
    ch.innerText = Math.round(cH);
    ch.innerText += "%";

}


let guinsooComments = [
    { name: "Vayne", comment: "Není to to co bývalo :(", picture: "https://p1.hiclipart.com/preview/340/384/897/chinese-vindicator-vayne-render-png-clipart-thumbnail.jpg", scoring: 3 },
    { name: "Jax", comment: "Yees, I like that", picture: "https://thumbnail.imgbin.com/24/18/7/imgbin-north-america-league-of-legends-championship-series-riot-games-video-game-league-of-legends-cgjUHJg6bg0YhpLVNXA7CbTkB_t.jpg", scoring: 5 },
    { name: "Twitch", comment: "It's me hehehe", picture: "https://banner2.cleanpng.com/20180822/ovh/kisspng-league-of-legends-twitch-tv-video-games-riot-games-twitch-amp-apos-s-not-so-subtle-hole-in-the-wall-5b7e223c530876.2169121115349929563401.jpg", scoring: 4 }
]
let runaanComments = [
    { name: "Zeri", comment: "Bombastický item", picture: "https://static.wikia.nocookie.net/leagueoflegends/images/6/6c/Zeri_Render.png/revision/latest?cb=20220107223713", scoring: 5 },
    { name: "Aphelios", comment: "*Hlasité dýchání*", picture: "https://image.pngaaa.com/852/4889852-middle.png", scoring: 4 }
]
let navoriComments = [
    { name: "Ezreal", comment: "Nejenže z toho odstranili AD, ale ještě přejmenovali? No to je ******", picture: "https://w7.pngwing.com/pngs/791/358/png-transparent-ezreal-thumbnail.png", scoring: 1 }
]

let yuntalComments = [
    { name: "Draven", comment: "Moje pasivka je zpět hell yeah. Vítejte v lize Dravena!", picture: "https://toppng.com/uploads/preview/draven-lol-png-league-of-legends-draven-render-11562867154b5ijfr5nrv.png", scoring: 5 },
    { name: "Jhin", comment: "It is ART to kill someone with this", picture: "https://i.pinimg.com/originals/2d/bc/80/2dbc8054387a5c8c62c5861ab61fb86e.png", scoring: 5 }
]

let collectorComment = [
    { name: "Smolder", comment: "Pořád stejný, pořád dobrý!", picture: "https://theriotmmo.com/wp-content/uploads/2024/01/league-of-legends-smolder.webp", scoring: 4 }
]
let terminusComment = [
    { name: "Kalista", comment: "Bráško jsem tak tanky s tímhle itemem", picture: "https://static.wikia.nocookie.net/leagueoflegends/images/4/4b/Kalista_Render.png/revision/latest?cb=20200514022551", scoring: 4 },
    { name: "Trundle", comment: "Bonk!", picture: "https://www.pngitem.com/pimgs/m/345-3455592_league-of-legends-trundle-png-lol-trundle-skins.png", scoring: 3 }

]
let phantomComments = [
    { name: "Tristana", comment: "Holy, 60% AS? No to je jeba :o!", picture: "https://purepng.com/public/uploads/large/purepng.com-rocketeer-tristanasplashartchampionleague-of-legendsskintristana-331519930527ud9fd.png", scoring: 4 }
]
let staticComments = [
    { name: "vayne", comment: "Dobrý wave clear, levný, ale pořád lehce ******!", picture: "https://p1.hiclipart.com/preview/340/384/897/chinese-vindicator-vayne-render-png-clipart-thumbnail.jpg", scoring: 1 }
]
let firecanonComments = [
    { name: "Jhin", comment: "MASTERPIECE!", picture: "https://i.pinimg.com/originals/2d/bc/80/2dbc8054387a5c8c62c5861ab61fb86e.png", scoring: 5 }
]

let komenty = document.getElementsByClassName("butKom");

for (let k = 0; k < komenty.length; k++) {
    (function (index) {
        komenty[index].addEventListener("click", function () {
            otevZavKoment(index);
        });
    })(k);
}

function otevZavKoment(index) {
    let pop2 = document.getElementById("popW");

    pop2.style.display = "block";
    Coments(index);

}

function Coments(kom) {
    switch (kom) {

        case 0:
            {
                writeComments(guinsooComments);
            } break;

        case 1:
            {
                writeComments(navoriComments);
            } break;

        case 2:
            {
                writeComments(yuntalComments);
            } break;

        case 3:
            {
                writeComments(collectorComment);
            } break;

        case 4:
            {
                writeComments(terminusComment);
            } break;

        case 5:
            {
                writeComments(staticComments);
            } break;

        case 6:
            {
                writeComments(firecanonComments);
            } break;

        case 7:
            {
                writeComments(runaanComments);
            } break;

        case 8:
            {
                writeComments(phantomComments);
            } break;



    }


}
function writeComments(comments) {
    clearComments();
    let popUp = document.getElementById("popW");
    comments.forEach(comment => {
        let commentDiv = document.createElement("div");
        commentDiv.className = "comment";

        let starDiv = document.createElement("div");
        starDiv.className = "starDiv";
        for (let s = 0; s < parseInt(comment.scoring); s++) {
            let star = document.createElement("img");
            star.className = "star";
            star.src = "hvezda.png";
            starDiv.appendChild(star);
        }

        let picture = document.createElement("img");
        picture.src = comment.picture;
        picture.className = "picture";

        let name = document.createElement("h2");
        name.innerText = comment.name;
        name.className = "nameComment";
        let commentText = document.createElement("p");
        commentText.innerText = "'" + comment.comment + "'";
        commentText.className = "commentText";
        commentDiv.appendChild(name);
        commentDiv.appendChild(starDiv);
        commentDiv.appendChild(picture);
        commentDiv.appendChild(commentText);
        popUp.appendChild(commentDiv);
        popUp.style.display = "flex";
        popUp.style.flexDirection = "column";
    });
}

function clearComments() {
    let popUp = document.getElementById("popW");
    while (popUp.firstChild) {
        popUp.removeChild(popUp.firstChild);
    }
}
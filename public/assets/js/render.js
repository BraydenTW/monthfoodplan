var month = jsonData[currentMonth].month;
for (let iOut = 0; iOut < 35; iOut++) { // Displays items
    let relDay = "";
    relDay = indexToDay(iOut);
    for (let i = 0; i < month[iOut].day.food.split(",").length; i++) { // Loops through each day in JSON and renders HTML
        if (month[iOut].day.food.split(",")[i] === "" || month[iOut].day.food.split(",")[i] === null) {
            continue;
        } else {

            // Creates HTML elements and sets values and attributes
            let div = document.createElement("DIV");
            let title = document.createElement("SPAN");
            let node = document.createElement("LI");
            let star = document.createElement("I");
            let link = document.createElement("I");
            title.appendChild(document.createTextNode(month[iOut].day.food.split(",")[i]));
            node.appendChild(document.createTextNode(month[iOut].day.food.split(",")[i]));
            link.setAttribute("class", "fas fa-link");
            link.setAttribute("style", "color: black");
            if (favs.favorites != null && favs.favorites.split(",").includes(node.textContent)) {
                star.setAttribute("class", "fas fa-star");
                div.appendChild(node);
                div.appendChild(star);
                document.querySelector("." + relDay + " ul").appendChild(div);
            } else {
                star.setAttribute("class", "far fa-star");
                div.appendChild(node);
                div.appendChild(star);
                document.querySelector("." + relDay + " ul").appendChild(div);
            }
            let finLink = document.createElement("A");
            finLink.setAttribute("href", month[iOut].day.link.split(",")[month[iOut].day.food.split(",").indexOf(node.textContent)]);

            // Appends the HTML elements to the day item
            finLink.appendChild(link);
            div.appendChild(title);
            div.appendChild(star);
            div.appendChild(finLink);
            div.appendChild(node);
            document.querySelector("." + relDay + " ul").appendChild(div);

            // Sets event listeners to wanted item
            star.addEventListener("click", e => {
                starEventListener(div, star);
            });
            node.addEventListener("click", e => {
                nodeEventListener(div, iOut);
            });
            div.addEventListener("mouseover", e => {
                title.style = "display: block; opacity: 1;";
            });
            div.addEventListener("mouseout", e => {
                title.style = "display: none; opacity: 0;";
            });
        }
    }   
}



for (let i = 1; i < favs.favorites.split(",").length; i++) { // Renders using the favorites data
    if (favs.favorites.split(",")[i] === null || favs.favorites.split(",")[i] === "") {
        continue;
    } else {

        // Select Menu Favorites
        let opt1 = document.createElement("OPTION");
        opt1.appendChild(document.createTextNode(favs.favorites.split(",")[i]));
        mealSelectInput.appendChild(opt1);

        // Favorites Menu Bottom
        let fav = document.createElement("LI");
        fav.appendChild(document.createTextNode(favs.favorites.split(",")[i]));
        fav.addEventListener("click", e => {
            document.getElementById("editFav").addEventListener("click", e => {
                
                let selectText = fav.textContent;
                let textLink = linkEditInput.value;
                document.querySelectorAll(".day li").forEach(item => {
                    if (selectText === item.textContent) {
                        item.nextElementSibling.setAttribute("href", textLink);
                        let day = item.parentElement.parentElement.nextElementSibling.id;
                        let index = dayToIndex(day);
                        let foodArray = month[index].day.food.split(",");
                        let linkArray = month[index].day.food.split(",");
                        let arrayIndex = foodArray.indexOf(item.textContent);
                        linkArray[arrayIndex] = textLink;
                        month[index].day.link = linkArray.toString();
                    }
                });
                decideModal(".edit-modal", "none");

            });
            document.getElementById("removeFav").addEventListener("click", e => {
                let tempFavList = favs.favorites.split(",");
                tempFavList.splice(tempFavList.indexOf(fav.textContent), 1);
                favs.favorites = tempFavList.toString();
                fav.remove();
                decideModal(".edit-modal", "none");
            });
            decideModal(".edit-modal", "block");
        });
        favOutput.firstElementChild.appendChild(fav);
    }
}



document.querySelectorAll("#favOutput ul li").forEach((item) => {  // Makes all favorite links the same
    let selectText = item.textContent;
    let gotFirst = true;
    let textLink = "";
    document.querySelectorAll(".day li").forEach(item2 => {
        if (gotFirst && selectText === item2.textContent) {
            textLink = item2.previousElementSibling.getAttribute("href");
            gotFirst = false;
        } else if (!gotFirst && selectText === item2.textContent) {
            item2.previousElementSibling.setAttribute("href", textLink);
        }
    });
});

document.querySelectorAll(".day ul").forEach(item => { // Shows are doesn't show arrows
    if (item.childElementCount > 4) {
        item.previousElementSibling.style = "display: block;";
    } else {
        item.previousElementSibling.style = "display: none;";
    }
});
document.querySelectorAll(".day a").forEach((item, index) => { // Sets all A elements with a target set to a new page when clicked
    item.setAttribute("target", "_blank");
});
document.querySelectorAll(".move-icons").forEach((item, index) => { // Moves the day list up and down
    let navPosition = 0;
    item.firstElementChild.addEventListener("click", () => { // Moves down 
        if (navPosition < 0) {
            navPosition += 30;
            console.log(navPosition);
            document.querySelectorAll(".day ul")[index].style = "margin-top: " + navPosition + "px;";
        }
    });
    item.lastElementChild.addEventListener("click", () => { // Moves up
        if (navPosition * -1 != document.querySelectorAll(".day ul")[index].childElementCount * 30 - 120) {
            navPosition -= 30;
            console.log(navPosition);
            document.querySelectorAll(".day ul")[index].style = "margin-top: " + navPosition + "px;";
        }
    });
});
if (localStorage.getItem("month") === null) { // If month not set, set it to 1
    localStorage.setItem("month", "1");
}
var date = new Date();
if (currentMonth === "1") { // Sets day schedule based off currentMonth
    firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
} else {
    firstDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    lastDay = new Date(date.getFullYear(), date.getMonth() + 2, 0);
}
var dayName = days[firstDay.getDay()];
var numDay = 1;
for (let i = days.indexOf(days[firstDay.getDay()]); i < 35; i++) { // Renders day number
    if (numDay <= lastDay.getDate()) {
        document.querySelectorAll(".day-title")[i].textContent = numDay.toString();
        numDay++;
    }
}
if (cMonth1 != info.month1) { // If current month changes sets 2nd month to the default date and transfers other to 1st month
    jsonData[1].month = jsonData[2].month;
    jsonData[2].month = defaultMonthJson;
    info.month1 = cMonth1;
    info.month2 = cMonth2;
    var stringedObj = JSON.stringify(jsonData);
    window.location.href = "http://localhost:5500/save.php?data=" + stringedObj;
}
info.month1 = cMonth1;
info.month2 = cMonth2;

document.querySelectorAll(".day-title").forEach((item) => { // Sets blank days with blank class
    if (item.textContent === "0") {
        let tempClass = item.parentElement.getAttribute("class");
        item.parentElement.setAttribute("class", tempClass + " day-off");
        item.parentElement.innerHTML = "";
    }
});
// Mobile mode
if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
    var isMobile = true;
}
if (isMobile) {
    document.querySelectorAll(".day button").forEach(item => {
        item.style.bottom = "15px";
    });
}
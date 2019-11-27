function removeStar(div) {
    document.querySelectorAll(".day li").forEach((item, index) => {
        if (div.firstElementChild.textContent === item.textContent) {
            item.nextElementSibling.nextElementSibling.removeAttribute("class");
            item.nextElementSibling.nextElementSibling.setAttribute("class", "far fa-star");
            document.querySelectorAll("#favOutput li").forEach((item, index) => {
                if (item.textContent === div.firstElementChild.textContent) {
                    item.parentElement.remove();
                }
            });
        }
    });
}
function addFavListItem(div) {
    let fav = document.createElement("LI");
    fav.appendChild(document.createTextNode(div.firstElementChild.textContent));
    fav.addEventListener("click", e => {
        decideModal(".edit-modal", "block");
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
            fav.remove();
            removeStar(div);
            decideModal(".edit-modal", "none");
        });
    });
    favOutput.appendChild(fav);
}

function starEventListener (div, star){
    if (star.getAttribute("class") === "far fa-star") { // Turn On
        let favArray = favs.favorites;
        favArray +=  "," + div.firstElementChild.textContent + ",";
        favs.favorites = favArray;
        var opt1 = document.createElement("OPTION");
        opt1.appendChild(document.createTextNode(div.firstElementChild.textContent));
        mealSelectInput.appendChild(opt1);
        star.setAttribute("class", "fas fa-star");
        if (favArray.split(",").includes(div.firstElementChild.textContent)) {
            star.setAttribute("class", "fas fa-star");
        } else {
            star.setAttribute("class", "far fa-star");
        }
        document.querySelectorAll(".day li").forEach(item => {
            if (div.firstElementChild.textContent === item.textContent) {
                item.previousElementSibling.previousElementSibling.removeAttribute("class");
                item.previousElementSibling.previousElementSibling.setAttribute("class", "fas fa-star");
                if (document.querySelectorAll("#favOutput li").length === 0) {
                    addFavListItem(div);
                } else {
                    document.querySelectorAll("#favOutput li").forEach((item, index) => {
                        if (item.textContent != div.firstElementChild.textContent) {
                            addFavListItem(div);
                        }
                    });
                }
                
            }
            
        });
    } else if (star.getAttribute("class") === "fas fa-star") { // Turn Off
        removeStar(div);
        let tempFavList = favs.favorites.split(",");
        let removeIndex = tempFavList.indexOf(div.firstElementChild.textContent);
        tempFavList.splice(removeIndex, 1);
        let newList = tempFavList.toString();
        favs.favorites = newList;
    }
}
function nodeEventListener(div, index) {
    let removeDayIndex = div.firstElementChild.textContent;
    div.remove();
    let tempDayList = month[index].day.food.split(",");
    let tempLinkList = month[index].day.link.split(",");
    tempLinkList.splice(tempDayList.indexOf(removeDayIndex), 1);
    tempDayList.splice(tempDayList.indexOf(removeDayIndex), 1);
    month[index].day.link = tempLinkList.toString();
    month[index].day.food = tempDayList.toString();
    console.log(indexToDay(index));
    if (document.querySelector("." + indexToDay(index) + " ul").childElementCount > 4) {
        document.querySelectorAll(".day")[index].children[1].style = "display: block;";
    } else {
        document.querySelectorAll(".day")[index].children[1].style = "display: none;";
    }
}
document.getElementById("saveButton").addEventListener("click", () => {
    var stringedObj = JSON.stringify(jsonData);
    window.location.href = "http://localhost:5500/save.php?data=" + stringedObj;
});
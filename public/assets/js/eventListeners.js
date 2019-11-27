console.log(jsonData);
var month = jsonData[currentMonth].month;
console.log(month[1]);
function removeStar(div) { // Listener for when turning off star icon
    document.querySelectorAll(".day li").forEach((item, index) => {

        // If matches, removes all attributes that a favorite has
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
function addFavListItem(div) { // Add item to favorites editor

    // Creates elements and sets values
    let fav = document.createElement("LI");
    fav.appendChild(document.createTextNode(div.firstElementChild.textContent));

    // Adds event listener when on click, you can edit the favorite and it's siblings
    fav.addEventListener("click", e => {
        decideModal(".edit-modal", "block");
        document.getElementById("editFav").addEventListener("click", e => { // Edits the favorite link button
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
        document.getElementById("removeFav").addEventListener("click", e => { // Removes the favorite button
            let tempFavList = favs.favorites.split(",");
            tempFavList.splice(tempFavList.indexOf(fav.textContent), 1);
            fav.remove();
            removeStar(div);
            decideModal(".edit-modal", "none");
        });
    });
    favOutput.appendChild(fav);
}

function starEventListener (div, star){ // Star event listener for when clicking on it
    if (star.getAttribute("class") === "far fa-star") { // Turn On

        // Adds favorite to the JSON array and appends it
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

        // Removes it from the list
        removeStar(div);
        let tempFavList = favs.favorites.split(",");
        let removeIndex = tempFavList.indexOf(div.firstElementChild.textContent);
        tempFavList.splice(removeIndex, 1);
        let newList = tempFavList.toString();
        favs.favorites = newList;
    }
}
function nodeEventListener(div, index) { // Removes the food item from list
    let removeDayIndex = div.firstElementChild.textContent;
    div.remove();
    let newIndex = dayToIndex(index);
    let tempDayList = month[newIndex].day.food.split(",");
    let tempLinkList = month[newIndex].day.link.split(",");
    tempLinkList.splice(tempDayList.indexOf(removeDayIndex), 1);
    tempDayList.splice(tempDayList.indexOf(removeDayIndex), 1);
    month[newIndex].day.link = tempLinkList.toString();
    month[newIndex].day.food = tempDayList.toString();
    if (document.querySelector("." + indexToDay(newIndex) + " ul").childElementCount > 4) {
        document.querySelectorAll(".day")[newIndex].children[1].style = "display: block;";
    } else {
        document.querySelectorAll(".day")[newIndex].children[1].style = "display: none;";
    }
}
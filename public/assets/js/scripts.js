var currentDay, newMeal;
var currentMonth = localStorage.getItem("month");
const mealTxtInput = document.getElementById("newMealTxt");
const mealSelectInput = document.getElementById("newMealSelect");
const checkbox = document.getElementById("enableSelect");
const exLink = document.getElementById("exLink");
const favOutput = document.getElementById("favOutput");
const linkEditInput = document.getElementById("newRecipeTxt");
const newItemTxt = document.getElementById("newItemTxt");
const newItemRecipeTxt = document.getElementById("newItemRecipeTxt");
var favs = jsonData[0];
var month = jsonData[currentMonth].month;
const favIndex = 35;
var editFavItem = "";
function removeStar(div) {
    document.querySelectorAll(".day li").forEach((item, index) => {
        if (div.firstElementChild.textContent === item.textContent) {
            item.previousElementSibling.previousElementSibling.removeAttribute("class");
            item.previousElementSibling.previousElementSibling.setAttribute("class", "far fa-star");
            document.querySelectorAll("#favOutput li").forEach((item, index) => {
                if (item.textContent === div.firstElementChild.textContent) {
                    item.parentElement.remove();
                }
            });
        }
    });
}
var dayToIndex = input => {
    let index = 0;
    switch (input) {
        case "sunday1":
            index = 0;
            break;
        case "monday1":
            index = 1;
            break;
        case "tuesday1":
            index = 2;
            break;
        case "wednesday1":
            index = 3;
            break;
        case "thursday1":
            index = 4;
            break;
        case "friday1":
            index = 5;
            break;
        case "saturday1":
            index = 6;
            break;
        case "sunday2":
            index = 7;
            break;
        case "monday2":
            index = 8;
            break;
        case "tuesday2":
            index = 9;
            break;
        case "wednesday2":
            index = 10;
            break;
        case "thursday2":
            index = 11;
            break;
        case "friday2":
            index = 12;
            break;
        case "saturday2":
            index = 13;
            break;
        case "sunday3":
            index = 14;
            break;
        case "monday3":
            index = 15;
            break;
        case "tuesday3":
            index = 16;
            break;
        case "wednesday3":
            index = 17;
            break;
        case "thursday3":
            index = 18;
            break;
        case "friday3":
            index = 19;
            break;
        case "saturday3":
            index = 20;
            break;
        case "sunday4":
            index = 21;
            break;
        case "monday4":
            index = 22;
            break;
        case "tuesday4":
            index = 23;
            break;
        case "wednesday4":
            index = 24;
            break;
        case "thursday4":
            index = 25;
            break;
        case "friday4":
            index = 26;
            break;
        case "saturday4":
            index = 27;
            break;
        case "sunday5":
            index = 28;
            break;
        case "monday5":
            index = 29;
            break;
        case "tuesday5":
            index = 30;
            break;
        case "wednesday5":
            index = 31;
            break;
        case "thursday5":
            index = 32;
            break;
        case "friday5":
            index = 33;
            break;
        case "saturday5":
            index = 34;
            break;
    }
    return index;
}
var indexToDay = input => {
    switch (input) {
        case 0:
            relDay = "sunday1";
            break;
        case 1:
            relDay = "monday1";
            break;
        case 2:
            relDay = "tuesday1";
            break;
        case 3:
            relDay = "wednesday1";
            break;
        case 4:
            relDay = "thursday1";
            break;
        case 5:
            relDay = "friday1";
            break;
        case 6:
            relDay = "saturday1";
            break;
        case 7:
            relDay = "sunday2";
            break;
        case 8:
            relDay = "monday2";
            break;
        case 9:
            relDay = "tuesday2";
            break;
        case 10:
            relDay = "wednesday2";
            break;
        case 11:
            relDay = "thursday2";
            break;
        case 12:
            relDay = "friday2";
            break;
        case 13:
            relDay = "saturday2";
            break;
        case 14:
            relDay = "sunday3";
            break;
        case 15:
            relDay = "monday3";
            break;
        case 16:
            relDay = "tuesday3";
            break;
        case 17:
            relDay = "wednesday3";
            break;
        case 18:
            relDay = "thursday3";
            break;
        case 19:
            relDay = "friday3";
            break;
        case 20:
            relDay = "saturday3";
            break;
        case 21:
            relDay = "sunday4";
            break;
        case 22:
            relDay = "monday4";
            break;
        case 23:
            relDay = "tuesday4";
            break;
        case 24:
            relDay = "wednesday4";
            break;
        case 25:
            relDay = "thursday4";
            break;
        case 26:
            relDay = "friday4";
            break;
        case 27:
            relDay = "saturday4";
            break;
        case 28:
            relDay = "sunday5";
            break;
        case 29:
            relDay = "monday5";
            break;
        case 30:
            relDay = "tuesday5";
            break;
        case 31:
            relDay = "wednesday5";
            break;
        case 32:
            relDay = "thursday5";
            break;
        case 33:
            relDay = "friday5";
            break;
        case 34:
            relDay = "saturday5";
            break;
    }
    return relDay;
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
                    item.previousElementSibling.setAttribute("href", textLink);
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
    favOutput.firstElementChild.appendChild(fav);
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
        var stringedObj = JSON.stringify(jsonData);
        window.location.href = "http://localhost:5500/save.php?data=" + stringedObj;
    }
}
function nodeEventListener(div, index) {
    decideModal(".edit-item-modal", "block");
    newItemTxt.value = "";
    newItemRecipeTxt.value = "";
    document.getElementById("editItemRecipe").addEventListener("click", () => {
        let newName = newItemTxt.value;
        let newLink = newItemRecipeTxt.value;
        let foodArray = month[index].day.food.split(",");
        let linkArray = month[index].day.food.split(",");
        let arrayIndex = foodArray.indexOf(div.firstElementChild.textContent);
        if (newName != "") {
            div.lastElementChild.textContent = newName;
            foodArray[arrayIndex] = newName;
            month[index].day.food = foodArray.toString();
        }
        if (newLink != "") {
            div.children[2].setAttribute("href", newLink);
            linkArray[arrayIndex] = newLink;
            month[index].day.link = linkArray.toString();
        }
        decideModal(".edit-item-modal", "none");
    });
    document.getElementById("removeItem").addEventListener("click", () => {
        let newIndex = index;
        if (isNaN(index)) {
            newIndex = dayToIndex;
        }
        let removeDayIndex = div.firstElementChild.textContent;
        let tempDayList = month[newIndex].day.food.split(",");
        let tempLinkList = month[newIndex].day.link.split(",");
        tempLinkList.splice(tempDayList.indexOf(removeDayIndex), 1);
        tempDayList.splice(tempDayList.indexOf(removeDayIndex), 1);
        month[newIndex].day.link = tempLinkList.toString();
        month[newIndex].day.food = tempDayList.toString();
        div.remove();
        if (document.querySelector("." + indexToDay(newIndex) + " ul").childElementCount > 4) {
            document.querySelectorAll(".day")[newIndex].children[1].style = "display: block;";
        } else {
            document.querySelectorAll(".day")[newIndex].children[1].style = "display: none;";
        }
        decideModal(".edit-item-modal", "none");
    })
}
function makeNodeItemSetup(index, cssPath) {
    
    let div1 = document.createElement("DIV");
    let title1 = document.createElement("SPAN");
    let node1 = document.createElement("LI");
    let link1 = document.createElement("I");
    let star1 = document.createElement("I");
    link1.setAttribute("class", "fas fa-link");
    link1.setAttribute("style", "color: black");
    title1.appendChild(document.createTextNode(month[index].day.food.split(",")[month[index].day.food.split(",").length - 2]));
    node1.appendChild(document.createTextNode(month[index].day.food.split(",")[month[index].day.food.split(",").length - 2]));
    let starTrue = false;
    for (let i = 0; i < mealSelectInput.length; i++) {
        if (mealSelectInput[i].textContent === node1.textContent) {
            starTrue = true;
            break;
        }
    }
    if (starTrue === true) {
        star1.setAttribute("class", "fas fa-star");
    } else {
        star1.setAttribute("class", "far fa-star");
    }
    
    let finLink1 = document.createElement("A");
    
    if (favs.favorites.includes(node1.textContent)) {
        let gotFirst = true;
        let linkText = "";
        document.querySelectorAll(".day li").forEach(item => {
            if (gotFirst && item.textContent === node1.textContent) {
                linkText = item.previousElementSibling.getAttribute("href");
            }
        });
        finLink1.setAttribute("href", linkText);
    } else {
        finLink1.setAttribute("href", month[index].day.link.split(",")[month[index].day.link.split(",").length - 2]);
    }
    finLink1.setAttribute("target", "_blank");
    finLink1.appendChild(link1);
    div1.appendChild(title1);
    div1.appendChild(star1);
    div1.appendChild(finLink1);
    div1.appendChild(node1);
    document.querySelector("." + cssPath + " ul").appendChild(div1);
    star1.addEventListener("click", e => {
        starEventListener(div1, star1);
    });
    node1.addEventListener("click", e => {
        nodeEventListener(div1, cssPath);
    });
    div1.addEventListener("mouseover", e => {
        title1.style = "display: block; opacity: 1;";
    });
    div1.addEventListener("mouseout", e => {
        title1.style = "display: none; opacity: 0;";
    });
    console.log(document.querySelector("." + cssPath + " ul").childElementCount);
    console.log(index);
    if (document.querySelector("." + cssPath + " ul").childElementCount > 4) {
        document.querySelectorAll(".day")[index].children[1].style = "display: block;";
    } else {
        document.querySelectorAll(".day")[index].children[1].style = "display: none;";
    }
}

function publishMeal(day, meal, link) {
    let index = dayToIndex(day);
    month[index].day.food +=  "," + meal + ",";
    month[index].day.link += "," + link + ",";
    let finArray = month[index].day.food.split(",");
    if (document.querySelector("." + day + " ul").children.length != 0) {
        finArray.pop();
        finArray.pop();
        if (finArray.includes(meal)) {
            alert("You cannot have duplicates of a food on the same day.");
            let removeDuplicates = finArray;
            removeDuplicates.pop();
            removeDuplicates.pop();
            month[index].day.food = removeDuplicates.toString();
        } else {
            makeNodeItemSetup(index, day);
        }
    } else {
        makeNodeItemSetup(index, day);
    }
}

function decideModal(name, style) {
    document.querySelector(".edit-item-modal").style.display = "none";
    document.querySelector(".edit-modal").style.display = "none";
    document.querySelector(".day-modal").style.display = "none";
    document.querySelector(name).style.display = style;
    mealSelectInput.value = "";
    mealTxtInput.value = "";
}


document.querySelectorAll(".day button").forEach((item, index) => {
    item.addEventListener("click", () => {
        decideModal(".day-modal", "block");
        currentDay = item.id;
    });
    
});
checkbox.addEventListener("change", () => {
    if (checkbox.checked === true) {
        if (mealSelectInput.childElementCount === 0) {
            alert("To enable favorites, you must have a favorite added.");
            checkbox.checked = false;
        } else {
            mealSelectInput.removeAttribute("disabled");
            mealTxtInput.setAttribute("disabled", true);
        }
        
    } else {
        mealSelectInput.setAttribute("disabled", true);
        mealTxtInput.removeAttribute("disabled");
    }
});
document.getElementById("addMeal").addEventListener("click", () => {
    if (exLink.value.includes(",") || mealTxtInput.value.includes(",")) {
        alert("You can't use commas in the text field.");
    } else if (mealTxtInput.value != "" && mealSelectInput.disabled) {
        newMeal = mealTxtInput.value;
        decideModal(".day-modal", "none");
        publishMeal(currentDay, newMeal, exLink.value);
    } else if (mealTxtInput.disabled && mealSelectInput.value != "") {
        newMeal = mealSelectInput.value;
        decideModal(".day-modal", "none");
        publishMeal(currentDay, newMeal, exLink.value);
    } else {
        decideModal(".day-modal", "none");
        alert("Please fill in a food.");
    }
});

for (let iOut = 0; iOut < 35; iOut++) { // Display items
    let relDay = "";
    relDay = indexToDay(iOut);
    for (let i = 0; i < month[iOut].day.food.split(",").length; i++) {
        if (month[iOut].day.food.split(",")[i] === "" || month[iOut].day.food.split(",")[i] === null) {
            continue;
        } else {
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
            finLink.appendChild(link);
            div.appendChild(title);
            div.appendChild(star);
            div.appendChild(finLink);
            div.appendChild(node);
            document.querySelector("." + relDay + " ul").appendChild(div);

            
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



for (let i = 1; i < favs.favorites.split(",").length; i++) {
    if (favs.favorites.split(",")[i] === null || favs.favorites.split(",")[i] === "") {
        continue;
    } else {

        // Select Menu FAV

        let opt1 = document.createElement("OPTION");
        opt1.appendChild(document.createTextNode(favs.favorites.split(",")[i]));
        mealSelectInput.appendChild(opt1);

        // FAV Menu Bottom

        let fav = document.createElement("LI");
        fav.appendChild(document.createTextNode(favs.favorites.split(",")[i]));
        fav.addEventListener("click", e => {
            document.getElementById("editFav").addEventListener("click", e => {
                
                let selectText = fav.textContent;
                let textLink = linkEditInput.value;
                document.querySelectorAll(".day li").forEach(item => {
                    if (selectText === item.textContent) {
                        item.previousElementSibling.setAttribute("href", textLink);
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



document.querySelectorAll("#favOutput ul li").forEach((item) => {  // FAV Links all the same
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

document.querySelectorAll(".day ul").forEach(item => {
    if (item.childElementCount > 4) {
        item.previousElementSibling.style = "display: block;";
    } else {
        item.previousElementSibling.style = "display: none;";
    }
});
document.querySelectorAll(".day a").forEach((item, index) => {
    item.setAttribute("target", "_blank");
});
document.querySelectorAll(".move-icons").forEach((item, index) => {
    let navPosition = 0;
    item.firstElementChild.addEventListener("click", () => {
        if (navPosition < 0) {
            navPosition += 30;
            console.log(navPosition);
            document.querySelectorAll(".day ul")[index].style = "margin-top: " + navPosition + "px;";
        }
    });
    item.lastElementChild.addEventListener("click", () => {
        if (navPosition * -1 != document.querySelectorAll(".day ul")[index].childElementCount * 30 - 120) {
            navPosition -= 30;
            console.log(navPosition);
            document.querySelectorAll(".day ul")[index].style = "margin-top: " + navPosition + "px;";
        }
        
    });
});
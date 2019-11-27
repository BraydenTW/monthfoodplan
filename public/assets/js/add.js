var month = jsonData[currentMonth].month;
function makeNodeItemSetup(index, cssPath) { // Creates and appends food compenents to day item

    // Creates HTML elements
    let div1 = document.createElement("DIV");
    let title1 = document.createElement("SPAN");
    let node1 = document.createElement("LI");
    let link1 = document.createElement("I");
    let star1 = document.createElement("I");

    // Sets href or text values
    link1.setAttribute("class", "fas fa-link");
    link1.setAttribute("style", "color: black");
    title1.appendChild(document.createTextNode(month[index].day.food.split(",")[month[index].day.food.split(",").length - 2]));
    node1.appendChild(document.createTextNode(month[index].day.food.split(",")[month[index].day.food.split(",").length - 2]));

    // Checks if the meal is a favorite and stars it too
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

    // If a favorite already, the href is set to the parent
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

    // Appends all HTML elements to day item
    finLink1.setAttribute("target", "_blank");
    finLink1.appendChild(link1);
    div1.appendChild(title1);
    div1.appendChild(star1);
    div1.appendChild(finLink1);
    div1.appendChild(node1);
    document.querySelector("." + cssPath + " ul").appendChild(div1);

    // Adds the event listeners to each wanted item
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

    // If the day item's list length is more than 4, the arrows show up
    if (document.querySelector("." + cssPath + " ul").childElementCount > 4) {
        document.querySelectorAll(".day")[index].children[1].style = "display: block;";
    } else {
        document.querySelectorAll(".day")[index].children[1].style = "display: none;";
    }
}
function publishMeal(day, meal, link) { // Responds to food submission and adds data to data.json

    // Gets index of day and changes json data then makes setup
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
function decideModal(name, style) { // Opens or closes the requested modal
    document.querySelector(name).style.display = style;
    mealSelectInput.value = "";
    mealTxtInput.value = "";
}
document.querySelectorAll(".day button").forEach((item, index) => { // When the button is clicked on, the variable currentDay is set
    item.addEventListener("click", () => {
        decideModal(".day-modal", "block");
        currentDay = item.id;
    });
});
checkbox.addEventListener("change", () => { // Enables or disables favorite select
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
document.getElementById("addMeal").addEventListener("click", () => { // Valdiates the meal and link input
    if (exLink.value.includes(",") || mealTxtInput.value.includes(",")) { // Link and food doesn't allow commas
        alert("You can't use commas in the text field.");
    } else if (mealTxtInput.value != "" && mealSelectInput.disabled) { // Checks if using meal text input
        newMeal = mealTxtInput.value;
        decideModal(".day-modal", "none");
        publishMeal(currentDay, newMeal, exLink.value);
    } else if (mealTxtInput.disabled && mealSelectInput.value != "") { // Checks if using meal select input
        newMeal = mealSelectInput.value;
        decideModal(".day-modal", "none");
        publishMeal(currentDay, newMeal, exLink.value);
    } else { // Checks if not filled in any input at all
        decideModal(".day-modal", "none");
        alert("Please fill in a food.");
    }
});
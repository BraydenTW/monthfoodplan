<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Dad's Monthly Food Planner</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./public/assets/css/main.css">
        <link rel="stylesheet" href="./public/assets/fontawesome/css/all.min.css">
    </head>
    <body>
        <div class="top">
            <div class="month-title"></div>
            <button onclick="saveData()"><i class="far fa-save fa-3x"></i></button>
        </div>
        
        <div class="week">
            <div class="head-weekday">
                <div class="title">Sunday</div>
            </div>
            <div class="head-weekday">
                <div class="title">Monday</div>
            </div>
            <div class="head-weekday">
                <div class="title">Tuesday</div>
            </div>
            <div class="head-weekday">
                <div class="title">Wednesday</div>
            </div>
            <div class="head-weekday">
                <div class="title">Thursday</div>
            </div>
            <div class="head-weekday">
                <div class="title">Friday</div>
            </div>
            <div class="head-weekday">
                <div class="title">Saturday</div>
            </div>
        </div>
        <div class="week" id="week">
            <div class="day sunday1">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="sunday1">+</button>
            </div>
            <div class="day monday1">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="monday1">+</button>
            </div>
            <div class="day tuesday1">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="tuesday1">+</button>
            </div>
            <div class="day wednesday1">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="wednesday1">+</button>
            </div>
            <div class="day thursday1">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="thursday1">+</button>
            </div>
            <div class="day friday1">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="friday1">+</button>
            </div>
            <div class="day saturday1">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="saturday1">+</button>
            </div>
        </div>
        <div class="week" id="week">
            <div class="day sunday2">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="sunday2">+</button>
            </div>
            <div class="day monday2">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="monday2">+</button>
            </div>
            <div class="day tuesday2">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="tuesday2">+</button>
            </div>
            <div class="day wednesday2">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="wednesday2">+</button>
            </div>
            <div class="day thursday2">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="thursday2">+</button>
            </div>
            <div class="day friday2">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="friday2">+</button>
            </div>
            <div class="day saturday2">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="saturday2">+</button>
            </div>
        </div>
        <div class="week" id="week">
            <div class="day sunday3">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="sunday3">+</button>
            </div>
            <div class="day monday3">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="monday3">+</button>
            </div>
            <div class="day tuesday3">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="tuesday3">+</button>
            </div>
            <div class="day wednesday3">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="wednesday3">+</button>
            </div>
            <div class="day thursday3">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="thursday3">+</button>
            </div>
            <div class="day friday3">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="friday3">+</button>
            </div>
            <div class="day saturday3">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="saturday3">+</button>
            </div>
        </div>
        <div class="week" id="week">
            <div class="day sunday4">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="sunday4">+</button>
            </div>
            <div class="day monday4">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="monday4">+</button>
            </div>
            <div class="day tuesday4">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="tuesday4">+</button>
            </div>
            <div class="day wednesday4">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="wednesday4">+</button>
            </div>
            <div class="day thursday4">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="thursday4">+</button>
            </div>
            <div class="day friday4">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="friday4">+</button>
            </div>
            <div class="day saturday4">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="saturday4">+</button>
            </div>
        </div>
        <div class="week" id="week">
            <div class="day sunday5">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="sunday5">+</button>
            </div>
            <div class="day monday5">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="monday5">+</button>
            </div>
            <div class="day tuesday5">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="tuesday5">+</button>
            </div>
            <div class="day wednesday5">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="wednesday5">+</button>
            </div>
            <div class="day thursday5">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="thursday5">+</button>
            </div>
            <div class="day friday5">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="friday5">+</button>
            </div>
            <div class="day saturday5">
                <div class="day-title">0</div>
                <div class="move-icons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul>
                </ul>
                <button id="saturday5">+</button>
            </div>
        </div>
        
        <!-- Input Modals -->

        <div class="day-modal">
            <div class="modal-section">
                <h2>Type in a meal ...</h2>
            </div>
            <div class="modal-section">
                <label>Meal Name</label>
                <input name="meal" type="text" id="newMealTxt" autocomplete="off">
            </div>
            <div class="modal-section">
                <h2>... Or select a favorite</h2>
            </div>
            <div class="modal-section">
                <label>Enable favorites</label>
                <input type="checkbox" id="enableSelect">
                <select id="newMealSelect" disabled="true">
                </select>
            </div>
            <div class="modal-section">
                <label>Add an External Link (Leave blank for optional):</label>
                <input type="text" name="link" id="exLink" autocomplete="off">
            </div>
            <div class="modal-section">
                <button name="submit" type="submit" id="addMeal">+ Add</button>
            </div>
        </div>

        <div class="edit-modal">
            <div class="modal-section">
                <h2>Edit it ...</h2>
            </div>
            <div class="modal-section">
                <label>Recipe Link:</label>
                <input type="text" id="newRecipeTxt">
            </div>
            <div class="modal-section">
                <button type="submit" id="editFav">Edit</button>
            </div>
            <div class="modal-section">
                <h2>... Or remove it</h2>
            </div>
            <div class="modal-section">
                <button type="submit" class="remove" id="removeFav">Remove</button>
            </div>
        </div>
        <div class="day-modal"></div>
        <div class="fav-bottom" id="favOutput"><ul></ul></div>
        <?php

            $jsonFile = file_get_contents("./public/assets/js/data.json");
            $jsonData = json_decode($jsonFile, true);

            echo '<script>';
            echo 'var jsonData = ' . json_encode($jsonData) . ';';
            echo '</script>';
        ?>
    
        <script src="./public/assets/js/scripts.js" async defer></script>
        <script>
        
            var info = jsonData[0];
            function saveData() {
                var stringedObj = JSON.stringify(jsonData);
                window.location.href = "http://localhost:5500/save.php?data=" + stringedObj;
            }
            var currentMonth = localStorage.getItem("month");
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var d = new Date();
            var monthName = months[(d.getMonth() - 1) + parseInt(currentMonth, 10)];
            document.querySelector(".month-title").innerHTML = "<i class='fas fa-arrow-left' id='backMonth'></i><span class='month-text'>" + monthName + "</span><i class='fas fa-arrow-right' id='forwardMonth'></i>";
            var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            let numDay = 1;
            let date = new Date();
            let firstDay, lastDay;
            if (currentMonth === "1") {
                firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
                lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            } else {
                firstDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
                lastDay = new Date(date.getFullYear(), date.getMonth() + 2, 0);
            }
            var dayName = days[firstDay.getDay()];
            
            for (let i = days.indexOf(days[firstDay.getDay()]); i < 35; i++) {
                if (numDay <= lastDay.getDate()) {
                    document.querySelectorAll(".day-title")[i].textContent = numDay.toString();
                    numDay++;
                }
            }
            var cMonth1 = months[d.getMonth()];
            var cMonth2 = months[d.getMonth() + 1];

            const defaultMonthJson = jsonData[3].month;

            if (cMonth1 != info.month1) {
                jsonData[1].month = jsonData[2].month;
                jsonData[2].month = defaultMonthJson;
                info.month1 = cMonth1;
                info.month2 = cMonth2;
                saveData();
            }

            info.month1 = cMonth1;
            info.month2 = cMonth2;
        </script>

    </body>
</html>
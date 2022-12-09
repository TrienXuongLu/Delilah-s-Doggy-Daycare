/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dayCounter = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

document.getElementsByClassName("clicked");
var blueHoverLi = document.querySelectorAll("li");
for (let i = 0; i < blueHoverLi.length; i++) {
    blueHoverLi[i].addEventListener(("click"), function() {
        this.classList.toggle('clicked');

        if (this.classList.contains('clicked')) {
            dayCounter ++;
        } else if (!this.classList.contains('clicked')) {
            dayCounter --;
        }

        if (halfDay.classList.contains('clicked')) {
            calculation.innerHTML = parseInt(halfDayPrice * dayCounter);
        } else if (fullDay.classList.contains('clicked')) {
            calculation.innerHTML = parseInt(fullDayPrice * dayCounter);
        }
    }   
);}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.getElementById("clear-button").addEventListener("click", clearBtn);
function clearBtn() {
    blueHoverLi[0].classList.remove("clicked");
    blueHoverLi[1].classList.remove("clicked");
    blueHoverLi[2].classList.remove("clicked");
    blueHoverLi[3].classList.remove("clicked");
    blueHoverLi[4].classList.remove("clicked");
    dayCounter = 0;
    calculation.innerHTML = 0;
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var halfDayPrice = 20;
var halfDay = document.getElementById("half");
halfDay.addEventListener("click", halfDayRate);
function halfDayRate() {
    this.classList.toggle("clicked");
    fullDay.classList.remove("clicked");
    calculation.innerHTML = parseInt(halfDayPrice * dayCounter);
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

var fullDayPrice = 35;
var fullDay = document.getElementById("full");
fullDay.addEventListener("click", fullDayRate);
function fullDayRate() {
    this.classList.toggle("clicked");
    halfDay.classList.remove("clicked");
    calculation.innerHTML = parseInt(fullDayPrice * dayCounter);
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

var calculation = document.getElementById("calculated-cost");


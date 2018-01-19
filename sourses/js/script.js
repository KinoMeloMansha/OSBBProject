/*global $ */

// Get Date
function getTopDate() {
    "use strict";
    
    Date.prototype.getMonthName = function () {
        var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return monthName[this.getMonth()];
    };
    
    var topDate = new Date();
    
    $('#nav-date').append(
        '<span class="date-day">' + topDate.getDate() + '</span>' + '<span class="date-meta">' +
            '<span class="date-month">' + topDate.getMonthName() + '</span>' + '<br>' +
            '<span class="date-year">' + topDate.getFullYear() + '</span>' + '</span>'
    );
}

// Document ready function
$(document).ready(function () {
    "use strict";
    
    getTopDate();
    $('.carousel').carousel({
    interval: 3000,
    pause: "true"
    });
});
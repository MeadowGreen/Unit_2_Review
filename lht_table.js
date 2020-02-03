"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Meadow Green
   Date:   2-3-20

	
*/
//created variable for the starting date
var thisDay = new Date("August 30, 2018");
//created the table in the html
var tableHTML = "<table id='eventTable'><caption>Upcoming Events</caption><tr><th>Date</th><th>Event</th><th>Price</th></tr>";
//created the variable that defines when the calendar stops
var endDate = new Date(thisDay.getTime()+ 14 * 24 * 60 *60 * 1000);
//puts each thing in the right spot as the index for days continues
for(var i = 0; i <eventDates.length; i++){
    var eventDate = new Date(eventDates[i]);
    var eventDay = eventDate.toDateString();
    var eventTime = eventDate.toLocaleTimeString();
    if(thisDay <= eventDate && eventDate <= endDate){
//added the variables directly into the table 
        tableHTML += "<tr> <td>" + eventDate + "@" + eventTime + "</td> <td>" + eventDescriptions[i] + "</td> <td>" + eventPrices[i] + "</td> </tr>";
    }
}

tableHTML += "</table";
//made the table go into the html
document.getElementById("eventList").innerHTML = tableHTML;
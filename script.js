var today = new Date();
var diffDays = 0;
var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();

$("#todayDate").html(m_names[curr_month] + ". " + curr_date + ", " + curr_year);
$("#datepicker").datepicker();

function daysLeft() {
	var a = $("#datepicker").datepicker('getDate').getTime();
	// solutions for 9, 10, 11 and 12 go here:

	var b = today.getTime();
	var c = a - b;
	var d = c/(1000*60*60*24);
  var e = Math.floor(d);
	return e;
}


$("#datepicker").on("change", function(a){
	daysLeft();
	console.log(a);
});





// 12. There is still a problem. We need the result to be an integer.
// Here is a link to the Math object:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// I bet you can figure out which method to call on your difference in days variable.
// It's one of the ones listed under Methods in the left column of the page linked above.

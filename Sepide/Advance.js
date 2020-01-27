
function Advance1(){
	
	var minutsValue = document.getElementById("minutesNumber").value;
	var result=GetHoursAndMinutes(minutsValue);
	document.getElementById("Advance1Result").innerHTML = result;
}
function GetHoursAndMinutes(m) {
	var num = m;
	var hours = (num / 60);
	var roundhours = Math.floor(hours);
	var minutes = (hours - roundhours) * 60;
	var roundminutes = Math.round(minutes);
	return num + " minutes = " + roundhours + " hour(s) and " + roundminutes + " minute(s).";
}
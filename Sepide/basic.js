function onload_basic(){
	set_P();
}
function basic1(){

	var childrens = document.getElementById("number_childrens").value;
	var partnersname = document.getElementById("partners_name").value;	
	var jobtitle = document.getElementById("job_title").value;
	var loc = document.getElementById("location").value;
	crystalGazer(childrens,partnersname,jobtitle,loc);
}
function crystalGazer(number_childrens , partners_name, job_title, geoloc){

	var result = "number of children: "+ number_childrens +"<br>partner's name" +partners_name+ "<br>geographic location :" + geoloc + "<br>job title :"+  job_title;
	document.getElementById("result").innerHTML = result;
}
function basic2(){
	
	 	var currentDate = new Date();
	 	var currentYear = currentDate.getFullYear();
	 	var birthYear = document.getElementById("birth_year").value;
	 	ageCalculator(birthYear,currentYear);	
}
function ageCalculator(birth_year,current_year){
		
	var age = Number(current_year) - Number(birth_year);
	console.log(age);
	
	var result = "You are either " + age + " or " + ++age;
	document.getElementById("birthResult").innerHTML = result;	

}
function basic4(){

	var degreesValue = document.getElementById("degreesValue").value;
	degreesToRadiusConvertor(degreesValue);
}
function degreesToRadiusConvertor(degrees_Value){
	
	var result = "radians is:" + Number(degrees_Value) * ( Math.PI / 180);
	document.getElementById("basic4Result").innerHTML = result;

}
function basic5(){

	var widthNum = document.getElementById("widthNum").value;
	var heightNum = document.getElementById("heightNum").value;
	var depthNum = document.getElementById("depthNum").value;
	var result =calculateAreaAndVolume(widthNum,heightNum,depthNum);
	document.getElementById("basic5Result").innerHTML = result;

}
function degreesToRadiusConvertor(width_Num,height_Num,depth_Num){
	 
	var area = "The area of the box is: " + Number(width_Num) * Number(height_Num);
	var volume = "The volume of the box is: " + Number(width_Num) * Number(height_Num) * Number(depth_Num);
	var result = area + <br> + volume;
	document.getElementById("basic4Result").innerHTML = result;

}
// Basic 6
function set_P(){
	try{
		var person = prompts("Please enter your name", "Harry Potter");
		document.getElementById("message").innerHTML = "Hello " + person + "! How are you today?";
    }
    catch(e){
    	document.getElementById("showMessage").innerHTML = e;
    }
}
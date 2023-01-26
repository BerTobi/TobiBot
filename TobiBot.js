/* Version 0.124 */

var btn = document.createElement("startButton");        // Create a <button> element
btn.id ='startButton';
var t = document.createTextNode("Start");       // Create a text node
btn.appendChild(t);                                // Append the text to <button>
document.body.appendChild(btn);
document.getElementById("startButton").onclick = function() {start()} ;

var grandmaGain = 4
var cps = Cursors * 0.2 + Grandmas * (grandmaGain / 5) + Factories * 4 + Mines * 10 + Shipments * 20 + Labs * 100 + Portals * 1332.2;
var CBAT = Cookies;
var totalBuildings = 0;
var nextBuilding = "";
var timeL = 0;
var timeM = 0;
var nextMilestone = 1;
var nextOoM = 1;
var totalTime = 0;

start=function() {
	var TobiBotInformation = window.open("", "MsgWindow", "width=600,height=300,addressbar=no, location=no");
	TobiBotInformation.document.write("<h2>TobiBot Information Window</h2>"+"CpS: "+"<span id="+"showCpS"+">0</span><br />");
	TobiBotInformation.document.write("Total time played: "+"<span id="+"totalTime"+">0</span><br />");
	TobiBotInformation.document.write("Cookies baked all time: "+"<span id="+"CBAT"+">0</span><br />");
	TobiBotInformation.document.write("Total Buildings: "+"<span id="+"tB"+">0</span><br />");
	TobiBotInformation.document.write("Next Building: "+"<span id="+"nB"+"></span><br />");
	TobiBotInformation.document.write("Time left for next Buy: "+"<span id="+"tL"+"></span><br />");
	TobiBotInformation.document.write("Time left for next OoM (<span id="+"nextOoM"+"></span>"+") CBAT: "+"<span id="+"timeOoM"+"></span><br />");
	TobiBotInformation.document.write("Time left for next Milestone (<span id="+"nextMilestone"+"></span>"+") CBAT: "+"<span id="+"timeMilestone"+"></span><br />");
	TobiBotInformation.document.write("Time left for Googol CBAT: "+"<span id="+"timeGoogol"+"></span><br />");
	TobiBotInformation.document.write("<br /><br /><br /><footer>Version 0.124 Beta 2</footer>");
	TobiBotInformation.document.title = "TobiBot Information Window";
	var cursorROI = Buyables['Cursor'].price/0.2;
	var grandmaROI = Buyables['Grandma'].price/(grandmaGain/5);
	var factoryROI = Buyables['Factory'].price/4;
	var mineROI = Buyables['Mine'].price/10;
	var shipmentROI = Buyables['Shipment'].price/20;
	var labROI = Buyables['Alchemy lab'].price/100;
	var portalROI = Buyables['Portal'].price/1332.2;
pretiffyTime=function(a){
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	var days = 0;
	var months = 0;
	var years = 0;
	var millenia = 0;
	if (a < 60) {
		seconds = Math.round(a);
		var time = seconds + " seconds";
	}
	else if (a > 60 && a < 3600) {
		seconds = Math.round(a % 60);
		minutes = Math.floor((a % 3600) / 60);
		var time = minutes + " minutes " + seconds + " seconds";
	}
	else if (a > 3600 && a < 86400) {
		seconds = Math.round(a % 60);
		minutes = Math.floor((a % 3600) / 60);
		hours = Math.floor((a % 86400) / 3600);
		var time = hours + " hours " + minutes + " minutes " + seconds + " seconds";
	}
	else if (a > 86400 && a < 2592000) {
		seconds = Math.round(a % 60);
		minutes = Math.floor((a % 3600) / 60);
		hours = Math.floor((a % 86400) / 3600);
		days = Math.floor(a / 86400);
		var time = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
	}
	else if (a > 2592000 && a < 31104000) {
		seconds = Math.round(a % 60);
		minutes = Math.floor((a % 3600) / 60);
		hours = Math.floor((a % 86400) / 3600);
		days = Math.floor((a % 2592000) / 86400);
		months = Math.floor(a / 2592000);
		var time = months + " months " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
	}
	else if (a > 31104000 && a < 31104000000) {
		seconds = Math.round(a % 60);
		minutes = Math.floor((a % 3600) / 60);
		hours = Math.floor((a % 86400) / 3600);
		days = Math.floor((a % 2592000) / 86400);
		months = Math.floor((a % 31104000) / 2592000);
		years = Math.floor(a / 31104000);
		var time = years.toPrecision(1 + 2) + " years " + months + " months " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
	}
	else {
		millenia = a / 31104000000;
		var time = millenia.toPrecision(1 + 2) + " millenia";
	}
	
	return time;
}
standardNotation = function(number) {
	var prefix;

	if(number == 1000) prefix = "Thousand";
	if(number == 1000000) prefix = "Million";
	if(number == 1000000000) prefix = "Billion";
	if(number == 1000000000000) prefix = "Trillion";
	if(number == 1000000000000000) prefix = "Quadrillion";
	if(number == 1000000000000000000) prefix = "Quintillion";
	if(number == 1000000000000000000000) prefix = "Sextillion";
	if(number == 1000000000000000000000000) prefix = "Septillion";

	return prefix;
}
selectBestROI=function(){
	if (cursorROI<=grandmaROI && cursorROI<=factoryROI && cursorROI<=mineROI  && cursorROI<=shipmentROI  && cursorROI<=labROI  && cursorROI<=portalROI){
		return 'Cursor';
	}
	if (grandmaROI<=cursorROI && grandmaROI<=factoryROI && grandmaROI<=mineROI  && grandmaROI<=shipmentROI  && grandmaROI<=labROI  && grandmaROI<=portalROI){
		return 'Grandma';
	}
	if (factoryROI<=grandmaROI && factoryROI<=cursorROI && factoryROI<=mineROI  && factoryROI<=shipmentROI  && factoryROI<=labROI  && factoryROI<=portalROI){
		return 'Factory';
	}
	if (mineROI<=grandmaROI && mineROI<=factoryROI && mineROI<=cursorROI  && mineROI<=shipmentROI  && mineROI<=labROI  && mineROI<=portalROI){
		return 'Mine';
	}
	if (shipmentROI<=grandmaROI && shipmentROI<=factoryROI && shipmentROI<=mineROI  && shipmentROI<=cursorROI  && shipmentROI<=labROI  && shipmentROI<=portalROI){
		return 'Shipment';
	}
	if (labROI<=grandmaROI && labROI<=factoryROI && labROI<=mineROI  && labROI<=shipmentROI  && labROI<=cursorROI  && labROI<=portalROI){
		return 'Alchemy lab';
	}
	if (portalROI<=grandmaROI && portalROI<=factoryROI && portalROI<=mineROI  && portalROI<=shipmentROI  && portalROI<=labROI  && portalROI<=cursorROI){
		return 'Portal';
	}
}
updateInformationWindow=function(){
			totalTime += 0.3;
			if (Pledge==0)cps = Cursors*0.2 + Grandmas*grandmaGain/5 + Factories*4 + Mines*10 + Shipments*20 + Labs*100 + Portals*1332.2;
			if (Pledge>0)cps = Cursors*(Cursors*2) + Grandmas*grandmaGain/5 + Factories*4 + Mines*10 + Shipments*20 + Labs*100 + Portals*1332.2;
			if (Factories<1) grandmaGain=4;
			else {
			if (Mines<1) grandmaGain=5;
			else {
				if (Shipments<1) grandmaGain=7;
				else{
					if (Labs<1) grandmaGain=10;
					else{
						if (Portals<1) grandmaGain=14;
						else {
						if (Pledge==0) grandmaGain=19;
						else {
							grandmaGain=Math.Ceil(19+(Portals*0.5));
						}
						}
						
					}
				}
			}
			}
			
			CBAT = CBAT + cps/3.33;
			nextBuilding = selectBestROI();
			timeL = pretiffyTime((Buyables[selectBestROI()].price-Cookies)/cps);
			
			totalBuildings = Cursors + Grandmas + Factories + Mines + Shipments + Labs + Portals
			TobiBotInformation.document.getElementById("showCpS").innerHTML = Math.round(cps * 10) / 10;
			TobiBotInformation.document.getElementById("CBAT").innerHTML = Math.round(CBAT*10) / 10;
			TobiBotInformation.document.getElementById("tB").innerHTML = totalBuildings;
			TobiBotInformation.document.getElementById("nB").innerHTML = nextBuilding;
			TobiBotInformation.document.getElementById("tL").innerHTML = timeL;
			TobiBotInformation.document.getElementById("nextOoM").innerHTML = nextOoM.toExponential();
			TobiBotInformation.document.getElementById("nextMilestone").innerHTML = standardNotation(nextMilestone);
			TobiBotInformation.document.getElementById("totalTime").innerHTML = pretiffyTime(totalTime);
			if (CBAT < nextOoM) {
				timeOoM = pretiffyTime(Math.round((nextOoM-CBAT)/cps));
				TobiBotInformation.document.getElementById("timeOoM").innerHTML = timeOoM;				
			}
			else if (CBAT > nextOoM) {
				nextOoM = nextOoM * 10;
			}
			if (CBAT < nextMilestone) {
				timeMilestone = pretiffyTime(Math.round((nextMilestone-CBAT)/cps));
				TobiBotInformation.document.getElementById("timeMilestone").innerHTML = timeMilestone;				
			}
			else if (CBAT > nextMilestone) {
				nextMilestone = nextMilestone * 1000;
			}				
			
			var timeGoogol = Math.round((Math.pow(10, 100) - CBAT) / cps); 
			timeGoogol = pretiffyTime(timeGoogol);
			TobiBotInformation.document.getElementById("timeGoogol").innerHTML = timeGoogol;

			TobiBotInformation.document.title = "TobiBot Information Window";
}
	var autobuy=1;
	this.clickInterval = setInterval(function(){
		// Click the large cookie as fast as possible!
		
		ClickCookie();
		CBAT++;
		selectBestROI();
				if (Cookies>Buyables[selectBestROI()].price){
				Buyables[selectBestROI()].Buy();
				if (Pledge==0)cursorROI=Buyables['Cursor'].price/0.2;
				if (Pledge>0)cursorROI=Buyables['Cursor'].price/(Cursors*(Cursors*2));
				grandmaROI=Buyables['Grandma'].price/(grandmaGain/5);
				factoryROI=Buyables['Factory'].price/4;
				mineROI=Buyables['Mine'].price/12.5;
				shipmentROI=Buyables['Shipment'].price/20;
				labROI=Buyables['Alchemy lab'].price/125;
				portalROI=Buyables['Portal'].price/1332.2;
			new Pop('credits','<span style="color:#f00;">Next building:</span>'+selectBestROI());
			}
		updateInformationWindow();	
	}, 300);
	}
	
stop=function() {
	clearInterval(this.clickInterval);
	autobuy=0;
}
	

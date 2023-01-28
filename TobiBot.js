/* Version 0.125 */

var btn = document.createElement("startButton");        // Create a <button> element
btn.id ='startButton';
var t = document.createTextNode("Start");       // Create a text node
btn.appendChild(t);                                // Append the text to <button>
document.body.appendChild(btn);
document.getElementById("startButton").onclick = function() {start()} ;

var grandmaGain = 4
var cps = Cursors * 0.2 + Grandmas * (grandmaGain / 5) + Factories * 4 + Mines * 10 + Shipments * 20 + Labs * 100 + Portals * 1332.2 + Times * 24691.2;
var CBAT = Cookies;
var totalBuildings = 0;
var nextBuilding = "";
var timeL = 0;
var timeM = 0;
var nextMilestone = 1;
var nextOoM = 1;
var totalTime = 0;
var ROI = 0;
var Eff = 0;
var avgCpsAT = 0;
var avgCps = 0;
var sum = 0;

const cpsLog = [];
var cpsIndex = 0;

start=function() {
	var TobiBotInformation = window.open("", "MsgWindow", "width=600,height=300,addressbar=no, location=no");
	TobiBotInformation.document.write("<h2>TobiBot Information Window</h2>"+"CpS: "+"<span id="+"showCpS"+">0</span><br />");
	TobiBotInformation.document.write("Average CpS (All time): " + "<span id=" + "averageCpSAT" + "></span><br />");
	TobiBotInformation.document.write("Average CpS (Last minute): " + "<span id=" + "averageCpS" + "></span><br />");
	TobiBotInformation.document.write("Total time played: "+"<span id="+"totalTime"+">0</span><br />");
	TobiBotInformation.document.write("Cookies baked all time: "+"<span id="+"CBAT"+">0</span><br />");
	TobiBotInformation.document.write("Total Buildings: "+"<span id="+"tB"+">0</span><br />");
	TobiBotInformation.document.write("Next Building: "+"<span id="+"nB"+"></span><br />");
	TobiBotInformation.document.write("ROI: " + "<span id=" + "ROI" + "></span><br />");
	TobiBotInformation.document.write("Efficiency: " + "<span id=" + "Eff" + "></span><br />");
	TobiBotInformation.document.write("Time left for next Buy: "+"<span id="+"tL"+"></span><br />");
	TobiBotInformation.document.write("Time left for next OoM (<span id="+"nextOoM"+"></span>"+") CBAT: "+"<span id="+"timeOoM"+"></span><br />");
	TobiBotInformation.document.write("Time left for next Milestone (<span id="+"nextMilestone"+"></span>"+") CBAT: "+"<span id="+"timeMilestone"+"></span><br />");
	TobiBotInformation.document.write("Time left for Googol CBAT: "+"<span id="+"timeGoogol"+"></span><br />");
	TobiBotInformation.document.write("<br /><br /><br /><footer>Version 0.125 Alpha</footer>");
	TobiBotInformation.document.title = "TobiBot Information Window";
	var cursorROI = Buyables['Cursor'].price / 0.2;
	var grandmaROI = Buyables['Grandma'].price / (grandmaGain/5);
	var factoryROI = Buyables['Factory'].price / 4;
	var mineROI = Buyables['Mine'].price / 10;
	var shipmentROI = Buyables['Shipment'].price / 20;
	var labROI = Buyables['Alchemy lab'].price / 100;
	var portalROI = Buyables['Portal'].price / 1332.2;
	var timeROI = Buyables['Time machine'].price / 24691.2;

	var cursorEff = Buyables['Cursor'].price / cps + Buyables['Cursor'].price / 0.2;
	var grandmaEff = Buyables['Grandma'].price / cps + Buyables['Grandma'].price / (grandmaGain / 5);
	var factoryEff = Buyables['Factory'].price / cps + Buyables['Factory'].price / 4;
	var mineEff = Buyables['Mine'].price / cps + Buyables['Mine'].price / 10;
	var shipmentEff = Buyables['Shipment'].price / cps + Buyables['Shipment'].price / 20;
	var labEff = Buyables['Alchemy lab'].price / cps + Buyables['Alchemy lab'].price / 100;
	var portalEff = Buyables['Portal'].price / cps + Buyables['Portal'].price / 1332.2;
	var timeEff = Buyables['Time machine'].price / cps + Buyables['Time machine'].price / 24691.2;

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
standardMilestones = function(number) {
	var prefix;

	if(number == Math.pow(10, 3)) prefix = "Thousand";
	if(number == Math.pow(10, 6)) prefix = "Million";
	if(number == Math.pow(10, 9)) prefix = "Billion";
	if(number == Math.pow(10, 12)) prefix = "Trillion";
	if(number == Math.pow(10, 15)) prefix = "Quadrillion";
	if(number == Math.pow(10, 18)) prefix = "Quintillion";
	if(number == Math.pow(10, 21)) prefix = "Sextillion";
	if(number == Math.pow(10, 24)) prefix = "Septillion";

	return prefix;
}

standardNotation = function(number) {
	var prefix = "";

	if(number > Math.pow(10, 3) && number < Math.pow(10, 6)) {
		number = number / Math.pow(10, 3);
		prefix = "Thousand";
	} 
	else if(number > Math.pow(10, 6) && number < Math.pow(10, 9)) {
		number = number / Math.pow(10, 6);
		prefix = "Million";
	} 
	else if(number > Math.pow(10, 9) && number < Math.pow(10, 12)) {
		number = number / Math.pow(10, 9);
		prefix = "Billion";
	}
	else if(number > Math.pow(10, 12) && number < Math.pow(10, 15)) {
		number = number / Math.pow(10, 12);
		prefix = "Trillion";
	}
	else if(number > Math.pow(10, 15) && number < Math.pow(10, 18)) {
		number = number / Math.pow(10, 15);
		prefix = "Quadrillion";
	}
	else if(number > Math.pow(10, 18) && number < Math.pow(10, 21)) {
		number = number / Math.pow(10, 18);
		prefix = "Quintillion";
	}
	else if(number > Math.pow(10, 21) && number < Math.pow(10, 24)) {
		number = number / Math.pow(10, 21);
		prefix = "Sextillion";
	}
	else if(number > Math.pow(10, 24)) {
		number = number / Math.pow(10, 24);
		prefix = "Septillion";
	}


	var notatedNumber = number.toFixed(2) + " " + prefix;
	return notatedNumber;
}

calculateROI=function(){
	if (Pledge==0)cursorROI=Buyables['Cursor'].price / 0.2;
	if (Pledge>0)cursorROI=Buyables['Cursor'].price / (Cursors*2);
	grandmaROI=Buyables['Grandma'].price / (grandmaGain/5);
	factoryROI=Buyables['Factory'].price / 4;
	mineROI=Buyables['Mine'].price / 12.5;
	shipmentROI=Buyables['Shipment'].price / 20;
	labROI=Buyables['Alchemy lab'].price / 125;
	portalROI=Buyables['Portal'].price / 1332.2;
	timeROI = Buyables['Time machine'].price / 24691.2;
}

calculateEff=function(){
	cursorEff = Buyables['Cursor'].price / cps + Buyables['Cursor'].price / 0.2;
	grandmaEff = Buyables['Grandma'].price / cps + Buyables['Grandma'].price / (grandmaGain / 5);
	factoryEff = Buyables['Factory'].price / cps + Buyables['Factory'].price / 4;
	mineEff = Buyables['Mine'].price / cps + Buyables['Mine'].price / 10;
	shipmentEff = Buyables['Shipment'].price / cps + Buyables['Shipment'].price / 20;
	labEff = Buyables['Alchemy lab'].price / cps + Buyables['Alchemy lab'].price / 100;
	portalEff = Buyables['Portal'].price / cps + Buyables['Portal'].price / 1332.2;
	timeEff = Buyables['Time machine'].price / cps + Buyables['Time machine'].price / 24691.2;
}
selectBestEff=function(){
	if (cursorEff<=grandmaEff && cursorEff<=factoryEff && cursorEff<=mineEff  && cursorEff<=shipmentEff  && cursorEff<=labEff  && cursorEff<=portalEff && cursorEff<=timeEff){
		return 'Cursor';
	}
	if (grandmaEff<=cursorEff && grandmaEff<=factoryEff && grandmaEff<=mineEff  && grandmaEff<=shipmentEff  && grandmaEff<=labEff  && grandmaEff<=portalEff && grandmaEff<=timeEff){
		return 'Grandma';
	}
	if (factoryEff<=grandmaEff && factoryEff<=cursorEff && factoryEff<=mineEff  && factoryEff<=shipmentEff  && factoryEff<=labEff  && factoryEff<=portalEff && factoryEff<=timeEff){
		return 'Factory';
	}
	if (mineEff<=grandmaEff && mineEff<=factoryEff && mineEff<=cursorEff  && mineEff<=shipmentEff  && mineEff<=labEff  && mineEff<=portalEff && mineEff<=timeEff){
		return 'Mine';
	}
	if (shipmentEff<=grandmaEff && shipmentEff<=factoryEff && shipmentEff<=mineEff  && shipmentEff<=cursorEff  && shipmentEff<=labEff  && shipmentEff<=portalEff && shipmentEff<=timeEff){
		return 'Shipment';
	}
	if (labEff<=grandmaEff && labEff<=factoryEff && labEff<=mineEff  && labEff<=shipmentEff  && labEff<=cursorEff  && labEff<=portalEff && labEff<=timeEff){
		return 'Alchemy lab';
	}
	if (portalEff<=grandmaEff && portalEff<=factoryEff && portalEff<=mineEff  && portalEff<=shipmentEff  && portalEff<=labEff  && portalEff<=cursorEff && portalEff<=timeEff){
		return 'Portal';
	}
	if (timeEff<=grandmaEff && timeEff<=factoryEff && timeEff<=mineEff  && timeEff<=shipmentEff  && timeEff<=labEff  && timeEff<=cursorEff && timeEff<=portalEff){
		return 'Time machine';
	}
}

selectBestROI=function(){
	if (cursorROI<=grandmaROI && cursorROI<=factoryROI && cursorROI<=mineROI  && cursorROI<=shipmentROI  && cursorROI<=labROI  && cursorROI<=portalROI && cursorROI<=timeROI){
		return 'Cursor';
	}
	if (grandmaROI<=cursorROI && grandmaROI<=factoryROI && grandmaROI<=mineROI  && grandmaROI<=shipmentROI  && grandmaROI<=labROI  && grandmaROI<=portalROI && grandmaROI<=timeROI){
		return 'Grandma';
	}
	if (factoryROI<=grandmaROI && factoryROI<=cursorROI && factoryROI<=mineROI  && factoryROI<=shipmentROI  && factoryROI<=labROI  && factoryROI<=portalROI && factoryROI<=timeROI){
		return 'Factory';
	}
	if (mineROI<=grandmaROI && mineROI<=factoryROI && mineROI<=cursorROI  && mineROI<=shipmentROI  && mineROI<=labROI  && mineROI<=portalROI && mineROI<=timeROI){
		return 'Mine';
	}
	if (shipmentROI<=grandmaROI && shipmentROI<=factoryROI && shipmentROI<=mineROI  && shipmentROI<=cursorROI  && shipmentROI<=labROI  && shipmentROI<=portalROI && shipmentROI<=timeROI){
		return 'Shipment';
	}
	if (labROI<=grandmaROI && labROI<=factoryROI && labROI<=mineROI  && labROI<=shipmentROI  && labROI<=cursorROI  && labROI<=portalROI && labROI<=timeROI){
		return 'Alchemy lab';
	}
	if (portalROI<=grandmaROI && portalROI<=factoryROI && portalROI<=mineROI  && portalROI<=shipmentROI  && portalROI<=labROI  && portalROI<=cursorROI && portalROI<=timeROI){
		return 'Portal';
	}
	if (timeROI<=grandmaROI && timeROI<=factoryROI && timeROI<=mineROI  && timeROI<=shipmentROI  && timeROI<=labROI  && timeROI<=cursorROI && timeROI<=portalROI){
		return 'Time machine';
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
							grandmaGain=Math.ceil(19+(Portals*0.5));
						}
						}
						
					}
				}
			}
			}
			
			CBAT = CBAT + cps/3.33;
			nextBuilding = selectBestROI();
			timeL = pretiffyTime((Buyables[selectBestROI()].price-Cookies)/cps);

			if (selectBestEff()=='Cursor') {
				ROI = cursorROI;
				Eff = cursorEff;
			} 
			if (selectBestEff()=='Grandma') {
				ROI = grandmaROI;
				Eff = grandmaEff;
			} 
			if (selectBestEff()=='Factory') {
				ROI = factoryROI;
				Eff = factoryEff;
			}
			if (selectBestEff()=='Mine') {
				ROI = mineROI;
				Eff = mineEff;
			} 
			if (selectBestEff()=='Shipment') {
				ROI = shipmentROI;
				Eff = shipmentEff;
			} 
			if (selectBestEff()=='Alchemy lab') {
				ROI = labROI;
				Eff = labEff;
			}
			if (selectBestEff()=='Portal') {
				ROI = portalROI;
				Eff = portalEff;
			} 
			if (selectBestEff()=='Time machine') {
				ROI = timeROI;
				Eff = timeEff;
			} 
			
			totalBuildings = Cursors + Grandmas + Factories + Mines + Shipments + Labs + Portals + Times

			avgCpsAT = CBAT / totalTime;

			TobiBotInformation.document.getElementById("showCpS").innerHTML = standardNotation(cps);
			TobiBotInformation.document.getElementById("CBAT").innerHTML = standardNotation(CBAT);
			TobiBotInformation.document.getElementById("tB").innerHTML = totalBuildings;
			TobiBotInformation.document.getElementById("nB").innerHTML = nextBuilding;
			TobiBotInformation.document.getElementById("tL").innerHTML = timeL;
			TobiBotInformation.document.getElementById("nextOoM").innerHTML = nextOoM.toExponential();
			TobiBotInformation.document.getElementById("nextMilestone").innerHTML = standardMilestones(nextMilestone);
			TobiBotInformation.document.getElementById("totalTime").innerHTML = pretiffyTime(totalTime);
			TobiBotInformation.document.getElementById("ROI").innerHTML = standardNotation(ROI);
			TobiBotInformation.document.getElementById("Eff").innerHTML = standardNotation(Eff);
			TobiBotInformation.document.getElementById("averageCpSAT").innerHTML = standardNotation(avgCpsAT);
			TobiBotInformation.document.getElementById("averageCpS").innerHTML = standardNotation(avgCps);
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
		if (Cookies>Buyables[selectBestEff()].price){
			Buyables[selectBestEff()].Buy();
			calculateROI();
			calculateEff();
			new Pop('credits','<span style="color:#f00;">Next building:</span>'+selectBestEff());
		}
		updateInformationWindow();
		cpsLog[cpsIndex] = cps;
		cpsIndex++;
		avgCps = cpsLog.reduce((a, b) => a + b, 0) / cpsLog.length;
		if(cpsIndex == 200){
			cpsIndex = 0;
		}
		

	}, 300);
	}
	
stop=function() {
	clearInterval(this.clickInterval);
	autobuy=0;
}
	

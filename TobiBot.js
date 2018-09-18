/* Version 0.120 */

	var btn = document.createElement("startButton");        // Create a <button> element
	btn.id ='startButton';
	var t = document.createTextNode("Start");       // Create a text node
	btn.appendChild(t);                                // Append the text to <button>
	document.body.appendChild(btn);
	document.getElementById("startButton").onclick = function() {start()} ;
	var cps = Cursors*0.2 + Grandmas*0.8 + Factories*4 + Mines*12.5 + Shipments*20 + Labs*125 + Portals*1332.2;
	var CBAT = Cookies;
	var totalB = 0;
	var nextB = "";
	var timeL = 0;
	var timeM = 0;
	var M1;
	var M2;
	var M3;
	
	start=function() {
		var TobiBotInformation = window.open("", "MsgWindow", "width=600,height=300,addressbar=no, location=no");
		TobiBotInformation.document.write("<h2>TobiBot Information Window</h2>"+"CpS: "+"<span id="+"showCpS"+">0</span><br />");
		TobiBotInformation.document.write("Cookies baked all time: "+"<span id="+"CBAT"+">0</span><br />");
		TobiBotInformation.document.write("Total Buildings: "+"<span id="+"tB"+">0</span><br />");
		TobiBotInformation.document.write("Next Building: "+"<span id="+"nB"+"></span><br />");
		TobiBotInformation.document.write("Time left: "+"<span id="+"tL"+"></span><br />");
		TobiBotInformation.document.write("Time left for 1 <span id="+"M1"+"></span>"+" CBAT: "+"<span id="+"tM"+"></span><br />");
		TobiBotInformation.document.write("Time left for 1 <span id="+"M2"+"></span>"+" CBAT: "+"<span id="+"tM2"+"></span><br />");
		TobiBotInformation.document.write("Time left for 1 <span id="+"M3"+"></span>"+" CBAT: "+"<span id="+"tM3"+"></span><br />");
		TobiBotInformation.document.write("<br /><br /><br /><footer>Version 0.120</footer>");
		TobiBotInformation.document.title = "TobiBot Information Window";
		var cursorROI=Buyables['Cursor'].price/0.2;
		var grandmaROI=Buyables['Grandma'].price/0.8;
		var factoryROI=Buyables['Factory'].price/4;
		var mineROI=Buyables['Mine'].price/10;
		var shipmentROI=Buyables['Shipment'].price/20;
		var labROI=Buyables['Alchemy lab'].price/100;
		var portalROI=Buyables['Portal'].price/1332.2;
	pretiffyTime=function(a){
		var seconds=0;
		var minutes=0;
		var hours=0;
		var days=0;
		if (a < 60) {
			seconds = Math.round(a);
		}
		if (a > 60 && a < 3600){
			seconds=Math.round(a%60);
			minutes=Math.floor((a%3600)/60);
		}
		if (a > 3600 && a < 86400){
			seconds=Math.round(a%60);
			minutes=Math.floor((a%3600)/60);
			hours=Math.floor(((a%86400)/60)/60);
		}
		if (a > 86400){
		seconds=Math.round(a%60);
		minutes=Math.floor((a%3600)/60);
		hours=Math.floor(((a%86400)/60)/60);
		days=Math.floor(a/86400);
		}
		var time= days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds left";
		return time;
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
				cps = Cursors*0.2 + Grandmas*0.8 + Factories*4 + Mines*12.5 + Shipments*20 + Labs*125 + Portals*1332.2;
				CBAT = CBAT + cps/3.33;
				nextB = selectBestROI();
				timeL = pretiffyTime((Buyables[selectBestROI()].price-Cookies)/cps);
				
				totalB = Cursors + Grandmas + Factories + Mines + Shipments + Labs + Portals
				TobiBotInformation.document.getElementById("showCpS").innerHTML = Math.round(cps * 10) / 10;
				TobiBotInformation.document.getElementById("CBAT").innerHTML = Math.round(CBAT*10) / 10;
				TobiBotInformation.document.getElementById("tB").innerHTML = totalB;
				TobiBotInformation.document.getElementById("nB").innerHTML = nextB;
				TobiBotInformation.document.getElementById("tL").innerHTML = timeL;
				TobiBotInformation.document.getElementById("M1").innerHTML = M1;
				TobiBotInformation.document.getElementById("M2").innerHTML = M2;
				TobiBotInformation.document.getElementById("M3").innerHTML = M3;
				if (CBAT < 1000000){
				timeM = pretiffyTime(Math.round((1000000-CBAT)/cps));
				timeM2 = pretiffyTime(Math.round((1000000000-CBAT)/cps));
				timeM3 = pretiffyTime(Math.round((1000000000000-CBAT)/cps));
				M1 = "Million";
				M2 = "Billion";
				M3 = "Trillion";
				TobiBotInformation.document.getElementById("tM").innerHTML = timeM;
				TobiBotInformation.document.getElementById("tM2").innerHTML = timeM2;
				TobiBotInformation.document.getElementById("tM3").innerHTML = timeM3;				
				}			
				if (CBAT > 1000000 && CBAT < 1000000000){
				timeM = pretiffyTime(Math.round((1000000000-CBAT)/cps));
				timeM2 = pretiffyTime(Math.round((1000000000000-CBAT)/cps));
				timeM3 = pretiffyTime(Math.round((1000000000000000-CBAT)/cps));
				M1 = "Billion";
				M2 = "Trillion";
				M3 = "Quadrillion";	
				TobiBotInformation.document.getElementById("tM").innerHTML = timeM;
				TobiBotInformation.document.getElementById("tM2").innerHTML = timeM2;
				TobiBotInformation.document.getElementById("tM3").innerHTML = timeM3;				
				}	
				if (CBAT > 1000000 && CBAT > 1000000000 && CBAT < 1000000000000){
				timeM = pretiffyTime(Math.round((1000000000000-CBAT)/cps));
				timeM2 = pretiffyTime(Math.round((1000000000000000-CBAT)/cps));
				timeM3 = pretiffyTime(Math.round((1000000000000000000-CBAT)/cps));
				M1 = "Trillion";
				M2 = "Quadrillion";
				M3 = "Quintillion";	
				TobiBotInformation.document.getElementById("tM").innerHTML = timeM;
				TobiBotInformation.document.getElementById("tM2").innerHTML = timeM2;
				TobiBotInformation.document.getElementById("tM3").innerHTML = timeM3;				
				}	
				if (CBAT > 1000000000000){
				timeM = pretiffyTime(Math.round((1000000000000000-CBAT)/cps));
				timeM2 = pretiffyTime(Math.round((1000000000000000000-CBAT)/cps));
				timeM3 = pretiffyTime(Math.round((1000000000000000000000-CBAT)/cps));
				M1 = "Quadrillion";
				M2 = "Quintillion";
				M3 = "Sextillion";	
				TobiBotInformation.document.getElementById("tM").innerHTML = timeM;
				TobiBotInformation.document.getElementById("tM2").innerHTML = timeM2;
				TobiBotInformation.document.getElementById("tM3").innerHTML = timeM3;				
				}
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
					cursorROI=Buyables['Cursor'].price/0.2;
					grandmaROI=Buyables['Grandma'].price/0.8;
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
	
	

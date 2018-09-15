/* Version 0.120 Beta 3 */
	var btn = document.createElement("startButton");        // Create a <button> element
	btn.id ='startButton';
	var t = document.createTextNode("Start");       // Create a text node
	btn.appendChild(t);                                // Append the text to <button>
	document.body.appendChild(btn);
	document.getElementById("startButton").onclick = function() {start()} ;

	
	start=function() {
		var cursorROI=Buyables['Cursor'].price/0.2;
		var grandmaROI=Buyables['Grandma'].price/0.8;
		var factoryROI=Buyables['Factory'].price/4;
		var mineROI=Buyables['Mine'].price/12.5;
		var shipmentROI=Buyables['Shipment'].price/20;
		var labROI=Buyables['Alchemy lab'].price/125;
		var portalROI=Buyables['Portal'].price/1332.2;
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
		var autobuy=1;
		this.clickInterval = setInterval(function(){
			// Click the large cookie as fast as possible!
			ClickCookie();
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
		}, 300);
		}
		
	stop=function() {
		clearInterval(this.clickInterval);
		autobuy=0;
	}
	
	

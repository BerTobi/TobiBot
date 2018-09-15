TobiBot = {
	start: function() {
		this.clickInterval = setInterval(function(){
			// Click the large cookie as fast as possible!
			ClickCookie();
			if (Cookies>Buyables['Cursor'].price) {
		Buyables['Cursor'].Buy();
		}
			if (Cookies>Buyables['Grandma'].price) {
		Buyables['Grandma'].Buy();
		}
			if (Cookies>Buyables['Factory'].price) {
		Buyables['Factory'].Buy();
		}
			if (Cookies>Buyables['Mine'].price) {
		Buyables['Mine'].Buy();
		}
			if (Cookies>Buyables['Shipment'].price) {
		Buyables['Shipment'].Buy();
		}
			if (Cookies>Buyables['Alchemy lab'].price) {
		Buyables['Alchemy lab'].Buy();
		}
			if (Cookies>Buyables['Portal'].price) {
		Buyables['Portal'].Buy();
		}
		}, 300);
		
		


	},
	stop: function() {
		clearInterval(this.clickInterval);
	}
};
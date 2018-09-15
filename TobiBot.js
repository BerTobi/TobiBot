TobiBot = {
	start: function() {
		this.clickInterval = setInterval(function(){
			// Click the large cookie as fast as possible!
			ClickCookie();
			if (Cookies>Buyables['Cursor'].price) {
		Buyables['Cursor'].Buy();
		}
		}, 300);
		
		


	},
	stop: function() {
		clearInterval(this.clickInterval);
	}
};
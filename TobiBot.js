TobiBot = {
	start: function() {
		this.clickInterval = setInterval(function(){
			// Click the large cookie as fast as possible!
			ClickCookie();
		}, 300);


	},
	stop: function() {
		clearInterval(this.clickInterval);
	}
};
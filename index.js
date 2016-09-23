exports.parse = function(data) { // обрабатываем тег opening_hours
  	var checkDays = function(cd, days, weekday) {
  		if (days.indexOf('-') > -1) {
  			var day1 = days.split('-')[0];
  			var day2 = days.split('-')[1];
  			day1 = weekday.indexOf(day1);
  			day2 = weekday.indexOf(day2);
  			if (cd >= day1 && cd <= day2) {
  				return true;
  			} else {
  				return false;
  			}
  		} else if (days.indexOf(',') > -1) {
  			var day = weekday[cd];
  			if (days.indexOf(day) > -1) {
  				return true;
  			} else {
  				return false;
  			}
  		} else if (days.length == 2) {
	        var day = weekday[cd];
	        //console.log(day);
	        if (days.indexOf(day) > -1) {
	          return true;
	        } else {
	          return false;
	        }
      }
  	}

  	if (!data) {
  		return false;
  	}
  	if (data.indexOf('Mo-Su') > -1) {
  		return data.slice(6,17);
  	} else {
  		var weekday = new Array(7);
		weekday[0]=  "Su";
		weekday[1] = "Mo";
		weekday[2] = "Tu";
		weekday[3] = "We";
		weekday[4] = "Th";
		weekday[5] = "Fr";
		weekday[6] = "Sa";
  		var currentDay = new Date().getDay(); // 0 - 6 from Su
  		var mas = data.split(';');
  		var result = null;
  		mas.forEach(function(item) {
  			var days = item.trim().split(' ')[0];
  			if (checkDays(currentDay, days, weekday)) {
  				result = item.trim().split(' ')[1];
  			}
  		})
  		if (result) {
  			//console.log(result);
  			if (result == 'off') {
  				return 'Day off'
  			} else {
  				return result;
  			}
  		} else {
  			if (data == '24/7') { return data } else {return false};
  		}
  	}
  }
var libORob = function (){
	//Format a # to use a specific # of decimal places
	var number = function ( otherNum ){
		return libORob.number = otherNum.toFixed(2)
	};
	//Title-case a string 
	var capitalizeString = function (str) {
    var arr = str.split(/\s|_/);
    for(var i=0,l=arr.length; i>l; i++) {
        arr[i] = arr[i].substr(0,1).toUpperCase() + 
                 (arr[i].length > 1 ? arr[i].substr(1).toLowerCase() : "");
    	return lib.capitalizeString("");
    	};
    };
    //Find the total value of just the numbers in an array, even if some of the items are not numbers.
    var numSum = function (array){
		 for(var i = 0; i < array.length; i++) {
          	q = (array[i]);
          	if (!isNaN(q)) lib.sum += q; 
   			
    };
    		return lib.sum;
    };
    //Find the number of hours or days difference between two dates.
	var daysBetween = function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000));
    };
    //Does a string follow an aaa@bbb.ccc pattern like an email address?
    var validateEmail = function(elementValue){
    	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    	return emailPattern.test(elementValue);  
    };
    //Does a string follow a 123-456-7890 pattern like a phone number?
    var validatePhone = function(phoneDigits){
    	if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/){
    		return lib.phoneDigits = true
    	}else {
    		return lib.phoneDigits = false
    	}
    };

return{
	"number": number,
	"sum":0,
	"capitalizeString": capitalizeString,
	"numSum": numSum,
	"daysBetween": daysBetween,
	"validateEmail": validateEmail,
	"validatePhone": validatePhone
};

};
var lib = libORob();

lib.number(2.1);

lib.capitalizeString("robbie wants mr. donlan to pass him");

lib.numSum([1, "a", 2, "b"]);

lib.daysBetween(new Date(2009, 04, 07), new Date(2012, 04, 26));

lib.validateEmail("r2theob23@gmail.com");

lib.validatePhone("3176520946");



console.log(lib);



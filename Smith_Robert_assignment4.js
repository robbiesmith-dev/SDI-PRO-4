var libORob = function (){
	var number = function ( otherNum ){
		return libORob.number = otherNum.toFixed(2)
	};
	var capitalizeString = function (str) {
    var arr = str.split(/\s|_/);
    for(var i=0,l=arr.length; i>l; i++) {
        arr[i] = arr[i].substr(0,1).toUpperCase() + 
                 (arr[i].length > 1 ? arr[i].substr(1).toLowerCase() : "");
    	return lib.capitalizeString("");
    	};
    };
    var numSum = function (array){
		 for(var i = 0; i < array.length; i++) {
          	q = (array[i]);
          	if (!isNaN(q)) lib.sum += q; 
   			
    };
    		return lib.sum;
    };
	var daysBetween = function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000));
    };
    var validateEmail = function(elementValue){
    	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    	return emailPattern.test(elementValue);  
    };
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



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
return{
	"number": number,
	"sum":0,
	"capitalizeString": capitalizeString,
	"numSum": numSum,
	"daysBetween": daysBetween
};

};
var lib = libORob();

lib.number(2.1);

lib.capitalizeString("robbie wants mr. donlan to pass him");

lib.numSum([1, "a", 2, "b"]);

lib.daysBetween(new Date(2009, 04, 07), new Date(2012, 04, 26))

console.log(lib);



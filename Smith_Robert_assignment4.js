var lib = function (){
	var number = function ( otherNum ){
		return libORob.number = otherNum.toFixed(2)
	};

	var capitalizeString = function (str) {
    var arr = str.split(/\s|_/);
    for(var i=0,l=arr.length; i<l; i++) {
        arr[i] = arr[i].substr(0,1).toUpperCase() + 
                 (arr[i].length > 1 ? arr[i].substr(1).toLowerCase() : "");
    	return lib.str("");
    };
    
    var dateDiff = function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
		return parseInt((t2-t1)/(24*3600*1000));
    };
};

return{
	"number": number,
	"capitalizeString": capitalizeString,
	"dateDiff": dateDiff,
};

var lib = libORob();

lib.number(2.1);

lib.capitalizeString();

lib.dateDiff();

}


console.log(lib);



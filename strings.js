window.strings = (function () {

  var strings = {};

  strings.capitalizeAll = function(x){
    var arr = [];
    x.split(" ").forEach(function(d){
      arr.push(d.toString().charAt(0).toUpperCase() + d.slice(d.length-(d.length-1)));
    });
    return arr.join(" ");
  };

  strings.capitalizeFirst = function(x){
    return x.toString().charAt(0).toUpperCase() + x.slice(x.length-(x.length-1));
  };

  strings.numberCommas = function(x){
    return strings.stripCommas(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  strings.numberLakhs = function(x){
    x = strings.stripCommas(x);
    var afterPoint = x.indexOf(".") > 0 ? x.substring(x.indexOf("."), x.length) : "";
    x = Math.floor(x).toString();
    var lastThree = x.substring(x.length - 3), otherNumbers = x.substring(0, x.length - 3);
    lastThree = otherNumbers != "" ? "," + lastThree : lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
  };

  strings.numberHundredths = function(x){
    var s = x.toString().split("."),
      a = s[0],
      b = s[1];
    var c = b == undefined ? "00" : b.length == 1 ? b + "0" : b.length == 2 ? b : b.length > 2 ? Math.round(b / Math.pow(10, b.length - 2)) : "00";
    return c == 100 ? +strings.stripCommas(a) + 1 + ".00" : a + "." + c;
  };

  strings.numberTenths = function(x){
    var s = x.toString().split("."),
      a = s[0],
      b = s[1];
    var c = b == undefined ? 0 : b.length == 1 ? b : b.length > 1 ? Math.round(b / Math.pow(10, b.length - 1)) : 0;
    return c == 10 ? +strings.stripCommas(a) + 1 + ".0" : a + "." + c;
  };

  strings.numberPrependZeros = function (x, n){
    var s = "";
    for (var i = 1; i <= n - strings.stripCommas(x).length; i++){
      s = s + "0";
    }
    return s + strings.stripCommas(x);
  };

  strings.reverseLetters = function(x){
    return x.toString().split("").reverse().join("");
  };

  strings.reverseWords = function(x){
    return x.toString().split(" ").reverse().join(" ");
  }
  
  strings.stripCommas = function(x){
    return x.toString().replace(/,/g , "");
  }

  return strings;

}());

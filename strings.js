var strings = {
  capitalizeAll: function(x){
    var arr = [];
    x.split(" ").forEach(function(d){
      arr.push(d.toString().charAt(0).toUpperCase() + d.slice(d.length-(d.length-1)));
    });
    return arr.join(" ");
  },
  capitalizeFirst: function(x){
    return x.toString().charAt(0).toUpperCase() + x.slice(x.length-(x.length-1));
  },
  numberCommas: function(x){
    return stripCommas(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  numberLakhs: function(x){
    x = stripCommas(x);
    var afterPoint = x.indexOf(".") > 0 ? x.substring(x.indexOf("."), x.length) : "";
    x = Math.floor(x).toString();
    var lastThree = x.substring(x.length - 3), otherNumbers = x.substring(0, x.length - 3);
    lastThree = otherNumbers != "" ? "," + lastThree : lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
  },
  numberHundredths: function(x){
    var s = x.toString().split("."),
      a = s[0],
      b = s[1],
      c;

    if (b == undefined) {
      c = "00";
    } else if (b.length == 1){
      c = b + "0"
    } else if (b.length == 2){
      c = b;
    } else if (b.length > 2){
      c = Math.round(b / Math.pow(10, b.length - 2))
    } else {
      c = "00"
    }

    if (c == 100) {
      return stripCommas(a) + 1 + ".00";
    } else {
      return a + "." + c;
    }
  },
  numberTenths: function(x){
    var s = x.toString().split("."),
      a = s[0],
      b = s[1];
    var c = b == undefined ? 0 : b.length == 1 ? b : b.length > 1 ? Math.round(b / Math.pow(10, b.length - 1)) : 0;
    if (c == 10) {
      return stripCommas(a) + 1 + ".0";
    } else {
      return a + "." + c;
    }
  },
  reverseLetters: function(x){
    return x.toString().split("").reverse().join("");
  },
  reverseWords: function(x){
    return x.toString().split(" ").reverse().join(" ");
  }
};

// utility functions
function stripCommas(x){
  return x.toString().replace(/,/g , "");
}

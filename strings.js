var strings = {
  capitalizeAll: function(x){
    var arr = [];
    x.split(" ").forEach(function(d){
      arr.push(d.charAt(0).toUpperCase() + d.slice(d.length-(d.length-1)));
    });
    return arr.join(" ");
  },
  lakhs: function(x){
    x = x.toString();
    var afterPoint = x.indexOf(".") > 0 ? x.substring(x.indexOf("."), x.length) : "";
    x = Math.floor(x).toString();
    var lastThree = x.substring(x.length - 3), otherNumbers = x.substring(0, x.length - 3);
    lastThree = otherNumbers != "" ? "," + lastThree : lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
  },
  capitalizeFirst: function(x){
    return x.charAt(0).toUpperCase() + x.slice(x.length-(x.length-1));
  },
  reverseLetters: function(x){
    return x.split("").reverse().join("");
  },
  reverseWords: function(x){
    return x.split(" ").reverse().join(" ");
  }
};

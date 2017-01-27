window.strings = (function () {

  var o = {};

  o.numberCommas = function(x){
    return o.removeCommas(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  o.numberDecimals = function(x, number){
    return Number(x).toFixed(number);
  };

  o.numberLakhs = function(x){
    x = o.removeCommas(x);
    var afterPoint = x.indexOf(".") > 0 ? x.substring(x.indexOf("."), x.length) : "";
    x = Math.floor(x).toString();
    var lastThree = x.substring(x.length - 3), otherNumbers = x.substring(0, x.length - 3);
    lastThree = otherNumbers != "" ? "," + lastThree : lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
  };

  o.numberPrependZeros = function (x, n){
    for (var s = "", i = 1; i <= n - o.removeCommas(x).length; i++){
      s = s + "0";
    }
    return s + o.removeCommas(x);
  };

  o.removeCommas = function(x){
    return x.toString().replace(/,/g , "");
  }

  o.removeTags = function(x, y){
    return y ? x.split("<").filter(function(val){ return f(y, val); }).map(function(val){ return f(y, val); }).join("") : x.split("<").map(function(d){ return d.split(">").pop() }).join("");
    function f(array, value){
      return array.map(function(d){ return value.includes(d + ">"); }).indexOf(true) != -1 ? "<" + value : value.split(">")[1];
    }
  }

  o.reverseCharacters = function(x){
    return x.toString().split("").reverse().join("");
  };

  o.reverseWords = function(x){
    return x.toString().split(" ").reverse().join(" ");
  }

  o.shuffleCharacters = function(x){
    return util.shuffle(x.split("")).join("");
  }

  o.shuffleWords = function(x){
    return util.shuffle(x.split(" ")).join(" ");
  }

  o.toCamelCase = function(x){
    return x.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '').replace(/[^\w\-]+/g, '');
  }

  o.toSentenceCase = function(x){
    return x.toString().charAt(0).toUpperCase() + x.slice(x.length-(x.length-1));
  };

  o.toSlugCase = function(x) {
    return x.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  o.toStartCase = function(x){
    return x.split(" ").map(function(d){ return o.toSentenceCase(d); }).join(" ");
  };

  o.toTitleCase = function(x, y){

    var ignore = ["a", "an", "and", "as", "at", "but", "by", "for", "from", "if", "in", "nor", "on", "of", "off", "or", "out", "over", "the", "to", "vs"];
    if (y) ignore = ignore.concat(y);
    ignore.forEach(function(d){
      ignore.push(o.toSentenceCase(d));
    });
    var b = x.split(" ");
    return b.map(function(d, i){
      return ignore.indexOf(d) == -1 || (b[i-1] && b[i-1].endsWith(":")) ? o.toSentenceCase(d) : y && y.indexOf(d) != -1 ? d : i != 0 ? d.toLowerCase() : strings.toStartCase(d);
    }).join(" ");

  }

  var util = {};
  util.shuffle = function(array){
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  return o;

}());

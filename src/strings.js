window.strings = (function () {

  var o = {};

  o.count = function(x, y){
    return (x.match(new RegExp(y, "g")) || []).length;
  }

  o.endsWith = function(x, y, bool){
    x = x.toString();
    return bool ? x.toUpperCase().endsWith(y.toUpperCase()) : x.endsWith(y);
  }

  o.includes = function(x, y, bool){
    x = x.toString();
    return bool ? x.toUpperCase().indexOf(y.toUpperCase()) != -1 : x.indexOf(y) != -1;
  }

  o.isAllCaps = function(x) {
    return x === x.toUpperCase();
  }

  o.isAllDigits = function(x) {
    return /^\d+$/.test(x);
  }

  o.isAllLower = function(x) {
    return x === x.toLowerCase();
  }

  o.keepAll = function(x, y){
    return x.toString().split("").map(function(d){ if (d == y) return d; }).join("");
  }

  o.keepEnd = function(x, n){
    x = x.toString();
    return x.slice(x.length - n, x.length)
  }

  o.keepOne = function(x, y){
    return o.keepAll(x, y).charAt(0);
  }

  o.keepStart = function(x, n){
    return x.toString().slice(0, +n)
  }

  o.numberCommas = function(x){
    return o.removeAll(x, ",").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  o.numberDecimals = function(x, number){
    return Number(o.removeAll(x, ",")).toFixed(number);
  };

  o.numberLakhs = function(x){
    x = o.removeAll(x, ",");
    var afterPoint = x.indexOf(".") > 0 ? x.substring(x.indexOf("."), x.length) : "";
    x = Math.floor(x).toString();
    var lastThree = x.substring(x.length - 3), otherNumbers = x.substring(0, x.length - 3);
    lastThree = otherNumbers != "" ? "," + lastThree : lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
  };

  o.numberPrependZeros = function (x, n){
    for (var s = "", i = 1; i <= n - o.removeAll(x, ",").length; i++){
      s = s + "0";
    }
    return s + o.removeAll(x, ",");
  };

  o.removeAll = function(x, y){
    return o.replaceAll(x, y , "");
  }

  o.removeDigits = function(x){
    return x.replace(/\d+/g, "");
  }

  o.removeFirst = function(x, y){
    return x.toString().replace(y, "");
  }

  o.removeLast = function(x, y){
    return o.replaceLast(x, y, "");
  }

  o.removeSymbols = function(x){
    return x.replace(/[^a-zA-Z ]/g, "");
  }

  o.removeTags = function(x, y){
    y = y.map(function(d){ return "<" + d + ">"; }).join(",");
    y = (((y || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(""); // making sure the y arg is a string containing only tags in lowercase (<a><b><c>)
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return x.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
        return y.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : "";
    });
  }

  o.replaceAll = function(x, y, z){
    return x.toString().replace(new RegExp(y, "g"), z);
  }

  o.replaceFirst = function(x, y, z){
    return x.toString().replace(y, z);
  }

  o.replaceLast = function(x, y, z){
    x = x.toString();
    var a = x.split("");
    a[x.lastIndexOf(y)] = z;
    return a.join("");
  }

  o.reverseCharacters = function(x){
    return x.toString().split("").reverse().join("");
  };

  o.reverseWords = function(x){
    return x.toString().split(" ").reverse().join(" ");
  }

  o.shuffleCharacters = function(x){
    return util.shuffle(x.toString().split("")).join("");
  }

  o.shuffleCharactersInWords = function(x){
    return x.toString().split(" ").map(function(d){ return o.shuffleCharacters(d); }).join(" ");
  }

  o.shuffleWords = function(x){
    return util.shuffle(x.toString().split(" ")).join(" ");
  }

  o.startsWith = function(x, y, bool){
    return bool ? x.toUpperCase().startsWith(y.toUpperCase()) : x.toString().startsWith(y);
  }

  o.toCamelCase = function(x){
    return x.toString().replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
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

  o.toSnakeCase = function(x) {
    return x.toString().toLowerCase()
      .replace(/\s+/g, '_')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\_\_+/g, '_')         // Replace multiple - with single -
      .replace(/^_+/, '')             // Trim - from start of text
      .replace(/_+$/, '');            // Trim - from end of text
  }

  o.toStartCase = function(x){
    return x.toString().split(" ").map(function(d){ return o.toSentenceCase(d); }).join(" ");
  };

  o.toTitleCase = function(x, y, z){
    var ignore = ["a", "an", "and", "as", "at", "but", "by", "for", "from", "if", "in", "nor", "on", "of", "off", "or", "out", "over", "the", "to", "vs"];
    if (y) ignore = ignore.concat(y);
    if (z) x.split(/[ ]/g).forEach(function(d){ if (o.isAllCaps(o.removeSymbols(d))) ignore.push(d); });
    ignore.forEach(function(d){
      ignore.push(o.toSentenceCase(d));
    });
    var b = x.toString().split(/[ ]/g);
    return b.map(function(d, i){
      return ignore.indexOf(d) == -1 || (b[i-1] && b[i-1].endsWith(":")) ? o.toSentenceCase(d) : y && y.indexOf(d) != -1 ? d : i != 0 && !o.isAllCaps(d) ? d.toLowerCase() : strings.toStartCase(d);
    }).join(" ");
  }
  // o.toTitleCase = function(x){
  //   return str.replace(
  //   /(\b.)|(.)/g,
  //   function ($0, $1, $2) {
  //     return ($1 && $1.toUpperCase()) || $2.toLowerCase();
  //   }
  //   );
  // }

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

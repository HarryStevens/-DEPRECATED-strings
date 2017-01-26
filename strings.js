String.prototype.toStartCase = function(){
  var arr = [];
  this.split(" ").forEach(function(d){
    arr.push(d.toSentenceCase());
  });
  return arr.join(" ");
}

String.prototype.toSentenceCase = function(){
  return this.toString().charAt(0).toUpperCase() + this.slice(this.length-(this.length-1));
}

String.prototype.toTitleCase = function(array){
  var arr = [];
  var ignore = ["a", "an", "and", "as", "at", "but", "by", "for", "from", "if", "in", "nor", "on", "of", "off", "or", "out", "over", "the", "to", "vs"];
  if (array) ignore = ignore.concat(array);
  ignore.forEach(function(d){
    ignore.push(d.toSentenceCase());
  });

  var b = this.split(" ");

  return b.forEach(function(d, i){
    arr.push(ignore.indexOf(d) == -1 || b[i-1].slice(-1) == ":" ? d.toSentenceCase() : y.indexOf(d) != -1 ? d : d.toLowerCase());
  }), arr.join(" ");
}

String.prototype.toCamelCase = function(){
  return this.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '').replace(/[^\w\-]+/g, '');
}

String.prototype.toSlugCase = function() {
  return this.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
}

String.prototype.numberCommas = function(){
  return this.removeCommas().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

String.prototype.numberLakhs = function(){
  x = this.removeCommas();
  var afterPoint = x.indexOf(".") > 0 ? x.substring(x.indexOf("."), x.length) : "";
  x = Math.floor(x).toString();
  var lastThree = x.substring(x.length - 3), otherNumbers = x.substring(0, x.length - 3);
  lastThree = otherNumbers != "" ? "," + lastThree : lastThree;
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
};

String.prototype.removeCommas = function(){
  return this.toString().replace(/,/g , "");
}

String.prototype.numberHundredths = function(){
  var s = this.toString().split("."),
    a = s[0],
    b = s[1];
  var c = b == undefined ? "00" : b.length == 1 ? b + "0" : b.length == 2 ? b : b.length > 2 ? Math.round(b / Math.pow(10, b.length - 2)) : "00";
  return c == 100 ? +a.removeCommas() + 1 + ".00" : a + "." + c;
};

String.prototype.numberTenths = function(){
  var s = this.toString().split("."),
    a = s[0],
    b = s[1];
  var c = b == undefined ? 0 : b.length == 1 ? b : b.length > 1 ? Math.round(b / Math.pow(10, b.length - 1)) : 0;
  return c == 10 ? +a.removeCommas() + 1 + ".0" : a + "." + c;
};

String.prototype.numberPrependZeros = function (number){
  for (var s = "", i = 1; i <= number - this.removeCommas().length; i++){
    s = s + "0";
  }
  return s + this.removeCommas();
};

String.prototype.reverseLetters = function(){
  return this.toString().split("").reverse().join("");
};

String.prototype.reverseWords = function(){
  return this.toString().split(" ").reverse().join(" ");
}

window.strings = (function () {

  var o = {};

  o.toStartCase = function(x){
    var arr = [];
    x.split(" ").forEach(function(d){
      arr.push(o.sentenceCase(d));
    });
    return arr.join(" ");
  };

  o.toSentenceCase = function(x){
    return x.toString().charAt(0).toUpperCase() + x.slice(x.length-(x.length-1));
  };


  o.toTitleCase = function(x, y){

    var arr = [];
    var ignore = ["a", "an", "and", "as", "at", "but", "by", "for", "from", "if", "in", "nor", "on", "of", "off", "or", "out", "over", "the", "to", "vs"];
    if (y) ignore = ignore.concat(y);
    ignore.forEach(function(d){
      ignore.push(o.sentenceCase(d));
    });

    var b = x.split(" ");

    return b.forEach(function(d, i){
      arr.push(ignore.indexOf(d) == -1 || b[i-1].slice(-1) == ":" ? o.sentenceCase(d) : y.indexOf(d) != -1 ? d : d.toLowerCase());
    }), arr.join(" ");

  }

  o.numberCommas = function(x){
    return o.removeCommas(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  o.numberLakhs = function(x){
    x = o.removeCommas(x);
    var afterPoint = x.indexOf(".") > 0 ? x.substring(x.indexOf("."), x.length) : "";
    x = Math.floor(x).toString();
    var lastThree = x.substring(x.length - 3), otherNumbers = x.substring(0, x.length - 3);
    lastThree = otherNumbers != "" ? "," + lastThree : lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
  };

  o.numberHundredths = function(x){
    var s = x.toString().split("."),
      a = s[0],
      b = s[1];
    var c = b == undefined ? "00" : b.length == 1 ? b + "0" : b.length == 2 ? b : b.length > 2 ? Math.round(b / Math.pow(10, b.length - 2)) : "00";
    return c == 100 ? +o.removeCommas(a) + 1 + ".00" : a + "." + c;
  };

  o.numberTenths = function(x){
    var s = x.toString().split("."),
      a = s[0],
      b = s[1];
    var c = b == undefined ? 0 : b.length == 1 ? b : b.length > 1 ? Math.round(b / Math.pow(10, b.length - 1)) : 0;
    return c == 10 ? +o.removeCommas(a) + 1 + ".0" : a + "." + c;
  };

  o.numberPrependZeros = function (x, n){
    for (var s = "", i = 1; i <= n - o.removeCommas(x).length; i++){
      s = s + "0";
    }
    return s + o.removeCommas(x);
  };

  o.reverseLetters = function(x){
    return x.toString().split("").reverse().join("");
  };

  o.reverseWords = function(x){
    return x.toString().split(" ").reverse().join(" ");
  }

  o.toSlugCase = function(x) {
    return x.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  o.removeCommas = function(x){
    return x.toString().replace(/,/g , "");
  }

  o.toCamelCase = function(x){
    return x.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '').replace(/[^\w\-]+/g, '');
  }

  return o;

}());

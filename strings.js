String.prototype.numberCommas = function numberCommas(){
  return this.removeCommas().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

String.prototype.numberDecimals = function numberDecimals(number){
  return Number(this).toFixed(number);
};

String.prototype.numberLakhs = function numberLakhs(){
  x = this.removeCommas();
  var afterPoint = x.indexOf(".") > 0 ? x.substring(x.indexOf("."), x.length) : "";
  x = Math.floor(x).toString();
  var lastThree = x.substring(x.length - 3), otherNumbers = x.substring(0, x.length - 3);
  lastThree = otherNumbers != "" ? "," + lastThree : lastThree;
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
};

String.prototype.numberPrependZeros = function numberPrependZeros(number){
  for (var s = "", i = 1; i <= number - this.removeCommas().length; i++){
    s = s + "0";
  }
  return s + this.removeCommas();
};

String.prototype.removeCommas = function removeCommas(){
  return this.toString().replace(/,/g , "");
}

String.prototype.reverseLetters = function reverseLetters(){
  return this.toString().split("").reverse().join("");
};

String.prototype.reverseWords = function reverseWords(){
  return this.toString().split(" ").reverse().join(" ");
}

String.prototype.toCamelCase = function toCamelCase(){
  return this.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '').replace(/[^\w\-]+/g, '');
}

String.prototype.toSentenceCase = function toSentenceCase(){
  return this.toString().charAt(0).toUpperCase() + this.slice(this.length-(this.length-1));
}

String.prototype.toSlugCase = function toSlugCase() {
  return this.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
}

String.prototype.toStartCase = function toStartCase(){
  var arr = [];
  this.split(" ").forEach(function(d){
    arr.push(d.toSentenceCase());
  });
  return arr.join(" ");
}

String.prototype.toTitleCase = function toTitleCase(array){
  var arr = [];
  var ignore = ["a", "an", "and", "as", "at", "but", "by", "for", "from", "if", "in", "nor", "on", "of", "off", "or", "out", "over", "the", "to", "vs"];
  if (array) ignore = ignore.concat(array);
  ignore.forEach(function(d){
    ignore.push(d.toSentenceCase());
  });

  var b = this.split(" ");

  return b.forEach(function(d, i){
    arr.push(ignore.indexOf(d) == -1 || b[i-1].endsWith(":") ? d.toSentenceCase() : array && array.indexOf(d) != -1 ? d : d.toLowerCase());
  }), arr.join(" ");
}

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

  o.reverseLetters = function(x){
    return x.toString().split("").reverse().join("");
  };

  o.reverseWords = function(x){
    return x.toString().split(" ").reverse().join(" ");
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
    var arr = [];
    x.split(" ").forEach(function(d){
      arr.push(o.toSentenceCase(d));
    });
    return arr.join(" ");
  };

  o.toTitleCase = function(x, y){

    var arr = [];
    var ignore = ["a", "an", "and", "as", "at", "but", "by", "for", "from", "if", "in", "nor", "on", "of", "off", "or", "out", "over", "the", "to", "vs"];
    if (y) ignore = ignore.concat(y);
    ignore.forEach(function(d){
      ignore.push(o.toSentenceCase(d));
    });

    var b = x.split(" ");

    return b.forEach(function(d, i){
      arr.push(ignore.indexOf(d) == -1 || b[i-1].endsWith(":") ? o.toSentenceCase(d) : y && y.indexOf(d) != -1 ? d : d.toLowerCase());
    }), arr.join(" ");

  }

  return o;

}());

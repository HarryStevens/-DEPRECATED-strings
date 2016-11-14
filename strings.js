var strings = {
  capitalizeAll: function(x){
    var arr = [];
    x.split(" ").forEach(function(d){
      arr.push(d.charAt(0).toUpperCase() + d.slice(d.length-(d.length-1)))
    });
    return arr.join(" ");
  },
  capitalizeFirst: function(x){
    return x.charAt(0).toUpperCase() + x.slice(x.length-(x.length-1))
  }
};

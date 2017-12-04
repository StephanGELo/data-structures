var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set; 
};

var setPrototype = {};

setPrototype.add = function(item) {
  //take any string and add it to the set
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  //takes any string and return a boolean of whether it can be found
  if (this._storage.indexOf(item) > -1) {
    return true;
  }

  return false;
};

setPrototype.remove = function(item) {
  //takes any string and removes it from the set if present
  var index = this._storage.indexOf(item);
  this._storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
   Answer:
   The time complexity for the "add" function is constant time, O(1).
   The time complexity for the "contains" and "remove" function is linear time, O(n).  
 */

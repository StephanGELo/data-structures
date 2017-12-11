

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  this._limit = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      return;
    } 
  }
  bucket.push([k ,v]);
  this.size++;
  if (this._size > this._limit * 0.75) {
    this.resize(2);
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple !== undefined && tuple[0] === k) {
        return tuple[1];
      }
    }
  }
  return;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        bucket.splice(i, 1);
        this.size--;
        if (this._size < this._limit * 0.25) {
          this.resize(0.5);
        }
        return;
      }
    }
  }
};

HashTable.prototype.resize = function(multiplier) {

}

/*
 * Complexity: What is the time complexity of the above functions?
 On the average case the insert function will have a constant time, O(1) 
 and in the  worst case, the insert function will have a linear time, O(n);
 */



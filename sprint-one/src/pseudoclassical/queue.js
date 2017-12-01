var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.firstKey = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function(value) {
  if (this.count > 0) {
    var result = this.storage[this.firstKey];
    delete this.storage[this.firstKey];
    this.firstKey++;
  }
  return result;
};

Queue.prototype.size = function(value) {
  return Math.max(0, this.count - this.firstKey);
};





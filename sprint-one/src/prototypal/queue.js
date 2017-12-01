var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  
  obj.storage = {};
  obj.count = 0;
  obj.firstKey = 0;

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    var result = this.storage[this.firstKey];
    delete this.storage[this.firstKey];
    this.firstKey++;
  }
  return result; 
};

queueMethods.size = function() {
  return Math.max(0, (this.count - this.firstKey));
};



var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {};
  queueInstance.storage = {};
  queueInstance.count = 0;
  queueInstance.firstKey = 0;
  _.extend(queueInstance, queueMethods);

  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;

};

queueMethods.dequeue = function () {
  if (this.count > 0) {
    var result = this.storage[this.firstKey];
    delete this.storage[this.firstKey];
    this.firstKey++;
  }
  
  return result;
};

queueMethods.size = function () {
  return Math.max(0, this.count - this.firstKey);
};
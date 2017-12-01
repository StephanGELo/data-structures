var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};

  stackInstance.storage = {};
  stackInstance.keyCount = 0;

  _.extend(stackInstance, stackMethods);

  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.keyCount] = value;
  this.keyCount++;
};

stackMethods.pop = function() {
  if (this.keyCount > 0) {
    this.keyCount--; 
    var result = this.storage[this.keyCount];
    delete this.storage[this.keyCount];
  }
  return result;
};

stackMethods.size = function() {
  return this.keyCount;
};
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  // Implement the methods below
  var firstKey = 0;

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    var result;
    if (key > 0) {
      result = storage[firstKey];
      console.log(result); // 
      delete storage[firstKey];
      firstKey++;
    }
    return result;
  };

  someInstance.size = function() {
    return Math.max(0, key - firstKey);
  }; 

  return someInstance;
};

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  var result;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
    if (key === 0) {
      result = storage[key];
      delete storage[key];
    }

    if (key > 0) {
      result = storage[--key];
      delete storage[key];
    }
    return result;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};

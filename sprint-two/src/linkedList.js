var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //takes a value and adds it to the end of the list
    // this.head = new Node(value);
    var newTail = new Node(value);

    if (this.head === null) {
      this.head = newTail; 
    }
    if (this.tail !== null) {
      this.tail.next = newTail;
    }
    
    this.tail = newTail;
  };

  list.removeHead = function() { 
    // //removes the first node from the list and returns its value
    var currentValue = this.head.value;
    
    if (this.head === null) {
      return;
    }  
     
    this.head = this.head.next;
    return currentValue;
  };

  list.contains = function(target) {
    //returns boolean reflecting whether or not the passed in value 
    // is in the list.
    if (this.head === null) {
      return false;
    }
    if (target === this.head.value) {
      return true;
    }
    if (target === this.tail.value) {
      return true;
    }

    var nextNode = this.head.next;
    while (nextNode !== null) {
      if (target === nextNode.value) {
        return true;
      } 
      nextNode = nextNode.next;
    }    
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

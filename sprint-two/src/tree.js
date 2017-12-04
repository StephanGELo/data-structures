var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);  
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  var result = false;
  var that = this;

  var searchNode = function(node) {
    if (target === node.value) {
      result = true;
    }
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        searchNode(node.children[i]);    
      }
    }
  }

  searchNode(that);

  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?

 Answer: 
 The time complexity of the "addchild" function is a constant time operation, O(1).
 
 The time complexity of the "constains" function uses a recursive for-loop and is a linear time operation, O(n).
 */

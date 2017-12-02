var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
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
  if (target === this.value) {
    return true;
  }

  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (target === this.children[i].value) {
        return true;
      }
      return false;     
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

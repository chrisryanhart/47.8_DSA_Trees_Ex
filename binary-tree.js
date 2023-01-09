/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
    this.count = null;
    this.sum = 0;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    this.count = 0;
    if(this.root === null){
      return 0;
    } else {
      this.count ++;
    }
    let queue = [this.root];
    
    while(queue !== 0){
      let arrLen = queue.length;
      // loop through current row
      // if any have a child
      for(let i=0; i<arrLen; i++){
        let currentNode = queue.shift();
        if(currentNode.left === null && currentNode.right === null){
          return this.count;
        }
        if(currentNode.left){
          queue.push(currentNode.left);
        }
        if(currentNode.right){
          queue.push(currentNode.right);
        }
        this.count ++;
      }
      // if(currentNode.left !== null || currentNode.right !== null)
  
    }
    return this.count;
  
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    if(this.root === null) return 0;

    this.count = 0;

    // have to loop through root
    const findDepth = (node) => {
      let leftNode = node.left;
      let rightNode = node.right;

      // if 2 nodes present, find node with longer path
      if(leftNode && rightNode){
        let rightCount = findDepth(rightNode);
        let leftCount = findDepth(leftNode);

        let nodeCount = rightCount >= leftCount ? rightCount : leftCount;

        return nodeCount + 1;
      }

      // if one node present
      if(leftNode || rightNode){
        if(leftNode){
          return findDepth(leftNode) + 1;
        }
        if(rightNode){
          return findDepth(rightNode) + 1;
        }
      }
      
      // if no children return 1
      return 1;
    }

    return this.count + findDepth(this.root);
  
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    // Max sum of a path occurs when their are no children for a given node
    if(this.root === null) return 0;

    // have to loop through root
    // inspect value of children
    const findSum = (node) => {
      let leftNode = node.left;
      let rightNode = node.right;

      // if 2 nodes present, find node with longer path
      if(leftNode && rightNode){
        let rightSum = findSum(rightNode);
        let leftSum = findSum(leftNode);

        // only return the val that has the higher sum with the leg

        this.sum = rightSum + leftSum + node.val;

        let rightPathVal = rightSum + node.val;

        let leftPathVal = leftSum + node.val;

        let maxPathVal = rightPathVal >= leftPathVal ? rightPathVal : leftPathVal;

        if(maxPathVal > 0){
          return maxPathVal;
        } else {
          return 0;
        }
      }

      // if one node present
      if(leftNode || rightNode){
        if(leftNode){

          return findSum(leftNode);
        }
        if(rightNode){
          return findSum(rightNode);
        }
      }

      // if()
      
      // if no children return node.val
      return node.val;
    }

    findSum(this.root);
    return this.sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };


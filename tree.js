/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
    this.sum = 0;
    this.count = 0;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(this.root === null) return 0;
    let toVisitStack = [this.root]

    while(toVisitStack.length){
      let current = toVisitStack.pop();

      this.sum += current.val;
      
      for(let child of current.children){
        toVisitStack.push(child);
      }
    }
    return this.sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(this.root === null) return 0;
    let toVisitStack = [this.root]

    while(toVisitStack.length){
      let current = toVisitStack.pop();

      if(current.val % 2 === 0){
        this.count ++;
      }

      for(let child of current.children){
        toVisitStack.push(child);
      }
    }
    return this.count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    this.count =0; 
    if(this.root === null) return 0;
    let toVisitStack = [this.root]

    while(toVisitStack.length){
      let current = toVisitStack.pop();
      console.log('curr Val',current.val);
      console.log('this.count: ', this.count);

      if(current.val > lowerBound){
        this.count ++;
      }

      for(let child of current.children){
        toVisitStack.push(child);
      }
    }
    return this.count;
  }
}

module.exports = { Tree, TreeNode };

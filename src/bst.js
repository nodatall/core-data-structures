import TreeNode from './treeNode'

export default class BST {
  constructor() {
    this.root = null
  }
    
  insert( val, node = this.root ) {
    if ( !node ) {
      this.root = new TreeNode( val )
      return true
    } else if ( node.val === val ) {
      return false
    } else if ( val < node.val ) {
      if ( !node.left ) {
        node.left = new TreeNode( val )
        return true
      } else {
        return this.insert( val, node.left )
      }
    } else if ( val > node.val ) {
      if ( !node.right ) {
        node.right = new TreeNode( val )
        return true
      } else {
        return this.insert( val, node.right )
      }
    }
    return false
  }
  
  find( val, node = this.root ) {
    if ( !node ) {
      return false
    } else if ( node.val === val ) {
      return node
    } else {
      return this.find( val, val < node.val ? node.left : node.right ) 
    }
  }
  
  delete( val, node = this.root ) {
    if ( !node ) {
      return node
    } else if ( val < node.val ) {
      node.left = this.delete( val, node.left )
    } else if ( val > node.val ) {
      node.right = this.delete( val, node.right )
    } else {
      if ( !node.right && !node.left ) {
        node = null
      } else if ( !node.left ) {
        node = node.right
      } else if ( !node.right ) {
        node = node.left
      } else {
        const min = this.findMinimum( node.right )
        node.val = min.val
        node.right = this.delete( min.val, node.right )
      }
    }
    
    return node
  }
  
  findMinimum( node = this.root ) {
    if ( node.left ) {
      return this.findMinimum( node.left )
    } else {
      return node
    }
  }
  
}
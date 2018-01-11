import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BST from '../src/bst'

chai.use( chaiChange )

describe( 'BST', () => {
  let bst 
  
  beforeEach( () => {
    bst = new BST()
  })
  
  it( 'exists', () => {
    expect( BST ).to.be.a( 'function' )
  })
  
  context( 'insert', () => {
    
    it( 'should set the root to inserted node', () => {
      bst.insert( 1 )
      expect( bst.root.val ).to.equal( 1 )
    })
  
    it( 'should insert a node to the right of root if larger', () => {
      bst.insert( 1 )
      bst.insert( 3 )
      expect( bst.root.right.val ).to.equal( 3) 
    })
    
  })
  
  context( 'find', () => {
    it( 'should return given node from tree', () => {
      bst.insert( 4 )
      bst.insert( 3 )
      bst.insert( 5)
      bst.insert( 7)
      expect( bst.find( 5 ).right.val ).to.equal( 7 )
    })
  })
  
  context( 'findMinimum', () => {
    it( 'should find the node with maximum value', () => {
      bst.insert( 1 )
      bst.insert( 10 )
      bst.insert( 9 )
      bst.insert( 11 )
      expect( bst.findMinimum().val ).to.equal( 1 )
    })
  })
  
  context( 'delete', () => {
    it( 'should delete the root', () => {
      bst.insert( 1 )
      
      expect( bst.delete( 1 ) ).to.equal( null )
    })
    
    it( 'should delete a leaf', () => {
      bst.insert( 5 )
      bst.insert( 3 )
      bst.insert( 2 )
      bst.delete( 2 )
      expect( bst.root.left.left ).to.equal( null )
    })
    
    it( 'should delete a node with a left child where child is left of node', () => {
      bst.insert( 5 )
      bst.insert( 3 )
      bst.insert( 2 )
      bst.delete( 3 )
      expect( bst.root.left.val ).to.equal( 2 )
    })
    
    it( 'should delete a node with only left child where child is right of node', () => {
      bst.insert( 5 )
      bst.insert( 3 )
      bst.insert( 4 )
      bst.delete( 3 )
      expect( bst.root.left.val ).to.equal( 4 )
    })
    
    it( 'should delete a node with left and right child ', () => {
      bst.insert( 5 )
      bst.insert( 7 )
      bst.insert( 6 )
      bst.insert( 10 )
      bst.insert( 8 )
      bst.insert( 9 )
      bst.delete( 7 )
      
      expect( bst.root.right.val ).to.equal( 8 )
      expect( bst.root.right.left.val ).to.equal( 6 )
    }) 
  })
  
})
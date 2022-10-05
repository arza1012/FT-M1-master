class Node {
    constructor (value, next = null) {
      this.value = value;
      this.next = next
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null
    }
  
    add (data) {
      let node = new Node(data);
  
      let current = this.head;
  
      if (!current) {
        this.head = node;
        return node
      }
  
      while (current.next) {
        current = current.next
      }
  
      current.next = node
      return node
    }
  
    remove() {

        console.log('nodo', node)
  
      let value = null
      
      if(!this.head) {
        return null
      }
  
      if (!this.head.next) {
        value = this.head.value;
        console.log('value', value)
        this.head = null
        return value
      }
  
      let current = this.head
      while (current.next.next !== null) {
        current = current.next
      }
  
      value = current.next.value
      current.next = null
      return 
     
    }
  
    search(){}
  
  }

  const node1 = new Node(5)
  const list = new LinkedList()
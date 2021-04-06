class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}


class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
  
    // add(element)
    add(element)
    {
        // creates a new node
        var node = new Node(element);
        // to store current node
        var current;
      
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
      
            // iterate to the end of the
            // list
            let i = 0;
            let size = this.size_of_list();
            while (i < size-1) {
                i++;
                current = current.next;
            }
      
            // add node
            node.next = this.head;
            current.next = node;
        }
        this.size++;
    }


    // insertAt(element, location)
    insertAt(element, index)
    {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;
      
            curr = this.head;
      
            // add the element to the
            // first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
      
                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
      
                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    // removeFrom(location)
    removeFrom(index)
    {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
      
            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
      
                // remove the element
                prev.next = curr.next;
            }
            this.size--;
      
            // return the remove element
            return curr.element;
        }
    }

    // removeElement(element)
    removeElement(element)
    {
        var current = this.head;
        var prev = null;
      
        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }    
  
    // Helper Methods
    indexOf(element)
    {
        var count = 0;
        var current = this.head;
      
        // iterae over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }
      
        // not found
        return -1;
    }

    // isEmpty
    isEmpty()
    {
        return this.size == 0;
    }    
    // size_Of_List
    size_of_list()
    {
        return this.size
    }    
    // PrintList
    printList()
    {
        var curr = this.head;
        let i = 0;
        let size = this.size_of_list()
        while (i++ < this.size) {
            console.log(curr);
            curr = curr.next;
        }
    }  
    printListNoob()
    {
        var curr = this.head;
        let i = 0;
        let size = this.size_of_list()
        while (i++ < this.size) {
            let next= curr.next || 'none';   
            console.log("ELement:",curr.element);
            console.log("Next:",next.element);            
            curr = curr.next;
            console.log("+++++++++++++++++++++")             

        }
    }   
    
    


}


// Working Example
var ll = new LinkedList();
ll.add(10);

ll.add(20);
ll.add(30);

ll.insertAt(40,1);
ll.removeFrom(2);
ll.printListNoob();
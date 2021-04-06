# Algorithms for Future Use


## Implementations

```
var ll = new LinkedList();
ll.add(10);
ll.removeElement(10);
ll.add(30);
ll.printList();
```

## Class & Structure


| First Header  | Second Header |
| ------------- | ------------- |
| add(element)  | Add ELement at end of linked list  |
| insertAt(element,location)  | Insert Elmenet at desired location  |
| removeFrom(location)  | Remove element from desired location  |
| removeElement(element)  | Remove Desired Element  |
| indexOf(element)  | Get Index of a particular element  |
| isEmpty()  | Checks if Linked List is empty  |
| size_of_list()  | Returns the size of a list  |
| printList()  | Print List as structure of node  |
| printListNoob()  | Print List for easy debugging  |

### Example for printListNoob
```
ELement: 10
Next: 20
+++++++++++++++++++++
ELement: 20
Next: 30
+++++++++++++++++++++
ELement: 30
Next: 40
+++++++++++++++++++++
ELement: 40
Next: undefined
+++++++++++++++++++++
```
### Example for printList

```
Node {
  element: 10,
  next:
   Node { element: 20, next: Node { element: 30, next: [Node] } } }
Node {
  element: 20,
  next: Node { element: 30, next: Node { element: 40, next: null } } }
Node { element: 30, next: Node { element: 40, next: null } }
Node { element: 40, next: null }
```





## Algiorithms

### Single Linked List


### Doubly Linked List


### Circular Linked List

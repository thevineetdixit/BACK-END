The key difference is AVL is designed for fast in-memory searching, while B+ Tree is designed for databases/filesystems where data is stored on disk/SSD.

Feature	AVL Tree	                                      B+ Tree
Type	Self-balancing Binary Search Tree	              Balanced multi-way search tree
Children per nodeAt most 2	                              Can have many
Keys per node	Usually 1	                              Many
Height	O(log₂ n)	                                      O(logₘ n) — much smaller height
Where data is stored	Nodes can contain key + value	  Usually actual records are in leaf nodes

Searching	O(log n)	                                  O(log n)
Range queries	Less efficient	                          Very efficient
Insertion	Rotations may be required	                  Node split
Deletion	Rotations/rebalancing	                      Node merge/redistribution
Main purpose	Memory-based data structures	          Databases, filesystems, storage
Disk I/O	Not optimized for it	                      Specifically optimized for it


//the biggest adv of b+ tree is that it can efficiently handle range queries better than any structure,
it has the leaf nodes connected to next consecutive leaf nodes 

//BSON = binary JSON 
coz it can sotore data types which are not stored in JSON purely,it also has a data type called date ,
the JSON only have four data types string , bool , number and null ,and additional two complex data types i.e 
    OBJECT AND ARRAY but mongo have some additonal too,

    
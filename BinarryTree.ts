class TreeNode<TData> {
    public leftNode:TreeNode<TData>;
    public rightNode:TreeNode<TData>;
    public data:TData;

    constructor(leftNode:TreeNode<TData>, rightNode:TreeNode<TData>, data:TData) {
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.data = data;
    }
}

class BinTree<TData> {
    public root:TreeNode<TData>;

    private internalInsert(currentNode:TreeNode, data:TData) {
        if (data < currentNode.data && currentNode.leftNode === null) {
            currentNode.leftNode = new TreeNode<TData>(null, null, data);
        } else if (data < currentNode.data && currentNode.leftNode !== null) {
            this.internalInsert(currentNode.leftNode, data);
        } else if (data >= currentNode.data && currentNode.rightNode === null) {
            currentNode.rightNode = new TreeNode<TData>(null, null, data);
        } else {
            this.internalInsert(currentNode.rightNode, data);
        }
    }

    constructor() {
        this.root = null;
    }

    public insert(data:TData) {
        if (this.root === null) {
            this.root = new TreeNode(null, null, data);
        } else {
            this.internalInsert(this.root, data);
        }
    }

    public traverse() {
        this.preOrderTraverseInternal(this.root);
    }

    private preOrderTraverseInternal(node:TreeNode<TData>) {
        if (node === null) {
            return;
        }

        this.preOrderTraverseInternal(node.leftNode);
        console.log(node.data);
        this.preOrderTraverseInternal(node.rightNode);
    }
}

var myTree = new BinTree<number>();
myTree.insert(10);
myTree.insert(3);
myTree.insert(1);
myTree.insert(5);
myTree.traverse();


var myStringTree = new BinTree<string>();
myStringTree.insert('ccc');
myStringTree.insert('eyal');
myStringTree.insert('aaa');
myStringTree.insert('bbb');
myStringTree.traverse();


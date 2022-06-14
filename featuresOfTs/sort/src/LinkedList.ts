class LLNode {
    next: LLNode | null = null
    constructor(public data: number) {

    }
}

export class LinkedList {
    head: LLNode | null = null;

    add(data: number): void {
        const node = new LLNode(data)

        if (!this.head) {
            this.head = node
            return
        }

        let tail = this.head
        while (tail.next) {
            tail = tail.next
        }
        tail.next = node
        return
    }

    get length(): number {
        let cnt = 1
        if (!this.head) {
            return cnt
        }
        let temp = this.head
        while (temp.next) {
            cnt += 1
            temp = temp.next
        }
        return cnt
    }

    at (index: number): LLNode{
        if(!this.head){
            throw new Error('Index out of bounds')
        }

        let cnt = 0
        let node: null | LLNode = this.head

        while(node){
            if(cnt == index) {
                return node
            } else {
                cnt++
                node = node.next
            }
        }
        
        throw new Error("Index out of bounds")
    }

    compare(leftIndex: number, rightIndex: number): boolean{
        if(!this.head){
            throw new Error('List is empty')
        }

        return this.at(leftIndex).data > this.at(rightIndex).data
    }

    swap(leftIndex: number, rightIndex: number){
        const leftNode = this.at(leftIndex)
        const rightNode = this.at(rightIndex)

        const leftHand = leftNode.data
        leftNode.data = rightNode.data
        rightNode.data = leftHand
    }

    print(): void {
        if(!this.head){
            return
        } else {
            let node: LLNode | null = this.head
            while(node){
                console.log(node.data)
                node = node.next
            }
        }
    }
}
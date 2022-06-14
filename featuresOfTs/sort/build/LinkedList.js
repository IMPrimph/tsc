"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class LLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const node = new LLNode(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
        return;
    }
    get length() {
        let cnt = 1;
        if (!this.head) {
            return cnt;
        }
        let temp = this.head;
        while (temp.next) {
            cnt += 1;
            temp = temp.next;
        }
        return cnt;
    }
    at(index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        let cnt = 0;
        let node = this.head;
        while (node) {
            if (cnt == index) {
                return node;
            }
            else {
                cnt++;
                node = node.next;
            }
        }
        throw new Error("Index out of bounds");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    print() {
        if (!this.head) {
            return;
        }
        else {
            let node = this.head;
            while (node) {
                console.log(node.data);
                node = node.next;
            }
        }
    }
}
exports.LinkedList = LinkedList;

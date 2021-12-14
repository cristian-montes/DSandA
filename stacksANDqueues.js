class Stack {
    #list = [];
  
    push(item) {
      //implement me
      return this.#list.push(item);
    }
  
    pop() {
      //implement me
      const list = this.#list;
      return list.length ? this.list.pop() : null;
    }
  
    peek() {
      //implement me
      const list = this.#list;

      return list.lenght ? list[this.list.length-1] : null;
    }
  
    get size() {
      //implement me
        return this.#list.length
    }
}

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
// console.log(stack.pop()); // 'lizard'
// console.log(stack.peek()); // 'goose'
// console.log(stack.pop()); // 'goose'
// stack.push('llama');
// console.log(stack.pop()); // 'llama'
// console.log(stack.peek()); // 'fox'
// console.log(stack.pop()); // 'fox'
// console.log(stack.pop()); // null
console.log(stack.size)
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

// const stack = new Stack();
// stack.push('fox');
// stack.push('goose');
// stack.push('lizard');
// console.log(stack.pop()); // 'lizard'
// console.log(stack.peek()); // 'goose'
// console.log(stack.pop()); // 'goose'
// stack.push('llama');
// console.log(stack.pop()); // 'llama'
// console.log(stack.peek()); // 'fox'
// console.log(stack.pop()); // 'fox'
// console.log(stack.pop()); // null
// console.log(stack.size)


class Queue {
    #list = [];

    enqueue(item){
        //insertion operation, it is inserted at the end of the queue
        //one article I looked up reccommends using the push method for this
        return this.#list.push(item)
    }

    dequeue(){
        //removal operation, it is removed from the front
        //the same article also mentioned using the shift method
        const list = this.#list
        return list.length ? list.shift() : null;
    }

    hasNext(){
        //this is used to check if there are any elements remaining
        //I think it only does true and false
        return !!this.#list.length
    }

    get size() {
        //implement me
          return this.#list.length
      }
}

// const queue = new Queue();
// queue.enqueue('fox');
// queue.enqueue('goose');
// queue.enqueue('lizard');
// console.log(queue.dequeue()); // 'fox'
// console.log(queue.hasNext()); // true
// console.log(queue.dequeue()); // 'goose'
// queue.enqueue('llama');
// console.log(queue.dequeue()); // 'lizard'
// console.log(queue.hasNext()); // true
// console.log(queue.dequeue()); // 'llama'
// console.log(queue.hasNext()); // false
// console.log(queue.dequeue()); // null


// Most likely, the time complexity of your enqueue is O(1) but dequeue is O(n). Can you make it so both operations are O(1)? Hint: the people in line can't shift (take a step forward), can you move the front of the line?
// What is the trade-off of this approach?

class Queue {
    #list = [];
    #index = 0;

    enqueue(item){
        //insertion operation, it is inserted at the end of the queue
        //one article I looked up reccommends using the push method for this
        return this.#list.push(item)
    }

    dequeue(){
        //removal operation, it is removed from the front
        //the same article also mentioned using the shift method
        const list = this.#list
        const item = list[this.#index];
        if(!this.hasNext()) return null;
        return item
    }

    hasNext(){
        //this is used to check if there are any elements remaining
        //I think it only does true and false

        return !!this.size
    }

    get size() {
        //implement me
          return this.#list.length -  this.#index
      }
}

list = ['fox', 'goose', 'lizzard']
//if(list[list[0]] ===  undefined){ list.pop()}

// const queue = new Queue();
// queue.enqueue('fox');
// queue.enqueue('goose');
// queue.enqueue('lizard');
// console.log(queue.dequeue()); // 'fox'
// console.log(queue.hasNext()); // true
// console.log(queue.dequeue()); // 'goose'
// queue.enqueue('llama');
// console.log(queue.dequeue()); // 'lizard'
// console.log(queue.hasNext()); // true
// console.log(queue.dequeue()); // 'llama'
// console.log(queue.hasNext()); // false
// console.log(queue.dequeue()); // null




// Write a function that takes a string of code and uses a Stack for determining if parenthesis and curly braces are properly matched. Return true if correctly formatted, otherwise false
function checkSyntax(str){

    const stack = new Stack();
    
    for(let i = 0; i< str.length; i++){
        let char = str[str.length-1] // }

        if( str[i] === "(" || str[i] === "[" || str[i] === "{"){
            stack.push(str[i]);
        } else if (
            (char === "(" && str[i] === ")") ||
            (char === "[" && str[i] === "]") ||
            (char === "{" && str[i] === "}")
        ){
            stack.pop()
        }
        //  else return false;
    }

    return stack.size ? false : true;


}

// if (true( { return; }	false
// if (true) { return;	false
// (if(true) { return; }	false
// ( true && { name: 'foo' } )	true
// ( true && { name: 'foo' ) )	false
// ( true && ( name: 'foo' } )	false
// ((2 + 3) * (4 + 11 * (2 - 1)))	true
// ((2 + 3) * (4 + 11 * 2 - 1)))	false
// ((2 + 3) * (4 + 11 * (2 - 1))	false


let x = () => {
  this.context = "Parent"
  var suit = () => {
    this.suit = "Suit"
    let bob = { 
      context: 'bob',
      fat: () => {
        this.fat = 'fatty'
        console.log('@fat', this)
      },
      fn() { 
        this.reg = 'regular'
        console.log('@fun', this);
        this.fat()
      }
    }
    // bob.fat()
    // bob.fn()
    return bob
  }

  // suit().fat()
  suit().fn()
}
x()

// var obj = {
//   id: 42,
//   counter: function counter() {
//     setTimeout(() => {
//       console.log(this); //-> { id: 42, counter: [Function: counter] } why?!
//     }, 1000);
//   }
// };

// obj.counter()
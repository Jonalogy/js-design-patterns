const Foo = function(i){
  this.input = i
  this.inc = function(){ this.input++; return this}
  this.custom = function(callback) {
    this.input = callback(this.input);
    return this
  }
  this.total = function(){ return this.input }
}

console.log((new Foo(1)).inc().inc().inc().custom((partialSum) => (partialSum * 2)).total())


// console.log(new Foo().inc())

// class Foo {
//   constructor(){
//     console.log("this")
//   }
//   inc(){
//     return this
//   }
// }

// const F = new Foo() // Class constructor Foo cannot be invoked without 'new'
// console.log(F.inc())
class Observable {
  constructor (price) {
    this.price = price
  }

  priceWatch(){
    return new Promise(resolve => {
      setTimeout(()=>resolve('11'), 1000)      
    })
  }

  async onChange(callback){
    this.price = await this.priceWatch()
    // console.log(`Price has been updated to ${this.price}`)
    callback(this.price)
  }

  subscribe(callback){
    this.onChange(callback)
  }
}

let price = 10
const Book = new Observable(price)
Book.subscribe( i => console.log('Price updates: ' + i))


setTimeout(() => console.log('---'), 5000)
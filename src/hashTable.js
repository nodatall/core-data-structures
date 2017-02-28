export default class HashTable {
  constructor() {
    this.vault = []
  }

  size() {
    return this.vault.length
  }

  put(key, value) {
    console.log('hello', this.constructor.hash(key))
  }

  static hash(keyString) {
    let crazyNumber = 0
    for ( let letter of keyString ) {
      crazyNumber += letter.charCodeAt(0)
    }

    return crazyNumber % 1000
  }
}

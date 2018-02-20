class Sorter {
  constructor() {
    this.arr = [];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let temp;
    if (indices.length === 2) {
      if (this.arr[indices[0]] > this.arr[indices[1]]) {
        temp = this.arr[indices[0]];
        this.arr[indices[0]] = this.arr[indices[1]];
        this.arr[indices[1]] = temp;
      }
    }
    if (indices.length === 3) {
      if (this.arr[indices[0]] > this.arr[indices[1]]) {
        temp = this.arr[indices[0]];
        this.arr[indices[0]] = this.arr[indices[1]];
        this.arr[indices[1]] = temp;
      } 
      if (this.arr[indices[1]] > this.arr[indices[2]]) {
        temp = this.arr[indices[1]];
        this.arr[indices[1]] = this.arr[indices[2]];
        this.arr[indices[2]] = temp;
      } 
      if (this.arr[indices[0]] > this.arr[indices[1]]) {
        temp = this.arr[indices[0]];
        this.arr[indices[0]] = this.arr[indices[1]];
        this.arr[indices[1]] = temp;
      } 
    }

  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
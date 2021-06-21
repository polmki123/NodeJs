function abc() {
    this.name = "안녕";
    this.color = "red";
}

abc.prototype.logging = function(){
    console.log(this.color);
}

var test = new abc();
test.logging();

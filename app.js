function remove(string) {
    let myStr = string;
    myStr = myStr.replaceAll('!', '');
    return myStr += "!";
}

console.log(remove("Hi!")); // "Hi!"
console.log(remove("Hi!!!")); // "Hi!"
console.log(remove("!Hi")); // "Hi!"
console.log(remove("!Hi!")); // "Hi!"
console.log(remove("Hi! Hi!")); // "Hi Hi!"
console.log(remove("Hi!")); // "Hi!"
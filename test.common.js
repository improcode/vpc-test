// min 2-3 tests for every function 

const _unique = (_arrayOfNumbers) => {
    // return only unique numbers in new array

    return _arrayOfNumbers.filter((value, index, self) => (self.indexOf(value) === index))


}

const _isOdd = (value) => {
    // if value is odd then true
    if (value % 2 === 0) {
        return true
    } else {
        return false
    }

}

const _isEmail = (str) => {
    // *if str is email-like then true 
    // find regexp on stackoverflow :)

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(str.toLowerCase());

}


const _mapForArray = (_array, callback) => {
    // use for/while loop
    // same functionalty as map
    var _arrayAfterMap = []
    for (var i = 0; i<_array.length; i++) {
        _arrayAfterMap.push(callback(_array[i]))
    }
    return _arrayAfterMap
}

const _mapForObject = (_object, callback) => {
    // *use for/while loop
    // same functionalty as map but for object values



}

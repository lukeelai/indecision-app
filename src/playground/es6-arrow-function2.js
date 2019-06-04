const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(1,2));

const user = {
    name: 'Luke',
    cities: ['Davis', 'Cerritos', 'Santa Cruz'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city); 
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 10,
    multiply(){
        return this.numbers.map((x) => x * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
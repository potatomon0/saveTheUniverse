let max = 6;
let min = 3;
let hull = Math.random()*(6-3)+3;

class alien {
    constructor(hull,firepower,accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    randHull(){
        this.hull = Math.random()*(6-3)+3;
        let newHull = Math.floor(this.hull)
        return newHull;
    }
    randfirepower(){
        this.firepower = Math.random()*(4-2)+2;
        this.hull = this.hull.toFixed(1)
        return this.firepower;
    }
    randaccuracy(){
        this.accuracy = Math.random()*(0.8-0.6)+0.6;
        this.accuracy = this.accuracy.toFixed(1)
        return this.accuracy;
    }
}
const alien0 = new alien();
let a0 = {
    name: 'Obliterator',
    img:'https://media.tenor.com/2F0hFbYUP3IAAAAM/rubbing-hands-evil-smile.gif',
    hull:alien0.randHull(),
    firepower:alien0.randfirepower(),
    accuracy:alien0.randaccuracy()
}
console.log(a0.hull)
//player's ship: USS Assembly
    //hull === 20
    //firepower === 5
    //accuracy === 0.7
let player1 = {
    health:6,
    hull:20,
    firepower:5,
    accuracy:0.7
}
//alien ships:
    //hull === 3-6
    //firepower === 2-4
    //accuracy === 0.6-0.8
    //each alien spaceship can have their own unique values using Math.random()
//six alien ships; fight alien ships in order
// const alienShip = [a0,a1,a2,a3,a4,a5];
// console.log(alienShip)
//ship properties:
    //hull === hp
    //firepower === amount of damage on a successful hit
    //accuracy === chance between 0 and 1 that attack will hit target
class alien {
    constructor(health,hull,firepower,accuracy){
        this.health = health;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    randHull(){
        // this.hull = (Math.random()*max-min)+min;
        // let rounded = (Math.round(this.hull *10)/10)
        // return rounded.toFixed(1)
        return 3;
    }
    randfirepower(){
        // this.firepower = Math.random()
        return 2
    }
    randaccuracy(){
        return 0.6
    }
}
const alien0 = new alien();
const alien1 = new alien();
const alien2 = new alien();
const alien3 = new alien();
const alien4 = new alien();
const alien5 = new alien();
a0 ={
    health:40,
    hull:alien0.randHull(),
    firepower:alien0.randfirepower(),
    accuracy:alien0.randaccuracy()
}
let dialogue1 = document.querySelector('.dialogue1');
let dialogue2 = document.querySelector('.dialogue2');
let playerHealth = document.querySelector('.hp1');
let alienHealth = document.querySelector('.hp2');
let playerBtn = document.querySelector('.attack1');
let alienBtn = document.querySelector('.attack2');
let centerContainer = document.querySelector('.centerContainer');
let playerTurn = true;
let alienTurn = false;
// console.log(a0.health-10)
    //example of using accuracy:
    // if(Math.random()<aliem[0].accuracy){
        // console.log('You have been hit!')
    // }
//turn based, until one side hp < 0
    //if alien hp < 0; attack next ship or retreat
    //if player retreat, leave that for open development
    //player has to destroy all alien ships to win
    //player lose if hp < 0
const playerAtk=()=>{
    a0.health -= player1.firepower;
    alienHealth.innerHTML = "";
    alienHealth.innerHTML = a0.health;
    console.log(a0.health);
    return a0.health;
}
const alienAtk=()=>{
    player1.health -= a0.firepower;
    playerHealth.innerHTML = "";
    playerHealth.innerHTML = player1.health;
    console.log(player1.health);
    return player1.health;
}
const checkHP=()=>{
    if(player1.health < 1){
        dialogue1.innerHTML = "You Lose! Humanity is destroyed."
        playerBtn.innerHTML = ''
    }else if(a0.health<1){
        dialogue2.innerHTML = "My superior will obliterate you!"
        retreat();
    }
}
const retreat=()=>{
    // centerContainer.innerHTML = ""
    let retreatTxt = document.createElement('p')
    retreatTxt.setAttribute('class','retreatTxt')
    retreatTxt.innerHTML = 'Do you wish to retreat? Remember, humanity is at steak'
    centerContainer.append(retreatTxt)
    let yesBtn = document.createElement('button');
    yesBtn.setAttribute('class','yesBtn');
    yesBtn.innerHTML = 'Yes'
    centerContainer.append(yesBtn)
    let noBtn = document.createElement('button');
    noBtn.setAttribute('class','noBtn');
    noBtn.innerHTML = 'No'
    centerContainer.append(noBtn)
}
const playerMove =()=>{
    if(playerTurn === true && alienTurn ===false){
        playerAtk();
        playerTurn = false;
        alienTurn = true;
        checkHP();
    }
}
const alienMove=()=>{
    if(playerTurn===false && alienTurn === true){
        alienAtk();
        playerTurn = true;
        alienTurn=false;
        checkHP();
    }
}
//player's ship: USS Assembly
    //hull === 20
    //firepower === 5
    //accuracy === 0.7
let player1 = {
    // health:10,
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
    constructor(hull,firepower,accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    randHull(){
        this.hull = Math.random()*(10-5)+5;
        let newHull = Math.floor(this.hull);
        return newHull;
    }
    randfirepower(){
        // this.firepower = Math.random()*(4-2)+2;
        // let newFirepower = Math.floor(this.hull)
        // return newFirepower;
        return 4;
    }
    randaccuracy(){
        this.accuracy = Math.random()*(0.8-0.6)+0.6;
        let newAccuracy = this.accuracy.toFixed(1)
        return newAccuracy;
    }
}
const alien0 = new alien();
const alien1 = new alien();
const alien2 = new alien();
const alien3 = new alien();
const alien4 = new alien();
const alien5 = new alien();

let a0 = {
    name: 'Obliterator',
    img:'https://media.tenor.com/2F0hFbYUP3IAAAAM/rubbing-hands-evil-smile.gif',
    hull:alien0.randHull(),
    firepower:alien0.randfirepower(),
    accuracy:alien0.randaccuracy()
}
let a1 = {
    name:'UpgradO',
    img:'https://i.pinimg.com/originals/a9/d8/cf/a9d8cf979e970d0a94d3c89d5c9992af.gif',
    hull:alien1.randHull(),
    firepower:alien1.randfirepower(),
    accuracy:alien1.randaccuracy()
}
let a2 = {
    name:'EvilKit',
    img:'https://i.gifer.com/QO1f.gif',
    hull:alien2.randHull(),
    firepower:alien2.randfirepower(),
    accuracy:alien2.randaccuracy()
}
let a3 = {
    name:'PooDoo',
    img:'https://media4.giphy.com/media/5deNCPz78wpy62u4bk/200w.gif?cid=6c09b9524usk0cnhwwcing1p3ts6x34i1eice1gb4ye5ti4k&ep=v1_gifs_search&rid=200w.gif&ct=g',
    hull:alien3.randHull(),
    firepower:alien3.randfirepower(),
    accuracy:alien3.randaccuracy()
}
let a4={}
let a5={}
const alienList = [a0,a1,a2,a3,a4,a5]
let count=0;
let currentAlien = alienList[count];
// let currentAlien = alienList.
let dialogue1 = document.querySelector('.dialogue1');
let dialogue2 = document.querySelector('.dialogue2');
let playerHealth = document.querySelector('.hp1');
let alienHealth = document.querySelector('.hp2');
let playerBtn = document.querySelector('.attack1');
let alienBtn = document.querySelector('.attack2');
let centerContainer = document.querySelector('.centerContainer');
let alienName = document.querySelector('.alienName')
let buttonContainer = document.querySelector('.buttonContainer');
let playerTurn = true;
let alienTurn = false;
let damageLog = document.querySelector('.damageLog')
// let startgame = doument.querySelector('.start')
const start =()=>{
    console.log(`alien HP: ${alienList[count].hull}`);
    console.log(`Player1 HP: ${player1.hull}`);
    alienHealth.innerHTML = alienList[count].hull;
    playerHealth.innerHTML = player1.hull;
    alienName.innerHTML = alienList[count].name;
    retreatTxt.innerHTML = "";
    buttonContainer.innerHTML = '';
}
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
    alienList[count].hull -= player1.firepower;
    alienHealth.innerHTML = "";
    alienHealth.innerHTML = alienList[count].hull;
    damageLog.innerHTML = ""
    damageLog.append(`player1 did ${player1.firepower} damage`)
    // return alienList[count].hull;
}
const alienAtk=()=>{
    player1.hull -= alienList[count].firepower;
    playerHealth.innerHTML = "";
    playerHealth.innerHTML = player1.hull;
    damageLog.innerHTML = ""
    damageLog.append(`${alienList[count].name} did ${alienList[count].firepower} damage`)
    // console.log(player1.hull);
    // return player1.hull;
}
const playerMove =()=>{
    console.log(`Player1 stats: HP = ${player1.hull}, Firepower = ${player1.firepower}, Accuracy = ${player1.accuracy}`)
    if(playerTurn === true && alienTurn ===false){
        if(alienList[count].hull > player1.firepower){
            playerAtk();
            playerTurn = false;
            alienTurn = true;
        }else if(alienList[count].hull < player1.firepower){
            damageLog.innerHTML = ""
            damageLog.append(`player1 did ${player1.firepower} damage`)
            dialogue2.innerHTML = "My superior will obliterate you!";
            alienHealth.innerHTML = "0"
            currentAlien = alienList[count++];
            retreat();
        }
    }
}
const alienMove=()=>{
    // console.log(`${alienList[count].name} stats: HP = ${alienList[count].hull}, Firepower = ${alienList[count].firepower}, Accuracy = ${alienList[count].accuracy}`)
    if(playerTurn===false && alienTurn === true){
        if(player1.hull > alienList[count].firepower){
            alienAtk();
            playerTurn = true;
            alienTurn=false;
        }else if(player1.hull<=alienList[count].firepower){
            alienHealth.innerHTML = "0"
            dialogue1.innerHTML = "You Lose! Humanity is destroyed."
            playerBtn.innerHTML = ''
        }
    }
}
let retreatTxt = document.createElement('p')
const retreat=()=>{
    retreatTxt.setAttribute('class','retreatTxt')
    retreatTxt.innerHTML = 'Do you wish to retreat? Remember, humanity is at steak'
    buttonContainer.append(retreatTxt)
    let yesBtn = document.createElement('button');
    yesBtn.setAttribute('class','yesBtn');
    yesBtn.innerHTML = 'Yes'
    buttonContainer.append(yesBtn)
    // count++
    let noBtn = document.createElement('button');
    noBtn.setAttribute('class','noBtn');
    noBtn.innerHTML = 'No'
    buttonContainer.append(noBtn)
    noBtn.setAttribute('onclick','switchAlien(currentAlien.img)');
}
// const clearCenter=()=>{
//     retreatTxt.innerHTML = "";
//     buttonContainer.innerHTML = '';
// }
const switchAlien=(temp)=>{
    console.log('working here')
    let alienShip = document.querySelector('.alienShip')
    console.log("working here")
    let alienPic = document.createElement('img')
    alienPic.setAttribute('src',temp)
    alienShip.replaceWith(alienPic)
    start();
}

// let switchAlien = (alien) =>{
//     count++
//     let newAlien = document.querySelector('.alienShip')
//     let aliYun = document.createElement('img')
//     aliYun.setAttribute('src','')
//     newAlien.replaceWith('')
// }
// let alien10 = {
//     name:"",
//     hp:"health",
//     img:""
// }
// let allAlien = [alien1,alien2,alien3];
//onclick="switchAlien(allAliens[counter])"
//make switch alien button
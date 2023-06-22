//player's ship: USS Assembly
//hull === 20
//firepower === 5
//accuracy === 0.7
let player1 = {
    hull: 100,
    firepower: 5,
    accuracy: 0.7
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
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    randHull() {
        this.hull = Math.random() * (20 - 10) + 10;
        let newHull = Math.floor(this.hull);
        return newHull;
    }
    randfirepower() {
        this.firepower = Math.random()*(5-2)+2;
        let newFirepower = Math.floor(this.hull)
        return newFirepower;
    }
    randaccuracy() {
        this.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
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
    name: 'Oblierator',
    img: 'https://38.media.tumblr.com/a55b20d4966519ad2cfd838cf35887c1/tumblr_n6b0ji9Fyh1r0gffeo1_400.gif',
    hull: alien0.randHull(),
    firepower: alien0.randfirepower(),
    accuracy: alien0.randaccuracy()
}
let a1 = {
    name: 'UpgradeO',
    img: 'https://media.tenor.com/2F0hFbYUP3IAAAAM/rubbing-hands-evil-smile.gif',
    hull: alien1.randHull(),
    firepower: alien1.randfirepower(),
    accuracy: alien1.randaccuracy()
}
let a2 = {
    name: 'AngryO',
    img: 'https://i.pinimg.com/originals/a9/d8/cf/a9d8cf979e970d0a94d3c89d5c9992af.gif',
    hull: alien2.randHull(),
    firepower: alien2.randfirepower(),
    accuracy: alien2.randaccuracy()
}
let a3 = {
    name: 'EvilKit',
    img: 'https://i.gifer.com/QO1f.gif',
    hull: alien3.randHull(),
    firepower: alien3.randfirepower(),
    accuracy: alien3.randaccuracy()
}
let a4 = {
    name: 'PooDoo',
    img: 'https://media4.giphy.com/media/5deNCPz78wpy62u4bk/200w.gif?cid=6c09b9524usk0cnhwwcing1p3ts6x34i1eice1gb4ye5ti4k&ep=v1_gifs_search&rid=200w.gif&ct=g',
    hull: alien4.randHull(),
    firepower: alien4.randfirepower(),
    accuracy: alien4.randaccuracy()
}
let a5 = {}
const alienList = [a0, a1, a2, a3, a4, a5]
let count = 0;
let currentAlien = alienList[count];
let dialogue1 = document.querySelector('.dialogue1');
let dialogue2 = document.querySelector('.dialogue2');
let playerHealth = document.querySelector('.hp1');
let alienHealth = document.querySelector('.hp2');
let playerBtn = document.querySelector('.attack1');
let alienBtn = document.querySelector('.attack2');
let centerContainer = document.querySelector('.centerContainer');
let alienName = document.querySelector('.alienName')
let buttonContainer = document.querySelector('.buttonContainer');
let alienShip = document.querySelector('.alienShip')
let alienImg = document.querySelector('.alienImg')
let stats1 = document.querySelector('.stats1')
let stats2 = document.querySelector('.stats2')
let playerTurn = true;
let alienTurn = false;
let damageLog = document.querySelector('.damageLog')
const start = () => {
    console.log(`alien HP: ${alienList[count].hull}`);
    console.log(`Player1 HP: ${player1.hull}`);
    alienHealth.innerHTML = alienList[count].hull;
    playerHealth.innerHTML = player1.hull;
    alienName.innerHTML = alienList[count].name;
    resetScreen();
}
//example of using accuracy:
// if(Math.random()<aliem[0].accuracy){
// console.log('You have been hit!')
// }
//turn based, until one side hp < 0
//if alien hp < 0; attack next ship or retreat
//if player retreat, leave that for open development
//player has to destroy all alien ships to win
//player lose if hp < 0
const playerAtk = () => {
    alienList[count].hull -= player1.firepower;
    alienHealth.innerHTML = "";
    alienHealth.innerHTML = alienList[count].hull;
    damageLog.innerHTML = ""
    damageLog.append(`player1 did ${player1.firepower} damage`)
}
const alienAtk = () => {
    player1.hull -= alienList[count].firepower;
    playerHealth.innerHTML = "";
    playerHealth.innerHTML = player1.hull;
    damageLog.innerHTML = ""
    damageLog.append(`${alienList[count].name} did ${alienList[count].firepower} damage`)
}
let shootLeft = document.querySelector(".shootLeft")
let shootRight = document.querySelector(".shootRight")
const fireBallLeft = ()=>{
    shootLeft.innerHTML = ""
    let ballLeft = document.createElement('img')
    ballLeft.setAttribute('src','https://i.pinimg.com/originals/15/1b/85/151b8518ed9931d583f94adb74a4ac33.gif')
    ballLeft.setAttribute('class','ballLeft')
    shootLeft.append(ballLeft)
}
const fireBallRight = ()=>{
    shootRight.innerHTML = ""
    let ballRight = document.createElement('img')
    ballRight.setAttribute('src','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/550d9157-b095-4115-9585-eb34273e960c/dbe2upi-913e0b7c-42a6-4846-b387-cf4e4c46267c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MGQ5MTU3LWIwOTUtNDExNS05NTg1LWViMzQyNzNlOTYwY1wvZGJlMnVwaS05MTNlMGI3Yy00MmE2LTQ4NDYtYjM4Ny1jZjRlNGM0NjI2N2MuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yc9sZi5_J1Nd3DambxV5OXZlEqXtZm6ixWF-UEA2nEM')
    ballRight.setAttribute('class','ballRight')
    shootRight.append(ballRight)
}
const playerMove = () => {
    console.log(`Player1 stats: HP = ${player1.hull}, Firepower = ${player1.firepower}, Accuracy = ${player1.accuracy}`)
    if (playerTurn === true && alienTurn === false) {
        if (alienList[count].hull > player1.firepower) {
            let randNum = (Math.floor(Math.random()*(8-6)+6))/10
            if(randNum >= player1.accuracy){
            playerAtk();
            fireBallLeft();
            playerTurn = false;
            alienTurn = true;
            }else{
                damageLog.innerHTML = `player1 did ${player1.firepower} damage but ${alienList[count].name} dodged the attack!`
                fireBallLeft();
                playerTurn = false;
                alienTurn = true;
            }
        } else if (alienList[count].hull <= player1.firepower) {
            damageLog.innerHTML = ""
            damageLog.append(`player1 did ${player1.firepower} damage`)
            fireBallLeft();
            dialogue2.innerHTML = "My superior will obliterate you!";
            alienHealth.innerHTML = "0"
            count++;
            retreat();
        }
    }
}
const alienMove = () => {
    if (playerTurn === false && alienTurn === true) {
        if (player1.hull > alienList[count].firepower) {
            let randNum = (Math.floor(Math.random()*(10-6 +1)+6))/10
            if(randNum >= alienList[count].accuracy){
            alienAtk();
            fireBallRight()
            playerTurn = true;
            alienTurn = false;
        } else{
            damageLog.innerHTML = `${alienList[count].name} did ${alienList[count].firepower} damage but player1 dodged the attack!'`
            fireBallRight()
                playerTurn = true;
                alienTurn = false;
        }
        } else if (player1.hull <= alienList[count].firepower) {
            alienHealth.innerHTML = "0"
            dialogue1.innerHTML = "You Lose! Humanity is destroyed."
            playerBtn.innerHTML = ''
            alert('You lost and the aliens took over the universe and made everyone MISERABLE')
        }
    }
}
let retreatTxt = document.createElement('p')
const retreat = () => {
    playerTurn = true;
    alienTurn = false;
    retreatTxt.setAttribute('class', 'retreatTxt')
    retreatTxt.innerHTML = 'Do you wish to retreat? Remember, humanity is at steak'
    buttonContainer.append(retreatTxt)
    let yesBtn = document.createElement('button');
    yesBtn.setAttribute('class', 'yesBtn');
    yesBtn.innerHTML = 'Yes'
    buttonContainer.append(yesBtn)
    yesBtn.setAttribute('onclick','flee()')
    let noBtn = document.createElement('button');
    noBtn.setAttribute('class', 'noBtn');
    noBtn.innerHTML = 'No'
    buttonContainer.append(noBtn)
    noBtn.setAttribute('onclick', 'plugNSwitch(alienList[count])');
}
const flee = () =>{
    alert('You had nowhere to run, the aliens caught up and blew up your ship')
    buttonContainer.innerHTML = ''
}
const resetScreen=()=>{
    stats1.innerHTML = `Player stats: HP = ${player1.hull}, firepower = ${player1.firepower}, accuracy = ${player1.accuracy}`
    stats2.innerHTML = `Player stats: HP = ${alienList[count].hull}, firepower = ${alienList[count].firepower}, accuracy = ${alienList[count].accuracy}`
    buttonContainer.innerHTML = ''
    dialogue2.innerHTML = ''
    damageLog.innerHTML = ''
}
const plugNSwitch=(temp)=>{
    alienHealth.innerHTML = temp.hull;//switch HP
    alienName.innerHTML = temp.name;//switch name
    alienImg.setAttribute('src',temp.img);
    player1.firepower = player1.firepower;
    resetScreen();
}
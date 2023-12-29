let allImg = document.querySelectorAll(".img-box");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let msg=document.querySelector("#msg");
let countClick=document.querySelector("#countClick");
let CountUser=document.querySelector("#CountUser");
let countComputer=document.querySelector("#countComputer");
let countDraw=document.querySelector("#countDraw");
let userWin = 0;
let compWin = 0;
let noOfClick=0;
let Draw=0;
const checkwinner = (compChoice, userInput) => {
    console.log("Computer choice", compChoice);
    console.log("User Choice", userInput);
    if (compChoice === userInput) {
        msg.innerText=`User ${userInput} Vs Computer ${compChoice} = Draw`;
        msg.style.backgroundColor="blue";
        Draw++;
    }

    else {
        let user = true;
        if (userInput === "rock") {
            user = compChoice === "paper" ? false : true;
        }

        else if (userInput === "paper") {
            user = compChoice === "rock" ? true : false;
        }

        else {
            user = compChoice === "rock" ? false : true;
        }
        updateWinner(user,compChoice,userInput);
    }

}
  
const updateWinner = (user,compChoice,userInput) => {
    if (user === true) {
        userWin++;
        userScore.innerText = userWin;
        msg.innerText=`User ${userInput} beat Computer ${compChoice}`;
        msg.style.backgroundColor="green";       
    }
    else {
        compWin++;
        compScore.innerText = compWin;
        msg.innerText=`Computer  ${compChoice} beat user ${userInput}`;
        msg.style.backgroundColor="red";
    }
}

const compOutput = () => {
    let arr = ["rock", "paper", "scissors"];
    let no = Math.floor(Math.random() * 3);
    return arr[no];
}

let usereIn = (img) => {
    return img.getAttribute("id");
}
let countclick=()=>{
     noOfClick++;
     countClick.innerText=`No of clicks are = ${noOfClick}`;
}

  const usserVal=()=>{
    CountUser.innerText=`User win = ${userWin}`;
  }

  const countcomputer=()=>{
    countComputer.innerText=`Computer win = ${compWin}`;
  }
  const draw=()=>{
    countDraw.innerText=`Draw = ${Draw}`;
  }

allImg.forEach((img) => {
    img.addEventListener("click", () => {
        let userInput = usereIn(img);
        let compOut = compOutput();
        checkwinner(compOut, userInput);


        countclick();
        usserVal();
        countcomputer();
        draw();
    })
});


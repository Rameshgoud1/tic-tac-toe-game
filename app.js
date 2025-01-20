let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('#reset');
let msg=document.querySelector('#winner');
let newgame=document.querySelector('#new-button');
let msg_container=document.querySelector('.msg-container');
let draw_container=document.querySelector('.draw-container')
let turnO=true;//O turn
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=()=>{
      turnO=true;
      enable();
}

const showWinner=(winner)=>{
         msg.innerText=`Congratulations! Winner is ${winner}`;
         msg_container.classList.remove('hide');
         disable();
}
const draw=()=>{
     draw_container.classList.remove('draw');
}
let flag=0;
const  checkWinner=()=>{
    for(pattern of winPatterns){
        let [a,b,c]=pattern;
        if(boxes[a].innerText!='' && boxes[b].innerText!='' && boxes[c].innerText!=''){
           if(boxes[a].innerText=== boxes[b].innerText  && boxes[b].innerText ===boxes[c].innerText){
            flag++;
            showWinner(boxes[a].innerText);
           }
        }
    }
    return;
}
let count=0;
boxes.forEach((box)=>{
       box.addEventListener('click',()=>{
          if(turnO==true){
            box.style.color='white';
            box.style.backgroundColor='rgb(61, 209, 180)'
            box.innerText='O';
            turnO=false;  
          }
          else{
            box.style.backgroundColor='rgb(235, 235, 54)'
            box.innerText='X';
            turnO=true;
          }
          count++;
          box.disabled=true; 
          checkWinner();
          if(count===9 && !flag) draw();
       });
       
});
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
     }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
        box.style.backgroundColor='rgba(214, 52, 195,1)';
        msg_container.classList.add('hide');
     }
}
newgame.addEventListener('click',resetgame);
reset.addEventListener('click',resetgame);


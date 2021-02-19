
import { computeHeadingLevel, render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import './TictacToe.css';
const xarr=[];
const yarr=[];
let count=0;
let gameover=false;
function TicTacToe(){
    const [board, setBoard] = useState(Array(9).fill(null));
    //const [gameover,setGameover]=useState(false);
    const [player,setPlayer]=useState(0);
   // const [count,setCount]=useState(0);
    //const [xarr,setXarr]=useState([]);
    //const [yarr,setYarr]=useState([]);
  
    const [winner,setWinner]=useState(null)
       const Block=(props)=>{   
        return (<button id={props.id} class={props.class}  disabled={props.value}onClick={props.onClick}>{props.value}</button>)
        }

function onClick(event)
{
    if(!gameover)
    {
        //setCount(count+1);
        count++;
        if(player==0)
        {
    //let Xarr_new=xarr.slice();
    xarr.push(event.target.id);
    let board_new=board.slice();
    board_new[event.target.id]="X";
    setBoard(board_new);
        }
        else{
           // let Yarr_new=yarr.slice();
    yarr.push(event.target.id);
    //setYarr(Yarr_new);
            let board_new=board.slice();
    board_new[event.target.id]="O";
    setBoard(board_new);
        }
        setPlayer(1-player);
    }
    
    if(count==9)
    gameover=true;
    //setGameover(true);
    
    if(!winner && gameover)
        {
            setWinner("draw");
        }
    console.table(count+""+gameover);
   // console.table(yarr);
    checkwinner();
}
function checkwinner()
{
    //console.table(xarr);
    //console.table(yarr);
        if(xarr.includes("1")&& xarr.includes("2")&& xarr.includes("3"))
        {
            setWinner("Winner is Player1");
            
            gameover=true;
            document.getElementById("line").style.transform='rotate(90deg)';
            document.getElementById("line").style.left="690px";
            document.getElementById("line").style.top="0px";
            document.getElementById("line").hidden=false;
            //setGameover(true);
        }
        else if(xarr.includes("4") && xarr.includes("5")&& xarr.includes("6"))
        {
           
            setWinner("Winner is Player1");
            gameover=true;
            document.getElementById("line").style.transform='rotate(90deg)';
            document.getElementById("line").style.left="690px";
            document.getElementById("line").style.top="150px";
            document.getElementById("line").hidden=false;
            //setGameover(true);
        }
        else if(xarr.includes("7")&& xarr.includes("8")&& xarr.includes("0"))
        {
            setWinner("Winner is Player1");
            gameover=true;
            document.getElementById("line").style.transform='rotate(90deg)';
            document.getElementById("line").style.left="690px";
            document.getElementById("line").style.top="300px";
            document.getElementById("line").hidden=false;
            //setGameover(true);
        }
        else if(xarr.includes("1")&& xarr.includes("4")&& xarr.includes("7")) 
        {
            setWinner("Winner is Player1");
            gameover=true;
            document.getElementById("line").style.left="520px";
            document.getElementById("line").style.top="130px";
            document.getElementById("line").hidden=false;
            //setGameover(true);
        }
        else if(xarr.includes("2")&& xarr.includes("5")&& xarr.includes("8")) 
        {
            setWinner("Winner is Player1");
            gameover=true;
            document.getElementById("line").style.left="680px";
            document.getElementById("line").style.top="130px";
            document.getElementById("line").hidden=false;
            //setGameover(true);
        }
        else if(xarr.includes("3")&& xarr.includes("6")&& xarr.includes("0"))
        {
            setWinner("Winner is Player1");
            gameover=true;
            document.getElementById("line").style.left="820px";
            document.getElementById("line").style.top="130px";
            document.getElementById("line").hidden=false;
            //setGameover(true);
        }
        else if(xarr.includes("1")&& xarr.includes("5")&& xarr.includes("0")) 
        {
            setWinner("Winner is Player1");
            gameover=true;
            document.getElementById("line").style.transform='rotate(-45deg)'; 
            document.getElementById("line").style.left="670px";
            document.getElementById("line").style.top="130px";
            document.getElementById("line").hidden=false;
            //setGameover(true);
        }
        else if(xarr.includes("3")&& xarr.includes("5")&& xarr.includes("7"))
        {
            setWinner("Winner is Player1");
            gameover=true;
            document.getElementById("line").style.transform='rotate(+45deg)';
            document.getElementById("line").style.left="670px";
            document.getElementById("line").style.top="130px";
            document.getElementById("line").hidden=false;
            //setGameover(true);
        }
        if(yarr.includes("1")&& yarr.includes("2")&& yarr.includes("3"))
        {
              // setGameover(true);
              gameover=true;
            setWinner("Winner is Player2");
          document.getElementById("line").style.transform='rotate(90deg)';
            document.getElementById("line").style.left="690px";
            document.getElementById("line").style.top="0px";
            document.getElementById("line").hidden=false;
        }
        else if(yarr.includes("4") && yarr.includes("5")&& yarr.includes("6"))
        {        
             //setGameover(true);
             gameover=true;
            setWinner("Winner is Player2");
            document.getElementById("line").style.transform='rotate(90deg)';
            document.getElementById("line").style.left="690px";
            document.getElementById("line").style.top="150px";
         
            document.getElementById("line").hidden=false;
        }
        else if(yarr.includes("7")&& yarr.includes("8")&& yarr.includes("0"))
        {
            //setGameover(true);
            gameover=true;
            setWinner("Winner is Player2");
            document.getElementById("line").style.transform='rotate(90deg)';
            document.getElementById("line").style.left="690px";
            document.getElementById("line").style.top="300px";
            document.getElementById("line").hidden=false;
        }
        else if(yarr.includes("1")&& yarr.includes("4")&& yarr.includes("7")) 
        {
             //setGameover(true);
             gameover=true;
            setWinner("Winner is Player2");
            document.getElementById("line").style.left="520px";
            document.getElementById("line").style.top="130px";
            document.getElementById("line").hidden=false;
        }
        else if(yarr.includes("2")&& yarr.includes("5")&& yarr.includes("8")) 
        {
             //setGameover(true);
            setWinner("Winner is Player2");
            document.getElementById("line").style.left="680px";
            document.getElementById("line").style.top="130px";
            gameover=true;
            document.getElementById("line").hidden=false;
        }
        else if(yarr.includes("3")&& yarr.includes("6")&& yarr.includes("0"))
        {
            //setGameover(true);
            gameover=true;
            setWinner("Winner is Player2");
            
            document.getElementById("line").style.left="820px";
            document.getElementById("line").style.top="130px";
            document.getElementById("line").hidden=false;
        }
        else if(yarr.includes("1")&& yarr.includes("5")&& yarr.includes("0")) 
        {
            //setGameover(true);
            setWinner("Winner is Player2");
            gameover=true;
            document.getElementById("line").style.transform='rotate(-45deg)'; 
            document.getElementById("line").style.left="670px";
            document.getElementById("line").style.top="130px";
            document.getElementById("line").hidden=false;
        }
        else if(yarr.includes("3")&& yarr.includes("5")&& yarr.includes("7"))
        {
            
            //setGameover(true);
            gameover=true;
            setWinner("Winner is Player2");
            document.getElementById("line").style.transform='rotate(+45deg)';
            document.getElementById("line").style.left="670px";
            document.getElementById("line").style.top="130px";
           
            document.getElementById("line").hidden=false;
        }
        
        
    
}
     return (<>
     <div id="winner">Result of game</div>
     <div id="res">:{winner}</div>
     <div id="container">
     
     <Block id="1" onClick={onClick} value={board[1]} class="class-right class-bottom"></Block>
     <Block id="2" onClick={onClick} value={board[2]} class="class-bottom class-right"></Block>
     <Block id="3" onClick={onClick} value={board[3]} class="class-bottom"></Block>
     <Block id="4" onClick={onClick} value={board[4]} class="class-right class-bottom"></Block>
     <Block id="5" onClick={onClick} value={board[5]} class="class-bottom class-right"></Block>
     <Block id="6" onClick={onClick} value={board[6]} class="class-bottom"></Block>
     <Block id="7" onClick={onClick} value={board[7]} class="class-right"></Block>
     <Block id="8" onClick={onClick} value={board[8]} class="class-right"></Block>
     <Block id="0" onClick={onClick} value={board[0]}></Block>
     </div>
     <div id="line" hidden><hr/></div>
     </>);
 }
export default TicTacToe;
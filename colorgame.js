var nos;
var colors=[];
var pickcolor;
var h1=document.querySelector("h1");
var colorset=document.querySelector("#square");
var displayColor=document.querySelector(".message");
var decide=document.querySelector("#stripDisplay");
var modeBtn=document.querySelectorAll(".mode");
var newColors=document.querySelector("#newcolors");
init();
function init()
{
    nos=6
    colors=colorsarr(nos);
    pickcolor=colors[pickedcolor()];
    displayColor.textContent=pickcolor;
    for(var i=0;i<square.length;i++)
    { 
    square[i].style.backgroundColor=colors[i];
    square[i].style.display="block";
    }
    check();
    h1.style.backgroundColor="steelblue"
}
for(i=0;i<modeBtn.length;i++)
{
modeBtn[i].addEventListener("click",function()
{
    modeBtn[0].classList.remove("selected");
    modeBtn[1].classList.remove("selected");
    var text=this.textContent;
    console.log(text);
    this.classList.add("selected");
    text ==="EASY"?nos=3:nos=6;
    colors=colorsarr(nos);
    pickcolor=colors[pickedcolor()];
    displayColor.textContent=pickcolor;
    decide.textContent="";
    h1.style.backgroundColor="steelblue";
    newColors.textContent="NEW COLORS";
    if(nos===3)
    {
        for(var i=0;i<square.length;i++)
        {
        if(colors[i]){
        square[i].style.backgroundColor=colors[i];
        }
        else
        {
            square[i].style.display="none";
        }
        }
        check();
     }
     else
     {
        for(var i=0;i<square.length;i++)
    { 
    square[i].style.backgroundColor=colors[i];
    square[i].style.display="block";
    }
    check();
     }

});}
newColors.addEventListener("click",function()
{
    newColors.textContent="NEW COLORS";
    decide.textContent="";
    colors=colorsarr(nos);
    pickcolor=colors[pickedcolor()];
    displayColor.textContent=pickcolor;
    for(var i=0;i<square.length;i++)
    {
    square[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
});
function generatecolor(num)
{
    for(var i=0;i<square.length;i++)
    {
        
        square[i].style.backgroundColor=num;
    }
}
function pickedcolor()
{
    if(nos==6)
    {
    return Math.floor(Math.random()*6);
    }
    else
    {
        return  Math.floor(Math.random()*3);
    }
}
function colorsarr(num)
{ 
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomcolor());
    }
    return arr;
}

function randomcolor()
{
   var r= Math.floor(Math.random()*256);
   var g=Math.floor(Math.random()*256);
   var b=Math.floor(Math.random()*256);
   return "rgb"+"("+""+r+", "+g+", "+b+")";
}
function check()
{
    for(var i=0;i<square.length;i++)
    {
    square[i].addEventListener("click",function()
    {
        var clickedcolor=this.style.backgroundColor;
        if(clickedcolor===pickcolor)
        { 

            newColors.textContent="Play Again??";
            decide.textContent="Correct!!";
            decide.style.color="green";
            h1.style.backgroundColor=clickedcolor;
            generatecolor(clickedcolor);
        }
        else
        {
            decide.textContent="Try Again!!";
            decide.style.color="red";
            console.log(clickedcolor,pickcolor);
            this.style.backgroundColor="#232323";
        }
    });
}}
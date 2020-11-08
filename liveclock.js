//selector
const time=document.getElementById("time");
const greeting=document.getElementById("greeting");
const name=document.getElementById("name");
const date=document.getElementById("date");

//event listener
name.addEventListener("keypress",setName);

//function
function showtime()
{
    let today=new Date();
    //console.log(today)
    let hour=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    let todaydate=today.toDateString();



    //am-pm format
    const amPm=hour>12?'PM':'AM';

    //12hr format
    hour=hour%12 || 12

    //outputTime
    time.innerHTML=`${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span>:</span>${amPm}`
    date.innerHTML=`${todaydate}`;

    //hh:mm:ss AM
    setTimeout(showtime,1000)
}


//function adding zero if value is less than 10
function addZero(n)
{
    return ((parseInt(n)<10?'0':'')+n);
}

function setGreeting()
{
    let today=new Date();
    let hour=today.getHours();
    if(hour<=12)
    {
        document.body.style.backgroundImage='url("images/morning.jpg")'
        greeting.innerHTML='Good Morning'
    }
    else if(hour<18)
    {
        document.body.style.backgroundImage='url("images/afternoon.jpg")'
        greeting.innerHTML='Good Afternoon'
    }

    else{
        document.body.style.backgroundImage='url("images/evening.jpg")'
        greeting.innerHTML='Good Evening'
        document.body.style.color='white'
    }
}

function getName()
{
    if(localStorage.getItem('myName')==null)
    {
        name.innerHTML="[Enter Name]"
    }
    else
    {
        name.innerHTML=localStorage.getItem("myName")
    }

}

//create a function to store data in local storage
function setName(e)
{
    if(e.type==="keypress")
    {
        if(e.keyCode==13)
        {
            localStorage.setItem('myName',e.target.innerHTML)
            name.blur()
        }
    }
    else{
        localStorage.setItem('myName',e.target.innerHTML)
    }
}


//function call
showtime();
setGreeting();
getName();
setName();
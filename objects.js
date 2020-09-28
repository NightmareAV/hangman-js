

// for (let i = 0; i < 5; i++)
// {
//     let newP = prompt("Новое значение для абзаца: ");
//     $("body").append("<p>"+ newP +"</p>");
// }
// $("#par").slideUp(1000).slideDown(1000);
// $("p").fadeOut(3000).fadeIn(2000);

// $("#par").hide(1000).show(1000);

// let newP = prompt("New par:");

// $("#par").text(newP);

// let names = [
//     "Lexa",
//     "Tima",
//     "Sanya",
//     "Grisha",
//     "Andrey"
// ];

// for (let i = 0; i < names.length; i++)
// {
//     $("body").append("<p>"+ names[i] +"</p>").hide().fadeIn(1500);
// }
// $("p").append(" лучший");

// $("h1").fadeOut(5000).delay(5000);
// $("h1").fadeIn();

//$("h1").fadeTo(5000, 0);

// const func = function()
// {
//     alert("Alert");
// }

// const st = setTimeout(func,1000); 

// clearTimeout(st);
// let i = 0;
// const func1 = function()
// {
//     $("h1").text(i++);
// }

// const id = setInterval(func1, 1000);

// clearInterval(id);

// let leftOffSet = 0;

// const moveH1 = function () {
//     $("#par").offset({ left: leftOffSet});
//     leftOffSet++;
//     if (leftOffSet > 200)
//         leftOffSet = 0;
// };

// const idInt = setInterval(moveH1, 30);
// clearInterval(idInt);

// const clickH1 = function (event) {
//         console.log(event.pageX, event.pageY);
// };

// $("h1").click(clickH1);

// const move = function (event) {
//     $("html").offset(
//         {
//             left: event.pageX, 
//             top:event.pageY
//         }
//         );
// }

// $("html").mousemove(move);

// const clickMove = function(event) {
//     $("h1").offset(
//         {
//             left: event.pageX,
//             top: event.pageY
//         }
//         );
// }

// $("html").click(clickMove);


let stepLeft = 200;
let stepRight = 0;
let stepTop = 200;
let stepBot = 0;

const square = function() 
{
    if (counter <= -50)
    {
        clearInterval(idSquare);
        return;
    }

    if (stepRight < 200)
    {
        $("h1").offset({ left: stepRight });
        stepRight++;
    } 
    else if (stepBot < 200)
    {
        $("h1").offset({ top: stepBot });
        stepBot++;
    }
    else if (stepLeft > 0)
    {
        $("h1").offset({ left: stepLeft });
        stepLeft--;
    }
    else if (stepTop > 0)
    {
        $("h1").offset({ top: stepTop});
        stepTop--;
    }
    else 
    {        
        stepLeft = 200;
        stepRight = 0;
        stepTop = 200;
        stepBot = 0;        
    }
}

const idSquare = setInterval(square, 50);

let counter = 50;

const clickH1 = function()
{
    clearInterval(idSquare);
    counter-=10;
    setInterval(square, counter);
    if (counter <= -50)
    {
        clearInterval(idSquare);
        $("h1").text("Вы победили!");
    }
}

$("h1").click(clickH1);




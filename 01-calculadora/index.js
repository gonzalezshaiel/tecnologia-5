function button5response()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+5;
  display.setAttribute("value",newvalue);
 }

let button5=document.getElementById("btn5");
button5.addEventListener('click',button5response);

function button6response()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+6;
  display.setAttribute("value",newvalue);
 }

let button6=document.getElementById("btn6");
button6.addEventListener('click',button6response);

function button4response()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+4;
  display.setAttribute("value",newvalue);
 }

let button4=document.getElementById("btn4");
button4.addEventListener('click',button4response);

function button7response()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+7;
  display.setAttribute("value",newvalue);
 }

let button7=document.getElementById("btn7");
button7.addEventListener('click',button7response);

function button8response()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+8;
  display.setAttribute("value",newvalue);
 }

let button8=document.getElementById("btn8");
button8.addEventListener('click',button8response);

function button9response()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+9;
  display.setAttribute("value",newvalue);
 }

let button9=document.getElementById("btn9");
button9.addEventListener('click',button9response);

function button1response()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+1;
  display.setAttribute("value",newvalue);
 }

let button1=document.getElementById("btn1");
button1.addEventListener('click',button1response);

function button2response()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+2;
  display.setAttribute("value",newvalue);
 }

let button2=document.getElementById("btn2");
button2.addEventListener('click',button2response);

function button3response()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+3;
  display.setAttribute("value",newvalue);
 }

let button3=document.getElementById("btn3");
button3.addEventListener('click',button3response);

function button0response()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+0;
  display.setAttribute("value",newvalue);
 }

let button0=document.getElementById("btn0");
button0.addEventListener('click',button0response);

function buttonMasresponse()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+"+";
  display.setAttribute("value",newvalue);
 }

let buttonMas=document.getElementById("btnMas");
buttonMas.addEventListener('click',buttonMasresponse);

function buttonPuntoresponse()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+".";
  display.setAttribute("value",newvalue);
 }

let buttonPunto=document.getElementById("btnPunto");
buttonPunto.addEventListener('click',buttonPuntoresponse);

function buttonMenosresponse()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+"-";
  display.setAttribute("value",newvalue);
 }

let buttonMenos=document.getElementById("btnMenos");
buttonMenos.addEventListener('click',buttonMenosresponse);

function buttonPorresponse()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+"*";
  display.setAttribute("value",newvalue);
 }

let buttonPor=document.getElementById("btnPor");
buttonPor.addEventListener('click',buttonPorresponse);

function buttonDivididoresponse()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+"/";
  display.setAttribute("value",newvalue);
 }

let buttonDividido=document.getElementById("btnDividido");
buttonDividido.addEventListener('click',buttonDivididoresponse);

function buttonborrarresponse()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+"borrar";
  display.setAttribute("value","");
 }

let buttonborrar=document.getElementById("btnborrar");
buttonborrar.addEventListener('click',buttonborrarresponse);

function buttonIgualresponse()
{
  let display=document.getElementById("display");
  let newvalue=display.getAttribute("value")+"=";
  display.setAttribute("value",(display.getAttribute("value")));
 }

let buttonIgual=document.getElementById("btnIgual");
buttonIgual.addEventListener('click',buttonIgualresponse);

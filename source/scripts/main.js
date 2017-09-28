



document.getElementById("button1").addEventListener("click", function()
{
    document.getElementById("pic1").src="./assets/mooncake2.jpg";
});
document.getElementById("button2").addEventListener("click", function()
{
    document.getElementById("pic1").src="./assets/mooncake3.jpg";
});


// document.getElementById("modal").addEventListener("click", openmodal);
// function openmodal() {
//   document.getElementById("modaloverlay").style.display = "block";
// }

// document.getElementById("modaloverlay").addEventListener("click", closemodal);
// function closemodal() {
//   document.getElementById("modaloverlay").style.display = "none";
// }

document.getElementById("step1").addEventListener("click", openmodal1);
function openmodal1() {
  document.getElementById("step1over").style.display = "block";
}

document.getElementById("step1over").addEventListener("click", closemodal1);
function closemodal1() {
  document.getElementById("step1over").style.display = "none";
}

 // navbar indicator   
function PositionIndicator(){

  var w = window.innerWidth;
   if (window.pageYOffset<w*0.47){
    document.getElementById("home").style.backgroundColor="#333";
    document.getElementById("home").style.height="6vw";
    document.getElementById("mooncake").style.backgroundColor=null;
    document.getElementById("icecream").style.backgroundColor=null;
    document.getElementById("contact").style.backgroundColor=null;
    console.log("inside");
  // document.body.scrollTop 0.39&& 1.44   
}
  else if((window.pageYOffset>=w*0.47) && (window.pageYOffset<w*1.35)){
    document.getElementById("home").style.backgroundColor=null;
    document.getElementById("icecream").style.backgroundColor=null;
document.getElementById("contact").style.backgroundColor=null;
    document.getElementById("mooncake").style.backgroundColor="#333";
     document.getElementById("mooncake").style.height="6vw";
  }
  else if((window.pageYOffset>=w*1.35) && (window.pageYOffset<w*1.85)){
    document.getElementById("mooncake").style.backgroundColor=null;
    document.getElementById("home").style.backgroundColor=null;
    document.getElementById("contact").style.backgroundColor=null;
    document.getElementById("icecream").style.backgroundColor="#333";
     document.getElementById("icecream").style.height="6vw";
  }
  else{
     document.getElementById("icecream").style.backgroundColor=null;
     document.getElementById("home").style.backgroundColor=null;
     document.getElementById("mooncake").style.backgroundColor=null;
     document.getElementById("contact").style.backgroundColor="#333";
     document.getElementById("contact").style.height="6vw";
  }
}

 window.onscroll = function () {
        PositionIndicator();
        navbarResizing();
        
    }




 //navbar resizing

function navbarResizing() {
 var w = window.innerWidth;
 if (window.pageYOffset>w*0.2) {
   document.getElementById("navBar").style.height="4vw";
   document.getElementById("home").style.height="4vw";
   document.getElementById("home").style.lineHeight="4vw";
   document.getElementById("home").style.fontSize="1.2vw";
   document.getElementById("mooncake").style.lineHeight="4vw";
   document.getElementById("mooncake").style.fontSize="1.2vw";
   document.getElementById("mooncake").style.height="4vw";
   document.getElementById("icecream").style.lineHeight="4vw";
   document.getElementById("icecream").style.fontSize="1.2vw";
   document.getElementById("icecream").style.height="4vw";
   document.getElementById("contact").style.lineHeight="4vw";
   document.getElementById("contact").style.fontSize="1.2vw";
   document.getElementById("contact").style.height="4vw";
   
}
else{
  document.getElementById("navBar").style.height="6vw";
  document.getElementById("home").style.height="6vw";
   document.getElementById("home").style.lineHeight="6vw";
   document.getElementById("home").style.fontSize="1.5vw";
   document.getElementById("mooncake").style.lineHeight="6vw";
   document.getElementById("mooncake").style.height="6vw";
   document.getElementById("mooncake").style.fontSize="1.5vw";
   document.getElementById("icecream").style.lineHeight="6vw";
   document.getElementById("icecream").style.height="6vw";
   document.getElementById("icecream").style.fontSize="1.5vw";
   document.getElementById("contact").style.lineHeight="6vw";
   document.getElementById("contact").style.height="6vw";
   document.getElementById("contact").style.fontSize="1.5vw";
}


}

 










//top to mooncake   1.44  1.6   when window.pageYOffset<w*0.39
// document.getElementById("mooncake").addEventListener("click", function()
// {

//   var w = window.innerWidth;
//   var iIDDown=setInterval(moveDown, 10);
//   function moveDown(){
  
//     window.scrollBy(0, 10);
//     if(window.pageYOffset> w*0.39){
//       clearInterval(iIDDown);
//     }
//   }

// });

//down to mooncake    when   w*1.44<window.pageYOffset<w*0.39
// document.getElementById("mooncake").addEventListener("click", function()
// {

//   var w = window.innerWidth;
//   var iID=setInterval(moveUp, 5);
//   function moveUp(){
  
//     window.scrollBy(0, -5);
//     if(window.pageYOffset< w*0.39){
//       clearInterval(iID);
//     }
//   }

// });




// function smoothScroll(){

//   var w = window.innerWidth;

  // var obj = document.getElementById(obj);
  // var bodyscrollTop=window.pageYOffset;
//   var iID=setInterval(moveDown, 10);
//   function moveDown(){
  
//     window.scrollBy(0, 5)；
//     if((window.pageYOffset> w*0.39)&&(window.pageYOffset< w*0.59)){
//       clearInterval(iID);
//     }
//   }
// }

// ((window.pageYOffset>w*0.39)&&(window.pageYOffset<w*1.44))


//all
//   var obj;
//  var obj = document.getElementById(obj);
//   obj.addEventListener("click", function
// {

//    var w = window.innerWidth;
//    var x;
//    if(obj==document.getElementById("home")){x=0;}
//    else if(obj==document.getElementById("mooncake")){
//     x=0.4;
//    }
//    else if(obj==document.getElementById("icecream")){
//     x=1.44;
//    }
//    else if(obj==document.getElementById("contact")){
//     x=1.8
//    }
//   if(window.pageYOffset<w*x){
//      scrollDown();
//   }
//   else{
//     scrollUp();
//   }
// function scrollUp(){
//   var iIDup=setInterval(moveUp, 1);
//   function moveUp(){
  
//     window.scrollBy(0, -4);
//     if(window.pageYOffset< w*x){
//       clearInterval(iIDup);
//     }
//   }
// }

// function scrollDown() {
//  var iIDdown=setInterval(moveDown, 10);
//   function moveDown(){
  
//     window.scrollBy(0, 10);
//     if(window.pageYOffset> w*x){
//       clearInterval(iIDdown);
//     }
//   }
// }
// });



// //id=="home"
document.getElementById("home").addEventListener("click", function()
{
   var w = window.innerWidth;
  if(window.pageYOffset<w*0){
    scrollDown();
  }
  else{
    scrollUp();
  }
function scrollUp(){
  var iIDup=setInterval(moveUp, 1);
  function moveUp(){
  
    window.scrollBy(0, -8);
    if(window.pageYOffset< w*0){
      clearInterval(iIDup);
    }
  }
}

function scrollDown() {
 var iIDdown=setInterval(moveDown, 10);
  function moveDown(){
  
    window.scrollBy(0, 10);
    if(window.pageYOffset> w*0.47){
      clearInterval(iIDdown);
    }
  }
}
});

//id=="mooncake"
document.getElementById("mooncake").addEventListener("click", function()
{
   var w = window.innerWidth;
  if(window.pageYOffset<w*0.47){
     scrollDown();
  }
  else{
    scrollUp();
  }
function scrollUp(){
  var iIDup=setInterval(moveUp, 1);
  function moveUp(){
  
    window.scrollBy(0, -8);
    if(window.pageYOffset< w*0.47){
      clearInterval(iIDup);
    }
  }
}

function scrollDown() {
 var iIDdown=setInterval(moveDown, 10);
  function moveDown(){
  
    window.scrollBy(0, 10);
    if(window.pageYOffset> w*0.47){
      clearInterval(iIDdown);
    }
  }
}
});

document.getElementById("contact").addEventListener("click", function()
{
   var w = window.innerWidth;
  if(window.pageYOffset<w*1.85){
     scrollDown();
  }
  else{
    scrollUp();
  }
function scrollUp(){
  var iIDup=setInterval(moveUp, 1);
  function moveUp(){
  
    window.scrollBy(0, -4);
    if(window.pageYOffset< w*1.85){
      clearInterval(iIDup);
    }
  }
}

function scrollDown() {
 var iIDdown=setInterval(moveDown, 1);
  function moveDown(){
  
    window.scrollBy(0, 15);
    if(window.pageYOffset> w*1.85){
      clearInterval(iIDdown);
    }
  }
}
});

document.getElementById("icecream").addEventListener("click", function()
{
   var w = window.innerWidth;
  if(window.pageYOffset<w*1.35){
     scrollDown();
  }
  else{
    scrollUp();
  }
function scrollUp(){
  var iIDup=setInterval(moveUp, 1);
  function moveUp(){
  
    window.scrollBy(0, -6);
    if(window.pageYOffset< w*1.35){
      clearInterval(iIDup);
    }
  }
}

function scrollDown() {
 var iIDdown=setInterval(moveDown, 7);
  function moveDown(){
  
    window.scrollBy(0, 10);
    if(window.pageYOffset> w*1.35){
      clearInterval(iIDdown);
    }
  }
}
});









//end
// document.getElementById(obj).addEventListener("click", function()
// {
//   var w = window.innerWidth;
//   if(obj=="mooncake"){
//     var downFrom=w*;
//     var downTo=w*0.39;
//   }
//   if(obj=="mooncake"){
//     var downUntil=w*0.39;
//   }

//   var iID=setInterval(moveDown, 9);
//   function moveDown(){
  
//     window.scrollBy(0, 10);
//     if(window.pageYOffset> w*0.39){
//       clearInterval(iID);
//     }
//   }

// });


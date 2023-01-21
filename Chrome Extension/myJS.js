let myTracks=[];
const myIn=document.getElementById("myInput");
const myBtn=document.getElementById("myInBtn");
const myEL=document.getElementById("myUL");

myBtn.addEventListener("click",function(){
    myTracks.push(myIn.value);
    
    myIn.value="";
    rendertheTracker();
})
function rendertheTracker(){
    let myList ="";
    for(let i =0;i<myTracks.length;i++){
       
        myList+= "<li><a target ='_blank' href='"+myTracks[i]+"'>"+myTracks[i]+"</a></li>";
        
    }
    myEL.innerHTML = myList;
}
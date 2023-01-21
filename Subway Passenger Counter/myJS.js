let PreSave = document.getElementById("save-input");
counter=document.getElementById("count");
let count =0;

function inc(){
    count =count+1;
    counter.innerText = + count;
}

function save(){
    let myCounts = count + " - "
    PreSave.textContent += myCounts;
    counter.textContent=0;
    count=0;

}
//function to create <span> for tasks text inside <div>
// create a delete button
function creatTaks (text){
    let span2=document.createElement("span");
    let divs=document.querySelector(".task");
    span2.style.cssText="background-color:white ; margin-bottom:28px ;font-size:27px ; margin:20px ; border-radius:15px ; padding:10px ; width: 311px";
    span2.appendChild(document.createTextNode(text));
    btn=document.createElement("input");
    btn.setAttribute("type","button");
    btn.setAttribute("value","Delete");
    btn.classList.add("delete");
    btn.style.cssText="padding: 7px ; width: 78px ; margin-left: 28px ; position: absolute ; right:6px";
    span2.appendChild(btn);
    divs.appendChild(span2);
    document.body.appendChild(divs);
    
}
//add tasks text inside <span>
// add & modify (push) an arry of objects inside localStorage
document.querySelector("#input2").onclick=function(){
    let arr=JSON.parse(localStorage.getItem("tasks"));
    let text=document.querySelector("#input1").value
    console.log(`${text}`);
    creatTaks(text);;
    document.querySelector("#input1").value=null;
    let obj=new Object()
    obj.title=text;
    arr.push(obj);
    window.localStorage.setItem("tasks", JSON.stringify(arr));
    return arr;
}
//delete tasks 
document.addEventListener("click",function(e){
    let arr=JSON.parse(localStorage.getItem("tasks"));
    if (e.target.className==="delete"){
        e.target.style.cssText="display:none";
        e.target.parentElement.style.cssText="display:none";
        console.log(e.target.parentElement.innerText);
        for (i=0 ; i<arr.length; i++){
            if (arr[i]["title"]===e.target.parentElement.innerText){
                arr.splice(i,1);
            }
        }
        window.localStorage.setItem("tasks", JSON.stringify(arr));
    }
});
// on load get items from localstorage
if(window.localStorage.getItem("tasks")){
    window.onload=function(){
        let arr2=JSON.parse(localStorage.getItem("tasks"));
        for (i=0 ; i<arr2.length ; i++){
            tex=arr2[i]["title"];
            creatTaks(tex);

        };
    };
}




var arr=[
    {
        "previewImage": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cat.jpeg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "a man and a woman trying to cook a meal together in a modern kitchen.jpg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "bali-kelingking-beach-plastic-removal-drive.key"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "NextByk Investor Pitch 2022.ppt"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "title": "interns-performance-report-may-2022.key"
    }
];
var container,ind;
var cont_map;
function create_buttons(container){
    
    for(var obj of arr){
        
        let newdiv=document.createElement("div");
        let newimg=document.createElement("img");
        let newtext=document.createElement("div");
        newimg.setAttribute("class","smallimg");
        newtext.setAttribute("class","smallimgtxt");
        newimg.setAttribute("src",obj['previewImage']);
        newtext.innerHTML=obj['title'];
        newdiv.appendChild(newimg);
        newdiv.appendChild(newtext);
        newdiv.setAttribute("class","row");
        newdiv.addEventListener("click",function() {
             
            expand(newdiv);});
            
        
        container.appendChild(newdiv);
        newtext.innerHTML=truncate(obj['title'],newtext);//truncate
        cont_map[newimg.src]=ind;
        ind+=1;

    }

}
function truncate(str,target){
    target.innerHTML=str;
    var li=countLines(target);
    console.log("hello",li,target);
    if(li>1){
        var ans="...";
        var i=0;
        while(i<Math.floor(str.length/2)){
            target.innerHTML=ans;
            if(countLines(target)<=1){
                ans=str[i]+ans+str[str.length-1-i];
                i++;

            }
            else{
                break;
            }
        }
        return str.substring(0,i-2)+"..."+str.substring(str.length-i+2,str.length);
    }
    else{
        return str;
    }
    

}
function countLines(target) {
    var style = window.getComputedStyle(target, null);
    var height = parseInt(style.getPropertyValue("height"));
    var font_size = parseInt(style.getPropertyValue("font-size"));
    var line_height = parseInt(style.getPropertyValue("line-height"));
    var box_sizing = style.getPropertyValue("box-sizing");
    
    if(isNaN(line_height)) line_height = font_size * 1.2;
   
    if(box_sizing=='border-box')
    {
      var padding_top = parseInt(style.getPropertyValue("padding-top"));
      var padding_bottom = parseInt(style.getPropertyValue("padding-bottom"));
      var border_top = parseInt(style.getPropertyValue("border-top-width"));
      var border_bottom = parseInt(style.getPropertyValue("border-bottom-width"));
      height = height - padding_top - padding_bottom - border_top - border_bottom
    }
    var lines = Math.ceil(height / line_height);
    console.log(target.innerHTML);
    return lines;
  }
function highlight(imgs){
     for(var x of container.children){
         x.className=x.className.replace(" active","");
     }
     imgs.className+=" active";
 }
function expand(imgs){
    // var inds=cont_map[newdiv];
    highlight(imgs);
    ind=cont_map[imgs.children[0].src]
    console.log(ind);
    var expandimg=document.getElementById("expandedimg");
    var imgtext=document.getElementById("imgtext");
    console.log(arr[ind]);
    expandimg.src=arr[ind]['previewImage'];
    
    imgtext.textContent=arr[ind]['title'];
    imgtext.addEventListener("keyup",function(){
        container.children[ind].children[1].innerHTML=truncate(imgtext.innerHTML,container.children[ind].children[1]); //truncate
        arr[ind]['title']=imgtext.innerHTML;
    })
    expandimg.parentElement.style.display="block";
}
 function init() {
    fetch("./images.json")
        .then(response =>response.json())
        .then(data => function(){
            console.log(data);
        })
        .catch(error=>console.log(error));
    
    // let fs=require('fs');
    // let rawdata=fs.readFileSync('images.json');
    // arr=JSON.parse(rawdata);
    // console.log(arr);
    container=document.getElementsByClassName("column")[0];
    cont_map={};
    ind=0;
    create_buttons(container);
    console.log(container)
    ind=0;
    expand(container.children[0]);
    
}

document.addEventListener('keydown',function(e){
    
    console.log(e.key);
    switch(e.key){
        case "ArrowUp"://up
            e.preventDefault();
            console.log(e.keycode)
            ind=(ind-1+container.children.length)%container.children.length;
            expand(container.children[ind]);
            
            break;
        
        case "ArrowDown"://down
            e.preventDefault();
            console.log(e.keycode)
            ind=(ind+1+container.children.length)%container.children.length;
            expand(container.children[ind]);
            
            break;
            
    }
});
let arr=[1,2,3];
let bdy=document.getElementById("bdy");
let comp=arr[Math.floor(Math.random()*arr.length)];
let resu=document.getElementById("result");
let s1=document.getElementById("s1");
let s2=document.getElementById("s2");
let val1=0;
let val2=0;
if(comp==1){
    comp="✌️";
}
else if(comp==2){
    comp="✊";
}
else{
    comp="✋";
}
let user="0";
let pun=document.getElementById("pun");
let hand=document.getElementById("up");
let two=document.getElementById("two");
pun.addEventListener("click",(e)=>{
    user="✊";
    if(comp==user){
        resu.innerText="The Game is Draw";
        // bdy.append(res);
        let x=document.getElementById("gif");
            x.src="";
        }
        if(user=="✊" && comp=="✌️"){
            // let res=document.createElement("p");
            resu.innerText=`Souvik is The Winner,Sid chose ${comp}`;
            s1.innerText=`${val1+1}`;
            val1++;
            // bdy.append(res); 
            let x=document.getElementById("gif");
            x.src="https://i.redd.it/wkdg25i9qaty.gif";
        }
        else if(user=="✊" && comp=="✋"){
            // let res=document.createElement("p");
            resu.innerText=`Sid is the Winner,Sid chose ${comp}`;
            // bdy.append(res); 
            s2.innerText=`${val2+1}`;
            val2++;
            let x=document.getElementById("gif");
            x.src="https://i.gifer.com/Tt9q.gif";
        }
        comp=arr[Math.floor(Math.random()*arr.length)];
        if(comp==1){
            comp="✌️";
        }
        else if(comp==2){
            comp="✊";
        }
        else{
            comp="✋";
        }
        
       
})
hand.addEventListener("click",(e)=>{
    user="✋";
    if(comp==user){
        resu.innerText="The Game is a Draw";
        let x=document.getElementById("gif");
        x.src="";
        }
        if(user=="✋" && comp=="✊"){
            resu.innerText=`Souvik is The Winner,Sid chose ${comp}`;
            s1.innerText=`${val1+1}`;
            val1++;
            let x=document.getElementById("gif");
            x.src="https://i.redd.it/wkdg25i9qaty.gif";
        }
        else if(user=="✋" && comp=="✌️"){
            // let res=document.createElement("p");
            resu.innerText=`Sid is the Winner,Sid chose ${comp}`;
            // bdy.append(res); 
            s2.innerText=`${val2+1}`;
            val2++;
            let x=document.getElementById("gif");
            x.src="https://i.gifer.com/Tt9q.gif";
        }
        comp=arr[Math.floor(Math.random()*arr.length)];
        if(comp==1){
            comp="✌️";
        }
        else if(comp==2){
            comp="✊";
        }
        else{
            comp="✋";
        }
        
       
})
two.addEventListener("click",(e)=>{
    user="✌️";
    if(comp==user){
        // let res=document.createElement("p");
        resu.innerText="The Game is a Draw";
        // bdy.append(res);
        let x=document.getElementById("gif");
            x.src="";
        }
    if(user=="✌️" && comp=="✋"){
        // let res=document.createElement("p");
        resu.innerText=`Souvik is The Winner,Sid chose ${comp}`;
        s1.innerText=`${val1+1}`;
        val1++;
        // bdy.append(res); 
        let x=document.getElementById("gif");
        x.src="https://i.redd.it/wkdg25i9qaty.gif";
    }
    else if(user=="✌️" && comp=="✊"){
        // let res=document.createElement("p");
        resu.innerText=`Sid is the Winner,Sid chose ${comp}`;
        // bdy.append(res); 
        s2.innerText=`${val2+1}`;
            val2++;
            let x=document.getElementById("gif");
            x.src="https://i.gifer.com/Tt9q.gif";
    }
    comp=arr[Math.floor(Math.random()*arr.length)];
    if(comp==1){
        comp="✌️";
    }
    else if(comp==2){
        comp="✊";
    }
    else{
        comp="✋";
    }
   
})
let reload=document.getElementById("reload");
    reload.addEventListener("click",()=>{
        location.reload();
    })
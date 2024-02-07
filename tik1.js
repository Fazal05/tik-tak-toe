const a=document.getElementById("a");
const b=document.getElementById("b");
const c=document.getElementById("c");
const d=document.getElementById("d");
const e=document.getElementById("e");
const f=document.getElementById("f");
const g=document.getElementById("g");
const h=document.getElementById("h");
const i=document.getElementById("i");
const text=document.getElementById("text");
const btn=document.querySelector("button");
let myarr=["red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue"];
let j=0;
let af=0;
let bf=0;
let cf=0;
let df=0;
let ef=0;
let ff=0;
let gf=0;
let hf=0;
let iff=0;
let ab=0;
let bb=0;
let cb=0;
let db=0;
let eb=0;
let fb=0;
let gb=0;
let hb=0;
let ib=0;
let red=0;
let blue=0;
let draw=0;







a.addEventListener("click", non=()=>{

if(ab==0){
    if(j%2==0){
        af=2;
    }
    else{
        af=1;
    }
    
        a.style.backgroundColor=myarr[j++]; 
    
    
    
    
      
       if(((af==2&bf==2&cf==2)|(af==2&df==2&gf==2)|(gf==2&hf==2&iff==2)|(cf==2&ff==2&iff==2)|(af==2&ef==2&iff==2)|(gf==2&ef==2&cf==2)|(df==2&ef==2&ff==2)|(bf==2&ef==2&hf==2))&(blue==0)&(draw==0)){
        text.innerHTML="Gameover- Red won";
        red++;
        }
        if(((af==1&bf==1&cf==1)|(af==1&df==1&gf==1)|(gf==1&hf==1&iff==1)|(cf==1&ff==1&iff==1)|(af==1&ef==1&iff==1)|(gf==1&ef==1&cf==1)|(df==1&ef==1&ff==1)|(bf==1&ef==1&hf==1))&(red==0)&(draw==0)){
            text.innerHTML="Gameover- Blue won";
            blue++;
            }
    
            if(af>0&bf>0&cf>0&df>0&ef>0&ff>0&gf>0&hf>0&iff>0&red==0&blue==0){
                text.innerHTML="Gameover -Draw Match";
            draw++;
            }
            ab++;   


}


  });
b.addEventListener("click", non=()=>{
    if(bb==0){

        if(j%2==0){
            bf=2;
        }
        else{
            bf=1;
        }
          b.style.backgroundColor=myarr[j++];
          if(((af==2&bf==2&cf==2)|(af==2&df==2&gf==2)|(gf==2&hf==2&iff==2)|(cf==2&ff==2&iff==2)|(af==2&ef==2&iff==2)|(gf==2&ef==2&cf==2)|(df==2&ef==2&ff==2)|(bf==2&ef==2&hf==2))&(blue==0)&(draw==0)){
            text.innerHTML="Gameover- Red won";
            red++;
            }
            if(((af==1&bf==1&cf==1)|(af==1&df==1&gf==1)|(gf==1&hf==1&iff==1)|(cf==1&ff==1&iff==1)|(af==1&ef==1&iff==1)|(gf==1&ef==1&cf==1)|(df==1&ef==1&ff==1)|(bf==1&ef==1&hf==1))&(red==0)&(draw==0)){
                text.innerHTML="Gameover- Blue won";
                blue++;
                }
                
    if(af>0&bf>0&cf>0&df>0&ef>0&ff>0&gf>0&hf>0&iff>0&red==0&blue==0){
        text.innerHTML="Gameover -Draw Match";
        draw++;
    }
    bb++;
    }
    });
c.addEventListener("click", non=()=>{
    if(cb==0){

        if(j%2==0){
            cf=2;
        }
        else{
            cf=1;
        }
        c.style.backgroundColor=myarr[j++];
        if(((af==2&bf==2&cf==2)|(af==2&df==2&gf==2)|(gf==2&hf==2&iff==2)|(cf==2&ff==2&iff==2)|(af==2&ef==2&iff==2)|(gf==2&ef==2&cf==2)|(df==2&ef==2&ff==2)|(bf==2&ef==2&hf==2))&(blue==0)&(draw==0)){
            text.innerHTML="Gameover- Red won";
            red++;
            }
            if(((af==1&bf==1&cf==1)|(af==1&df==1&gf==1)|(gf==1&hf==1&iff==1)|(cf==1&ff==1&iff==1)|(af==1&ef==1&iff==1)|(gf==1&ef==1&cf==1)|(df==1&ef==1&ff==1)|(bf==1&ef==1&hf==1))&(red==0)&(draw==0)){
                text.innerHTML="Gameover- Blue won";
                blue++;
                }
                
    if(af>0&bf>0&cf>0&df>0&ef>0&ff>0&gf>0&hf>0&iff>0&red==0&blue==0){
        text.innerHTML="Gameover -Draw Match";
        draw++;
    }
    cb++;
    }
  });
d.addEventListener("click", non=()=>{
    if(db==0){

        if(j%2==0){
            df=2;
        }
        else{
            df=1;
        }
        d.style.backgroundColor=myarr[j++];
        if(((af==2&bf==2&cf==2)|(af==2&df==2&gf==2)|(gf==2&hf==2&iff==2)|(cf==2&ff==2&iff==2)|(af==2&ef==2&iff==2)|(gf==2&ef==2&cf==2)|(df==2&ef==2&ff==2)|(bf==2&ef==2&hf==2))&(blue==0)&(draw==0)){
            text.innerHTML="Gameover- Red won";
            red++;
            }
            if(((af==1&bf==1&cf==1)|(af==1&df==1&gf==1)|(gf==1&hf==1&iff==1)|(cf==1&ff==1&iff==1)|(af==1&ef==1&iff==1)|(gf==1&ef==1&cf==1)|(df==1&ef==1&ff==1)|(bf==1&ef==1&hf==1))&(red==0)&(draw==0)){
                text.innerHTML="Gameover- Blue won";
                blue++;
                }
                
    if(af>0&bf>0&cf>0&df>0&ef>0&ff>0&gf>0&hf>0&iff>0&red==0&blue==0){
        text.innerHTML="Gameover -Draw Match";
        draw++;
    }
    db++;
    }
  });
  e.addEventListener("click", non=()=>{
    if(eb==0){

        if(j%2==0){
            ef=2;
        }
        else{
            ef=1;
        }
          e.style.backgroundColor=myarr[j++];
          if(((af==2&bf==2&cf==2)|(af==2&df==2&gf==2)|(gf==2&hf==2&iff==2)|(cf==2&ff==2&iff==2)|(af==2&ef==2&iff==2)|(gf==2&ef==2&cf==2)|(df==2&ef==2&ff==2)|(bf==2&ef==2&hf==2))&(blue==0)&(draw==0)){
            text.innerHTML="Gameover- Red won";
            red++;
            }
            if(((af==1&bf==1&cf==1)|(af==1&df==1&gf==1)|(gf==1&hf==1&iff==1)|(cf==1&ff==1&iff==1)|(af==1&ef==1&iff==1)|(gf==1&ef==1&cf==1)|(df==1&ef==1&ff==1)|(bf==1&ef==1&hf==1))&(red==0)&(draw==0)){
                text.innerHTML="Gameover- Blue won";
                blue++;
                }
                
    if(af>0&bf>0&cf>0&df>0&ef>0&ff>0&gf>0&hf>0&iff>0&red==0&blue==0){
        text.innerHTML="Gameover -Draw Match";
        draw++;
    }
    eb++;
    }
    });
    f.addEventListener("click", non=()=>{
        if(fb==0){

            if(j%2==0){
                ff=2;
            }
            else{
                ff=1;
            }
            f.style.backgroundColor=myarr[j++];
            if(((af==2&bf==2&cf==2)|(af==2&df==2&gf==2)|(gf==2&hf==2&iff==2)|(cf==2&ff==2&iff==2)|(af==2&ef==2&iff==2)|(gf==2&ef==2&cf==2)|(df==2&ef==2&ff==2)|(bf==2&ef==2&hf==2))&(blue==0)&(draw==0)){
                text.innerHTML="Gameover- Red won";
                red++;
                }
                if(((af==1&bf==1&cf==1)|(af==1&df==1&gf==1)|(gf==1&hf==1&iff==1)|(cf==1&ff==1&iff==1)|(af==1&ef==1&iff==1)|(gf==1&ef==1&cf==1)|(df==1&ef==1&ff==1)|(bf==1&ef==1&hf==1))&(red==0)&(draw==0)){
                    text.innerHTML="Gameover- Blue won";
                    blue++;
                    }
                    
    if(af>0&bf>0&cf>0&df>0&ef>0&ff>0&gf>0&hf>0&iff>0&red==0&blue==0){
        text.innerHTML="Gameover -Draw Match";
        draw++;
    }
    fb++;
        }
    });
    g.addEventListener("click", non=()=>{
        if(gb==0){

            if(j%2==0){
                gf=2;
            }
            else{
                gf=1;
            }
            g.style.backgroundColor=myarr[j++];
            if(((af==2&bf==2&cf==2)|(af==2&df==2&gf==2)|(gf==2&hf==2&iff==2)|(cf==2&ff==2&iff==2)|(af==2&ef==2&iff==2)|(gf==2&ef==2&cf==2)|(df==2&ef==2&ff==2)|(bf==2&ef==2&hf==2))&(blue==0)&(draw==0)){
                text.innerHTML="Gameover- Red won";
                red++;
                }
                if(((af==1&bf==1&cf==1)|(af==1&df==1&gf==1)|(gf==1&hf==1&iff==1)|(cf==1&ff==1&iff==1)|(af==1&ef==1&iff==1)|(gf==1&ef==1&cf==1)|(df==1&ef==1&ff==1)|(bf==1&ef==1&hf==1))&(red==0)&(draw==0)){
                    text.innerHTML="Gameover- Blue won";
                    blue++;
                    }
                    
    if(af>0&bf>0&cf>0&df>0&ef>0&ff>0&gf>0&hf>0&iff>0&red==0&blue==0){
        text.innerHTML="Gameover -Draw Match";
        draw++;
    }
    gb++;
        }
    });
    h.addEventListener("click", non=()=>{
        if(hb==0){

            if(j%2==0){
                hf=2;
            }
            else{
                hf=1;
            }
          h.style.backgroundColor=myarr[j++];
          if(((af==2&bf==2&cf==2)|(af==2&df==2&gf==2)|(gf==2&hf==2&iff==2)|(cf==2&ff==2&iff==2)|(af==2&ef==2&iff==2)|(gf==2&ef==2&cf==2)|(df==2&ef==2&ff==2)|(bf==2&ef==2&hf==2))&(blue==0)&(draw==0)){
            text.innerHTML="Gameover- Red won";
            red++;
            }
            if(((af==1&bf==1&cf==1)|(af==1&df==1&gf==1)|(gf==1&hf==1&iff==1)|(cf==1&ff==1&iff==1)|(af==1&ef==1&iff==1)|(gf==1&ef==1&cf==1)|(df==1&ef==1&ff==1)|(bf==1&ef==1&hf==1))&(red==0)&(draw==0)){
                text.innerHTML="Gameover- Blue won";
                blue++;
                }
                
    if(af>0&bf>0&cf>0&df>0&ef>0&ff>0&gf>0&hf>0&iff>0&red==0&blue==0){
        text.innerHTML="Gameover -Draw Match";
        draw++;
    }
    hb++;
        }
    });
    i.addEventListener("click", non=()=>{
        if(ib==0){

            if(j%2==0){
                iff=2;
            }
            else{
                iff=1;
            }
            i.style.backgroundColor=myarr[j++];
            if(((af==2&bf==2&cf==2)|(af==2&df==2&gf==2)|(gf==2&hf==2&iff==2)|(cf==2&ff==2&iff==2)|(af==2&ef==2&iff==2)|(gf==2&ef==2&cf==2)|(df==2&ef==2&ff==2)|(bf==2&ef==2&hf==2))&(blue==0)&(draw==0)){
                text.innerHTML="Gameover- Red won";
                red++;
                }
                if(((af==1&bf==1&cf==1)|(af==1&df==1&gf==1)|(gf==1&hf==1&iff==1)|(cf==1&ff==1&iff==1)|(af==1&ef==1&iff==1)|(gf==1&ef==1&cf==1)|(df==1&ef==1&ff==1)|(bf==1&ef==1&hf==1))&(red==0)&(draw==0)){
                    text.innerHTML="Gameover- Blue won";
                    blue++;
                    }
                    
    if(af>0&bf>0&cf>0&df>0&ef>0&ff>0&gf>0&hf>0&iff>0&red==0&blue==0){
        text.innerHTML="Gameover -Draw Match";
        draw++;
    }
    ib++;
        }
      });


     
document.addEventListener("DOMContentLoaded",()=>{
    const btns= document.querySelectorAll(".btn");
    const timeline= document.querySelectorAll(".card-sub");

    async function requestData(){
        const response = await fetch("../data.json");
        const data= await response.json();

        btns.forEach( button => {
            button.addEventListener("click",()=>{
                const dwm= button.innerHTML.toLowerCase();
                
                console.log(dwm);
                
                btns.forEach(button1=>{
                    if(button1.classList.contains("active")){
                        button1.classList.remove("active");
                    };
                    
                })
    
                timeline.forEach(time =>{
                    if(time.classList.contains("active")){
                        time.classList.remove("active");
                    };
    
                    if(time.classList.contains(dwm)){
                        time.classList.add("active");
                    }
                });

                const timeframe = document.querySelectorAll("."+dwm);
                console.log(timeframe[0].children[0]);
                const currentTime= document.querySelectorAll(".current_time");
                for(let i=0;i< data.length;i++)
                {
                    timeframe[i].children[0].innerHTML=data[i].timeframes[dwm].current+ (data[i].timeframes[dwm].current>1?"hrs":"hr");
                    
                    if(dwm=="daily"){
                        timeframe[i].children[1].innerHTML="Yesterday - "+ data[i].timeframes[dwm].previous+(data[i].timeframes[dwm].previous>1?"hrs":"hr");
                    }
                    if(dwm=="weekly"){
                        timeframe[i].children[1].innerHTML="Last week - "+ data[i].timeframes[dwm].previous+(data[i].timeframes[dwm].previous>1?"hrs":"hr");
                    }
                    if(dwm=="monthly"){
                        timeframe[i].children[1].innerHTML="Last month - "+ data[i].timeframes[dwm].previous+(data[i].timeframes[dwm].previous>1?"hrs":"hr");
                    }   
                }
    
    
                button.classList.add("active");
            })
            
        });
    



    }

    requestData();
})
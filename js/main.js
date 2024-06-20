document.addEventListener("DOMContentLoaded",()=>{
    const btns= document.querySelectorAll(".btn");
    const timeline= document.querySelectorAll(".card-sub");

    async function requestData(){
        const response = await fetch("../data.json");
        const data= await response.json();
        console.log(data);

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
                const currentTime= document.querySelectorAll(".current_time");
    
                for(let i=0;i< data.length;i++)
                {
                    timeframe[i].children[0].innerHTML=data[i].timeframes[dwm].current;
                    timeframe[i].children[1].innerHTML=data[i].timeframes[dwm].previous;
                    
                }
    
    
                button.classList.add("active");
            })
            
        });
    



    }

    requestData();
})
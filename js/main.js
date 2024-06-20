document.addEventListener("DOMContentLoaded",()=>{
    const btns= document.querySelectorAll(".btn");
    const timeline= document.querySelectorAll(".card-sub");

    btns.forEach( button => {
        button.addEventListener("click",()=>{
            const dwm= button.innerHTML;
            
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

            button.classList.add("active");
        })
        
    });

    



})
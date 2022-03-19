
    var loader = document.querySelector(".loader");
    window.addEventListener("load", function(){
        setTimeout(function func(){
            document.getElementById("noShow").style.display = "none";
        }, 3000);
        const loader =  document.querySelector(".loader");
        loader.className += " hidden";
        
    });
  



/*
var invoke_make_blank = false;
var loader = document.querySelector(".loader");

function make_blank()
{
    if (!invoke_make_blank)
    {


            window.addEventListener("load", function(){
            
                const loader =  document.querySelector(".loader");
                loader.className += " hidden";
            
                
            });
        invoke_make_blank = true;
    }
}*/



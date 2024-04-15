function update(){
   document.getElementById("form1").style.display="none";
    document.getElementById("container").style.display="flex"
    var n=document.getElementById("receiver-name-ip").value;
    var m=document.getElementById("money").value;
    var d=document.getElementById("date_ip").value;
    if (m===null){
        document.getElementById("money").innerHTML=0;

    }
    var date=new Date(d);
    var bank=document.getElementById("banks").value;
    switch(bank){
        case "hdfc":
            document.getElementById("bank-pic").src="hdfc.png"
            document.getElementById("bank-peru").innerHTML="HDFC BANK"
            break;
        case "kvb":
            document.getElementById("bank-pic").src="kvb.png"
            document.getElementById("bank-peru").innerHTML="Karur Vysya Bank"
            break;
        case "indian":
            document.getElementById("bank-pic").src="indian.png"
            document.getElementById("bank-peru").innerHTML="Indian Bank"
            break;
        case "canara":
            document.getElementById("bank-pic").src="canara.png"
            document.getElementById("bank-peru").innerHTML="Canara Bank"
            break;
        case "sbi":
                document.getElementById("bank-pic").src="sbi.png"
                document.getElementById("bank-peru").innerHTML="State Bank Of India"
                break;

    }
    //generate google trans ID randomly
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ97658"
    var ID=""
    for(let i=0;i<15;i++){
        ID+=alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    
  

    document.getElementById("receiver_name").innerHTML="To "+n;
    document.getElementById("logo_ip").innerHTML=n[0].toUpperCase()
    document.getElementById("amount_ip").innerHTML=" <span style='font-size: 0.8em;''>&#8377</span>"+m;
    document.getElementById("date").innerHTML=date.toDateString().substr(4) +" "+ date.toLocaleTimeString().substr(0,4)+" "+date.toLocaleTimeString().substr(-2);
    document.getElementById("upi-trans-id").innerHTML=Math.floor(Math.random()*1000000000000)+3248946271845;
    document.getElementById("receiver-n").innerHTML=n;
    document.getElementById("receiver-upi").innerHTML=document.getElementById("receiver-upi-ip").value;
    document.getElementById("sender-n").innerHTML=document.getElementById("sender-name").value;
    document.getElementById("sender-upi").innerHTML=document.getElementById("sender-upi-ip").value;
    document.getElementById("gid").innerHTML=ID;

}
function back(){
    document.getElementById("container").style.display="none";
    document.getElementById("form1").style.display="flex";
}
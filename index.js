function calculateLove() {
    var yourName = document.getElementById("yourNameInput").value;
    var yourPartner = document.getElementById("partnerNameInput").value;
    

    
if (yourName === "" || yourPartner === "") {
        alert("PLEASE ENTER BOTH NAMES TO CALCULATE!");
        return;
    }

    var perc = Math.random();
    perc = Math.floor(perc * 100) + 1;

    var result = yourName.toUpperCase() + "  💕" + perc + "%💕  " + yourPartner.toUpperCase();
    document.getElementById("result").textContent = result;
}


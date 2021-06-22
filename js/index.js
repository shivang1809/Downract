function myFunction() {
    var link = document.getElementById("link").value;
    var link_check = document.getElementById("link").value.indexOf("https://drive.google.com/file/d/");    
    var fname = document.getElementById("f-name").value.indexOf(".");
    var idtake1 = link.replace('https://drive.google.com/file/d/','');
    var idtake2 = idtake1.replace('/view?usp=sharing','');
    var id = (''+idtake2);
    var output = ('https://drive.google.com/uc?export=download&id='+ id)
    submitOK = "true";
    document.getElementById("output").innerHTML = output;
    if (link_check == -1){
        alert("Invalid link")
        return true
    }
    if (fname == -1){
        alert("Link Generated")
        submitOK = "false"
    }
    if (submitOK == "false") {
        return false;
    }



}


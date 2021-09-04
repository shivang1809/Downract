function myFunction() {
    var link = document.getElementById("link").value;
    var link_check = document.getElementById("link").value.indexOf("https://drive.google.com/file/d/");    
    var fname = document.getElementById("f-name").value.indexOf(".");
    var idtake1 = link.replace('https://drive.google.com/file/d/','');
    var idtake2 = idtake1.replace('/view?usp=sharing','');
    var idtake3 = idtake2.replace('/view?usp=drivesdk','');
    var idtake4 = idtake3.replace('/view','')
    var id = (''+idtake4);
    var x = document.getElementById("myDIV");
    x.style.display = "block";
    var output = ('https://drive.google.com/uc?export=download&id='+ id)
    submitOK = "true";
    document.getElementById("output").innerHTML = output;
    if (link_check === -1){
        alert("Invalid link");
        window.stop()
        //return true;
    }
    if (fname === -1){
        alert("Link Generated")
        submitOK = "false"
    }
    if (submitOK === "false") {
        return false;
    }
    
}

function copy() {
    /* Get the text field */
    var copyText = document.getElementById('output');
    document.getElementById("cobtn").innerHTML = 'Copied!';
    Text = copyText.innerHTML;
    console.log(Text)
    Text = Text.replace('amp;','')
    navigator.clipboard.writeText(Text)
    alert("Link Copied to Clipboard!");
  } 

function tog() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 

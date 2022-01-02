var i
    for(i=2;i<=11;i++){
    if(i<10){
        i="0"+i};
    var id="GridView1_ctl"+i+"_RadioButton1";
    var d=document.getElementById(id);
    d.click();
    document.getElementById("GridView1_ctl10_RadioButton2").click();
}
document.getElementById("TextBox4").value="无";
document.getElementById("Button2").click();

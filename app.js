$(function(){
    var $select = $(".1-60");
    for (i=1;i<=60;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("datefield").setAttribute("min", today);
function myfunc(){
var n=document.getElementById("no").value;
var val=document.getElementById("time_val").value;
var u=document.getElementById("data").value;
var d=document.getElementById("datefield").value;
var d1=document.getElementById("datefield2").value;
 var t=document.getElementById("ti").value;
  var t2=document.getElementById("ti2").value;
if(new Date(d1)<new Date(d) && t2>t)
  {
  alert("Enter valid date after"  +d);
  }
else if(t2<t && new Date(d1)>new Date(d))
    {
      alert("Enter Valid time after"  +t);
    }
else if(t2<t && new Date(d1)<new Date(d))
    {
        alert("Enter Valid Date after" +d+ "and valid time after" +t)
    }
else{
    if(val==1){
    console.log("Every "+n+" Seconds "+" call "+u+" starting from "+d+t+" to "+d1+t2);
    }
    if(val==2){
        console.log("Every "+n+" Minutes "+" call "+u+" starting from "+d+t+" to " +d1+t2);
    }
    if(val==3)
        {
            console.log("Every" +n+ "Hours" + " call "+u+" starting from "+d+t+" to "+d1+t2);
        }
}
}
console.log('dom running');
function appendPizza(pArr, pArrP){
  var i =0;
  $("#fSelL").append("<option class='spTxt op' disabled>Pizza</option>")
  for (var i = 0; i < pArr.length; i++) {
    if(i===0){
      $("#fSelL").append("<option name='pArr[i]' class='op' value="+pArrP[i]+" selected>"+pArr[i]+"<option disabled name='pArrP[i]' class='opP' value="+pArrP[i]+">$"+pArrP[i]+"</option>"+"</option>");
      // $("#fSelL").append("<div name='pArrP[i]' class='opP' value="+pArrP[i]+" selected>$"+pArrP[i]+"</div>");
    }else{
      $("#fSelL").append("<option name='pArr[i]' class='op' value="+pArrP[i]+">"+pArr[i]+"<option disabled name='pArrP[i]' class='opP' value="+pArrP[i]+">$"+pArrP[i]+"</option>"+"</option>")
      // $("#fSelL").append("<option name='pArrP[i]' class='opP' value="+pArrP[i]+">$"+pArrP[i]+"</option>")
    }
  }
}
function appendBurgers(bArr, bArrP){
  var i = 0;
  $("#fSelL").append("<option class='spTxt op' disabled>Burgers</option>")
  bArr.forEach(function(){
    $("#fSelL").append("<option name="+bArr[i]+" class='op' value="+bArrP[i]+">"+bArr[i]+"<option disabled name="+bArrP[i]+" class='opP' value="+bArrP[i]+">$"+bArrP[i++]+"</option>"+"</option>")
    // $("#fSelL").append("<option name="+bArrP[i]+" class='opP' value="+bArrP[i]+">$"+bArrP[i++]+"</option>")
  })
}
var sTotal = 0;
$("#aitBtn").on('click',function(){
  console.log('click');
  var count = $("#numIt").val();
  if($("#numIt").val()>99 || $("#numIt").val()<1){
    alert("Please enter positive quantity")
  }else{
    while (count>0) {
      $("#fSelR").append("<option class='op'>"+$("#fSelL :selected").html()+"<option class='opP'>$"+$("#fSelL :selected").val()+"</option></option>")
      sTotal += parseFloat($("#fSelL").val());
      count--
    }
  }
  $("#area").html("Subtotal: $"+sTotal.toFixed(2)+"                  ")
  $("#area").append("Sales Tax: 3.81%                  ")
  $("#area").append("Total: $"+(sTotal+sTotal*.0381).toFixed(2));
})

$("#dIt").on('click', function(){
  oPoster.done(function(response){
    console.log(response);
  })
})

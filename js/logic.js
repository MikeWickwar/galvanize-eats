console.log('logic running');


var menuGetter = $.ajax({
  url: "https://galvanize-eats-api.herokuapp.com/menu",
  method: "GET",
  dataType: "json"
});

var oPoster = $.ajax({
  url: "https://galvanize-eats-api.herokuapp.com/orders",
  method: "POST"
});

///split object into two arrays
menuGetter.done(function(response){
  console.log(response);
  var menu = response.menu
  var pArr = [];
  var pArrP=[];
  var bArr = [];
  var bArrP=[];
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].type === 'pizza') {
      pArr.push(menu[i].name)
      pArrP.push(menu[i].price)
    }else{
      bArr.push(menu[i].name)
      bArrP.push(menu[i].price)
    }
  }
  console.log(pArr);
  console.log(bArr);
  appendPizza(pArr, pArrP);
  appendBurgers(bArr, bArrP)
})

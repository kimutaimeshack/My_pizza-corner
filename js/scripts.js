// business logic

var mybutton = document.getElementById("btn1")
function Contact(first, last, pizzaSize, pizzaCrust, pizzatoppings, pizzanumber) {
  this.firstName = first;
  this.lastName = last;
  this.pizzaSizePrice = pizzaSize;
  this.pizzaCrustPrice = pizzaCrust;
  this.pizzatoppingsPrice = pizzatoppings;
  this.numberofpizza = pizzanumber;
}


Contact.prototype.Totalcost = function () {
    return (this.pizzaSizePrice + this.pizzaCrustPrice + this.pizzatoppingsPrice )*this.numberofpizza ;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var pizzaCrustPrice;
    var pizzaSizePrice ;
    var pizzatoppingsPrice ;
    var numberofpizza;
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var pizzaSize = $("#PizzaSize").val();
    var pizzaCrust = $("#PizzaCrust").val();
    var pizzatoppings = $("#pizzatoppings").val();
    var pizzanumber = $("#numberofpizza").val();
  
        if (pizzaSize === "700") {
            pizzaSizePrice = (700);
        } else if (pizzaSize === "450") {
            pizzaSizePrice = 450;
        } else if (pizzaSize === "300") {
            pizzaSizePrice = 300;
        }

        if (pizzaCrust === "400") {
            pizzaCrustPrice = 400;
        } else if (pizzaCrust === "160") {
            pizzaCrustPrice = 160;
        } else if (pizzaCrust === "200") {
            pizzaCrustPrice = 200;
        } else if (pizzaCrust === "100") {
            pizzaCrustPrice = 100;
        } else if (pizzaCrust === "150") {
            pizzaCrustPrice = 1500;
        } else if (pizzaCrust === "220") {
            pizzaCrustPrice = 220;
        }

        if (pizzatoppings === "200") {
            pizzatoppingsPrice = 200;
        } else if (pizzatoppings === "190") {
            pizzatoppingsPrice = 190;
        } else if (pizzatoppings === "210") {
            pizzatoppingsPrice = 210;
        }
        if (pizzatoppings === "220") {
            pizzatoppingsPrice = 220;
        }
        if (pizzatoppings === "230") {
            pizzatoppingsPrice = 230;
        }


        if (pizzanumber === "2") {
            numberofpizza = 2;
        } else if (pizzanumber === "3") {
            numberofpizza = 3;
        } else if (pizzanumber === "4") {
            numberofpizza = 4;
        }else if (pizzanumber === "1") {
            numberofpizza = 1;
        } else if (pizzanumber === "5") {
            numberofpizza = 5;
        }else if (pizzanumber === "6") {
            numberofpizza = 6;
        }





    var newContact = new Contact(inputtedFirstName, inputtedLastName, pizzaSizePrice, pizzaCrustPrice, pizzatoppingsPrice, numberofpizza);

   
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

  $("#show-contact").show();
  $("#show-contact h1").text("you order :");
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
  $("#demo").append(newContact.pizzaSizePrice);
  $("#demo2").append(newContact.pizzaCrustPrice);
  $("#demo3").append(newContact.pizzatoppingsPrice);
  $("#demo4").append(newContact.numberofpizza);
  $("#demo5").append(newContact.Totalcost);
  });
}); 
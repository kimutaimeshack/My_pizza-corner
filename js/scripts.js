// business logic

var mybutton = document.getElementById("btn1")
function Contact(first, last, pizzaSize, pizzaCrust, pizzatoppings) {
  this.firstName = first;
  this.lastName = last;
  this.pizzaSizePrice = pizzaSize;
  this.pizzaCrustPrice = pizzaCrust;
  this.pizzatoppingsPrice = pizzatoppings;
}


Contact.prototype.Totalcost = function () {
    return this.pizzaSizePrice + this.pizzaCrustPrice + this.pizzatoppingsPrice ;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var pizzaCrustPrice;
    var pizzaSizePrice ;
    var pizzatoppingsPrice ;
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var pizzaSize = $("#PizzaSize").val();
    var pizzaCrust = $("#PizzaCrust").val();
    var pizzatoppings = $("#pizzatoppings").val();
    var pizzanumber = $("#numberofpizza").val();
  
        if (pizzaSize === "700") {
            pizzaSizePrice = ('large' + 700);
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





    var newContact = new Contact(inputtedFirstName, inputtedLastName, pizzaSizePrice, pizzaCrustPrice, pizzatoppingsPrice);

   
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

  $("#show-contact").show();
  $("#show-contact h2").text("you order :");
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
  $("#demo").append(newContact.pizzaSizePrice);
  $("#demo2").append(newContact.pizzaCrustPrice);
  $("#demo3").append(newContact.pizzatoppingsPrice);




  });
}); 
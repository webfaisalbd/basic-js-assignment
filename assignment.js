// 1.write a function to find out seer to mon  
function seerToMon(seer) {
    if (seer < 0) {
        return "unit does not have negative value";
    }
    else {
        var mon = seer / 40;
        return mon;
    }
}
var seerQuantity = 80;
var conversion = seerToMon(seerQuantity);
console.log(conversion);



// 2.write a function to find out total Sales 
function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
    // per product cost 
    var perShirtPrice = 100;
    var perPantPrice = 200;
    var perShoesPrice = 500;

    if (shirtQuantity < 0 || pantQuantity < 0 || shoesQuantity < 0) {
        return "Quantity does not have negative value";
    }
    else {
        var totalPrice = shirtQuantity * perShirtPrice + pantQuantity * perPantPrice + shoesQuantity * perShoesPrice;
        return totalPrice;
    }
}
var shirtPiece = 1;
var pantPiece = 1;
var shoesPiece = 2;
var totalAmount = totalSales(shirtPiece, pantPiece, shoesPiece);
console.log(totalAmount);



// 3.write a function to find out total Sales 
function deliveryCost(tShirtQuantity) {
    // all quantity shirt cost
    let firstHundredPerTshirtCost = 100;
    let secondHundredPerTshirtCost = 80;
    let restOfAllPerTshirtCost = 50;
    let totalCost = 0;

    if (tShirtQuantity < 0) {
        return "Quantity does not have negative value";
    }
    else if (tShirtQuantity <= 100) {
        totalCost = firstHundredPerTshirtCost * tShirtQuantity;
        return totalCost;
    }
    else if (tShirtQuantity <= 200) {
        let firstHundredTotalCost = 100 * firstHundredPerTshirtCost;
        let restOfShirt = tShirtQuantity - 100;
        let secondHundredTotalCost = restOfShirt * secondHundredPerTshirtCost;
        totalCost = firstHundredTotalCost + secondHundredTotalCost;
        return totalCost;

    }
    else {
        let firstHundredTotalCost = 100 * firstHundredPerTshirtCost;
        let secondHundredTotalCost = 100 * secondHundredPerTshirtCost;
        let restOfShirt = tShirtQuantity - 200;
        let restOfShirtTotalCost = restOfShirt * restOfAllPerTshirtCost;
        totalCost = firstHundredTotalCost + secondHundredTotalCost + restOfShirtTotalCost;
        return totalCost;

    }
}
var totalAmount = deliveryCost(-1);
console.log(totalAmount);



// 4.write a function to find out friend name which consists of 5 character 
function perfectFriend(array) {

    if (array.length == 0) {
        return "empty array";
    }
    else {
        for (var i = 0; i < array.length; i++) {
            element = array[i];

            if (element.length == '') {
                return "name does not have empty string";
            }
            else if (element.length == 5) {
                return element;
            }
        }
    }
}
var friendList = ["faisal", "jhankar", "mahbub", "Rocky", "", "iqra"];
var output = perfectFriend(friendList);
console.log(output);




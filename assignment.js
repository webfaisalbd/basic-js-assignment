// 1.write a function to find out seer to mon  
function seerToMon(seer) {
    if (seer < 0) {
        return "unit(seer) does not have negative value";
    }
    else {
        var mon = (seer / 40).toFixed(2); // fraction quantity is displayed upto 2  decimal point
        return mon;
    }
}
// functions output test  
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
        var totalShirtPrice = shirtQuantity * perShirtPrice; //total shirt price
        var totalPantPrice = pantQuantity * perPantPrice; //total pant price
        var totalShoesPrice = shoesQuantity * perShoesPrice; //total shoes price
        // total (shirt+pant+shoes) price
        var totalPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;
        return totalPrice;
    }
}
// functions output test 
var shirtPiece = 1;
var pantPiece = 1;
var shoesPiece = 2;
var totalAmount = totalSales(shirtPiece, pantPiece, shoesPiece);
console.log(totalAmount);



// 3.write a function to find out total Sales 
function deliveryCost(tShirtQuantity) {
    // different range quantity shirt cost
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
// functions output test 
var totalAmount = deliveryCost(303);
console.log(totalAmount);



// 4.write a function to find out friend name which consists of 5 character 
function perfectFriend(friends) {

    if (friends.length == 0) {
        return "empty array";
    }
    else {
        for (var i = 0; i < friends.length; i++) {
            var element = friends[i];

            if (element.length == '') {
                return "Name does not have empty string";
            }
            else if (element.length == 5) {
                return element;
            }
        }
    }
}
// functions output test 
var friendList = ["faisal", "jhankar", "mahbub", "Rocky", "", "iqra"];
var output = perfectFriend(friendList);
console.log(output);




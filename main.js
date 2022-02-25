"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var x = 10;
var y = 20;
var sum;
// const title - this errors out because it errors out
var isBeginner = true;
var total = 0;
var name = "Ricardo";
var sentence = "My name is ".concat(name, "\nI am a beginner in TS");
// console.log(sentence)
console.log(name.length);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["ricardo", 27];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
console.log(color);
var randomValue = 10;
randomValue = true;
randomValue = 'Ricardo';
/// Not throwing error because of any
// randomValue()
randomValue.toUpperCase();
//For unknown
var myVariable = 10;
// This throws error:
// myVariable.toUpperCase()
console.log(myVariable);
// (myVariable as string).toUpperCase()
var a;
a = 10;
a = true;
var multitype;
multitype = 20;
multitype = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num2;
    }
}
add(5, 10);
add(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Kim',
    lastName: 'Petras'
};
fullName(p);
var OpenFin = /** @class */ (function () {
    function OpenFin(name) {
        this.productName = name;
    }
    OpenFin.prototype.support = function () {
        console.log("I need help with ".concat(this.productName));
    };
    return OpenFin;
}());
var prod1 = new OpenFin('Workspace');
console.log(prod1.productName);
prod1.support();
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service(serviceType) {
        return _super.call(this, serviceType) || this;
    }
    Service.prototype.reachOut = function () {
        console.log('I want to reach out');
    };
    return Service;
}(OpenFin));
var s1 = new Service('Sales');
s1.reachOut();
s1.support();
console.log(s1.productName);

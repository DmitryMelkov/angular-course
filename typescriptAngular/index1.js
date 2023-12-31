var str = 'Hello TS';
var num = 42;
var isActive = false;
var strArray = ['H', 'e'];
var numArray = [1, 1, 2, 3];
function logInfo(name, age) {
    console.log("Info ".concat(name, ", ").concat(age));
}
logInfo('Dmitry', 30);
function calc(a, b) {
    return a + b;
}
console.log(calc(2, 5));
function calc1(a, b) {
    if (typeof b === 'string')
        b = +b;
    return a + b;
}
console.log(calc1(2, 'f'));
var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        this.status = 'working';
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOf = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0.3';
    return Server;
}());
var server = new Server('AWS', 1234);
var user = {
    name: 'Dmitry',
    age: 30,
    logInfo2: function () {
        console.log(this.name + '' + this.age);
    },
};
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHello = function () {
        console.log(this.name + ' Hello!' + this.age);
    };
    return User;
}());
var users = [
    { id: 1, name: 'V', age: 2 },
    { id: 2, name: 'E', age: 23 },
];

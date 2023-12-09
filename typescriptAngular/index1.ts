let str: string = 'Hello TS';
let num: number = 42;
let isActive: boolean = false;

let strArray: string[] = ['H', 'e'];
let numArray: Array<number> = [1, 1, 2, 3];

function logInfo(name: string, age: number): void {
  console.log(`Info ${name}, ${age}`);
}

logInfo('Dmitry', 30);

function calc(a: number, b: number): number {
  return a + b;
}
console.log(calc(2, 5));

function calc1(a: number, b: number | string): number {
  if (typeof b === 'string') b = +b;
  return a + b;
}

console.log(calc1(2, 'f'));

class Server {
  static VERSION = '1.0.3';

  private status: string = 'working';

  constructor(public name: string, protected ip: number) {}

  public turnOn() {
    this.status = 'working';
  }
  protected turnOf() {
    this.status = 'offline';
  }
  public getStatus(): string {
    return this.status;
  }
}

const server: Server = new Server('AWS', 1234);

interface UserInterface {
  name: string;
  age: number;
  logInfo2: () => void;
  id?: any;  //? - не обязательно
}

const user: UserInterface = {
  name: 'Dmitry',
  age: 30,
  logInfo2() {
    console.log(this.name + '' + this.age);
  },
};

interface SayHello {
  sayHello: () => void
}

class User implements SayHello {
  constructor (private name: string, private age: number) {
  }
  sayHello() {
    console.log(this.name + ' Hello!' + this.age);
  }
}

// const arr: Array<number> = [1, 2, 3, 4]

interface User1 {
  id: number,
  name: string,
  age: number
}

const users: Array<User1> = [
  {id: 1, name: 'V', age: 2},
  {id: 2, name: 'E', age: 23},
]

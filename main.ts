export { }

//Declarations

let message = "Hello World"

console.log(message)

let x = 10
const y = 20

let sum

// const title - this errors out because it needs to be declared


//Variable Types
let isBeginner: boolean = true
let total: number = 0
let name: string = "Ricardo"


let sentence: string = `My name is ${name}
I am a beginner in TS`

// console.log(sentence)
console.log(name.length)

let n: null = null
let u: undefined = undefined

let list1: number[] = [1, 2, 3]

let list2: Array<number> = [1, 2, 3]

let person1: [string, number] = ["ricardo", 27]

enum Color { Red = 5, Green, Blue }

let color: Color = Color.Red

console.log(color)

let randomValue: any = 10
randomValue = true
randomValue = 'Ricardo'


/// Not throwing error because of any

// randomValue()
randomValue.toUpperCase()

//For unknown
let myVariable: unknown = 10;

// This throws error:
// myVariable.toUpperCase()
console.log(myVariable);

// (myVariable as string).toUpperCase()


let a
a = 10
a = true

let multitype: number | boolean
multitype = 20
multitype = true


//Functions

function add(num1: number, num2: number = 10): number {
    if (num2) {
        return num1 + num2
    } else {
        return num2
    }
}

add(5, 10)

add(5)


function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Kim',
    lastName: 'Petras'
}

fullName(p)


// Interfaces and Class

interface Person {
    firstName: string;
    lastName: string
}

class OpenFin {
    productName: string

    constructor(name: string) {
        this.productName = name
    }

    support() {
        console.log(`I need help with ${this.productName}`)
    }
}


let prod1 = new OpenFin('Workspace')
console.log(prod1.productName)
prod1.support()



class Service extends OpenFin {
    constructor(serviceType: string) {
        super(serviceType)
    }

reachOut(){
   console.log('I want to reach out') 
}
}

let s1 = new Service('Sales')

s1.reachOut()
s1.support()
console.log(s1.productName)

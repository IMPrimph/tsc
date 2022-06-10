class Vehicle {
    // color: string;

    // constructor(color: string){
    //     this.color = color
    // }

    // this constructor code is equivalent to
    constructor(public color: string){

    }

    protected honk(): void {
        console.log('beep')
    }
}

const vehicle = new Vehicle('red')
console.log(vehicle.color)

class Car extends Vehicle{
    constructor(public wheels: number, color: string){
        super(color)
    }
    private drive(): void{
        console.log("Driving")
    }

    startDrivingProcess(): void{
        this.drive()
        this.honk()
    }
}

const car = new Car(10, "orange")
car.startDrivingProcess()

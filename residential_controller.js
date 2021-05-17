class Column {
  constructor(_id, _amountOfFloors, _amountOfElevators) {
    this.ID = _id,
    this.status = 'offline',
    this.elevatorsList = [1,2,3,4,5,6,7,8,9,10],
    this.callButtonsList = [1,2,3,4,5,6,7,8,9,10]
  }
    requestElevator(_requestedFloor, direction) {

    }
}

class Elevator {
  constructor(_id, _amountOfFloors) {
    this.ID = _id,
    this.status = 'online',
    this.direction,
    this.currentFloor = 1,
    this.door = new Door(_id),
    this.floorRequestButtonsList = [1,2,3,4,5,6,7,8,9,10],
    this.floorRequestList = [1,2,3,4,5,6,7,8,9,10]
  }
    requestFloor(_requestedFloor) {

    }
}

class CallButton {
  constructor(_id, _floor, _direction) {
    this.ID = _id,
    this.status = 'closed',
    this.floor = _floor,
    this.direction
  }
}

class FloorRequestButton {
  constructor(_id, _floor) {
    this.ID = _id,
    this.status = 'off',
    this.floor = _floor
  }
}

class Door {
  constructor(_id) {
    this.ID = _id,
    this.status = 'closed'
  }
}

let callButton1 = new CallButton(1,1,up)
let callButton2 = new CallButton(2,2,up)
let callButton3 = new CallButton(3,3,up)
let callButton4 = new CallButton(4,4,up)
let callButton5 = new CallButton(5,5,up)
let callButton6 = new CallButton(6,6,up)
let callButton7 = new CallButton(7,7,up)
let callButton8 = new CallButton(8,8,up)
let callButton9 = new CallButton(9,9,up)
let callButton10 = new CallButton(10,10,up)

// let door1 = new Door(1)
// let floorRequestButton1 = new FloorRequestButton(1,5)
// let floorRequestButton2 = new FloorRequestButton(1,5)
//
// floorRequestButton2.status = 'on'

let elevator1 = new Elevator(1,10)
let elevator2 = new Elevator(2,10)
elevator1.door.status = 'opened'

console.log(elevator1);
console.log(elevator2);

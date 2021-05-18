//objects
class Column {
  constructor(_id, _amountOfFloors, _amountOfElevators) {
    this.ID = _id,
    this.status = 'offline',
    this.elevatorsList = new Elevator(_id),
    this.callButtonsList = new CallButton(buttonPressed)
  }
    requestElevator(_requestedFloor, _direction) {
      for (let i = 0; Elevator.floorRequestButtonsList.length; i++) {
        let requestedFloor = Elevator[i]
      }
    }
}

class Elevator {
  constructor(_id, _amountOfFloors) {
    this.ID = _id,
    this.status = 'online',
    this.direction,
    this.currentFloor = 1,
    this.door = new Door(_id),
    this.floorRequestButtonsList = new FloorRequestButton(_floor)
    this.floorRequestList = [1,2,3,4,5,6,7,8,9,10]
  }
    requestFloor(_requestedFloor) {
      this.requestedFloor = _requestedFloor;
    }
}

class CallButton {
  constructor(_id, _floor, _direction) {
    this.ID = _id,
    this.status = 'closed',
    this.floor = _floor,
    this.direction
  }
  function buttonPressed(buttonNum) {
    let
    for (let i = 1; i <= 10; i++) {
      new CallButton(i,i,up),
      new CallButton(i,i,down)
    } while (new Door.status == 'closed') {

    }
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




//instatiating objects through a loop


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


//code variations
// let callButtonUp1 = new CallButton(1,1,up)
// let callButtonUp2 = new CallButton(2,2,up)
// let callButtonUp3 = new CallButton(3,3,up)
// let callButtonUp4 = new CallButton(4,4,up)
// let callButtonUp5 = new CallButton(5,5,up)
// let callButtonUp6 = new CallButton(6,6,up)
// let callButtonUp7 = new CallButton(7,7,up)
// let callButtonUp8 = new CallButton(8,8,up)
// let callButtonUp9 = new CallButton(9,9,up)
// let callButtonUp10 = new CallButton(10,10,up)
//
// let callButtonDown1 = new CallButton(1,1,down)
// let callButtonDown2 = new CallButton(2,2,down)
// let callButtonDown3 = new CallButton(3,3,down)
// let callButtonDown4 = new CallButton(4,4,down)
// let callButtonDown5 = new CallButton(5,5,down)
// let callButtonDown6 = new CallButton(6,6,down)
// let callButtonDown7 = new CallButton(7,7,down)
// let callButtonDown8 = new CallButton(8,8,down)
// let callButtonDown9 = new CallButton(9,9,down)
// let callButtonDown10 = new CallButton(10,10,down)

//objects
class Column {
  constructor(_id, _amountOfFloors, _amountOfElevators) {
    // let elevatorsList;
    // let callButtonList;
    this.ID = _id,
    this.status = 'offline',
    this.elevatorsList = [],
    this.callButtonsList = []
  }
    requestElevator(_requestedFloor, _direction) {
    let elevator = new Elevator(_id, _amountOfFloors)
    // let button = new CallButton(_id, _floor, _direction)

    // this.elevatorsList.forEach((item, i) => {
    //   this.elevatorsList.push(elevator)
    //   console.log(elevatorsList);
    // });
    // this.callButtonsList.forEach((item, i) => {
    //   this.callButtonsList.push(button)
    //   console.log(callButtonsList);
    // });

    //select an elevator
      for (i = 0; i < elevators.length; i++) {

      let elevator = new Elevator(_id, _amountOfFloors)
      this.elevatorsList.push(elevator)
      }

      for (i = 0; i < floors.length; i++) {

      let button = new CallButton(_id, _floor, _direction)
      callButtonsList.push(button)
      }

    //sort
    elevator.floorRequestList.push(_requestedFloor)
    console.log(elevator.floorRequestList);

    if (this.elevatorsList === _requestedFloor) {
      elevator.door.status = 'open';
      console.log(elevator.door.status);
    } else if (this.elevatorsList < _requestedFloor) {
      this._direction = 'up';
      console.log(this._direction);
    } else if (this.elevatorsList > _requestedFloor) {
      this._direction = 'down';
      console.log(this._direction);
    }

    // Make the chosen elevator move to the user
      // Operate the doors
    if (this.callButtonsList === _requestedFloor) {
      elevator.door.status = 'open';
      console.log(elevator.door.status);
    } else if (this.callButtonsList < _requestedFloor) {
      this._direction = 'up';
      console.log(this._direction);
    } else if (this.callButtonsList > _requestedFloor) {
      this._direction = 'down';
      console.log(this._direction);
    }

    // Return the chosen elevator, to be used by the elevator requestFloor method
    return elevator;
    }
}

class Elevator {
  constructor(_id, _amountOfFloors) {
    this.ID = _id,
    this.status = 'online',
    this.direction,
    this.currentFloor = 1,
    this.door = new Door(_id),
    this.floorRequestButtonsList = new FloorRequestButton(_floor),
    this.floorRequestList = []
  }
    requestFloor(_requestedFloor) {
      // this.requestedFloor = _requestedFloor;
      //A person enters an elevator, selects a floor of the control panel and it moves to the floor requested. The parameter provided is the requested floor.
      this.floorRequestList.push(_requestedFloor)
      // sort
      if (this.currentFloor === _requestedFloor) {
        this.door.status = 'open';
        console.log(`Door Status: ${this.door.status}`);
      } else if (this.currentFloor < _requestedFloor) {
        this.currentFloor++;
        this.status = 'in transit';
        console.log(this.currentFloor);
      } else if (this.currentFloor > _requestedFloor) {
        this.currentFloor--;
        this.status = 'in transit';
        console.log(this.currentFloor);
      }
    }
}

class CallButton {
  constructor(_id, _floor, _direction) {
    this.ID = _id,
    this.status = 'closed',
    this.floor = _floor,
    this.direction
  }
  // function buttonPressed(buttonNum) {
  //   let
  //   for (let i = 1; i <= 10; i++) {
  //     new CallButton(i,i,up),
  //     new CallButton(i,i,down)
  //   } while (new Door.status == 'closed')
  // }
}

class FloorRequestButton {
  constructor(_id, _floor) {
    this.ID = _id,
    this.status = 'closed',
    this.floor = _floor
  }
}

class Door {
  constructor(_id) {
    this.ID = _id,
    this.status = 'closed'
  }
}


let column1 = new Column(1,1,1)
column1.requestElevator(3,'up')
console.log(column1);

let elevator1 = new Elevator(1,4)
elevator1.requestFloor(7)
console.log(elevator1);


//instatiating objects through a loop


// let door1 = new Door(1)
// let floorRequestButton1 = new FloorRequestButton(1,5)
// let floorRequestButton2 = new FloorRequestButton(1,5)
//
// floorRequestButton2.status = 'on'

/////////////////////////
// let column1 = new Column(1,5,7)
// let chosenElevator = column1.requestElevator(1,'up')
// chosenElevator.requestFloor(6)

// let elevator1 = new Elevator(1,10)
// let elevator2 = new Elevator(2,10)
// elevatorArray.push(elevator1) //
// elevator1.door.status = 'opened'
//
// console.log(elevator1);
// console.log(elevator2);
//
// requestElevator(a, b)
//
// let column2 = new Column(1, 5, 2)
// column2.elevatorsList[0].currentFloor = 5
// column2.requestElevator

/////////////////////////


// callButton.direction = this.direction
//
// move() {
//   let destination = elevator.floorRequestList[0]
//   this.status = 'online'
//   if (this.currentFloor < destination) {
//     this.currentFloor++;
//   } else if (elevator.currentFloor > destination) {
//     this.currentFloor--;
//   }
// }

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

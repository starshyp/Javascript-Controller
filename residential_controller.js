//objects
//OUTSIDE ELEVATOR
class Column {
  constructor(_id, _amountOfFloors, _amountOfElevators) {
    // let elevatorsList;
    // let callButtonList;
    this.ID = _id,
    this.status = 'offline',
    this.elevatorsList = [],
    this.callButtonsList = []

    for (let i = 0; i < _amountOfElevators; i++) {
    let elevator = new Elevator(i, _amountOfElevators)
    this.elevatorsList.push(elevator)
    }
    for (let j = 0; j <= _amountOfFloors; j++) {
    let floorButton = j;
      if (j != 1) {
        let button = new CallButton(j, 'offline', floorButton, 'down');
        this.callButtonsList.push(button)
      } else if (j != _amountOfFloors) {
        let button = new CallButton(j, 'offline', floorButton, 'up');
        this.callButtonsList.push(button)
      }
    }
    // console.table("Elevator List: " + JSON.stringify(this.elevatorsList));
    // console.table("Call Buttons List: " + JSON.stringify(this.callButtonsList));
  }

    bestElevator(_requestedFloor) {
      // let getElevator = this.elevatorsList[0]
      // return getElevator
      let getElevator;
      let floorCost = 10000;

      for (let i = 0; i < this.elevatorsList.length; i++) {
        if (this.elevatorsList[i].status == 'idle') {
          let elevatorDistance = Math.abs(this.elevatorsList[i].currentFloor - _requestedFloor);
          if (elevatorDistance < floorCost) {
            floorCost = elevatorDistance;
            getElevator = this.elevatorsList[i];
            getElevator.status = 'active'
          }
        }
      }
      return getElevator;
      console.log(getElevator);
    };

    requestElevator(_requestedFloor, _direction) {
    //Select an elevator/available cage
    // let elevator2 = new Elevator(this.ID);
    let getElevator = this.bestElevator(_requestedFloor);
    console.log("Elevator " + this.ID + " is on route.");

    getElevator.floorRequestList.push(_requestedFloor);
    console.log(getElevator.floorRequestList);

    getElevator.floorRequestList.sort(sortFloors);

    //Make the chosen elevator move to the user/routed
      //Operate the doors
    getElevator.go(_requestedFloor);


    // getElevator.open();

    return getElevator
    // console.log("Elevator Requested on Floor: " + getElevator.floorRequestList);

    //process request
    // let elevator2 = new Elevator(this.ID);
    // elevator2.floorRequestList.push(_requestedFloor)
    // elevator2.floorRequestList.sort(sortFloors)
    // console.log("Elevator Requested on Floor: " + elevator2.floorRequestList);

    //Make the chosen elevator move to the user/routed
    // elevator2.go()

    //Operate the doors
    // elevator2.open()

    // Return the chosen elevator, to be used by the elevator requestFloor method
    // let elevator3 = new Elevator(this.ID);
    // return elevator3.requestFloor(_requestedFloor);
    // console.log("return elevator: " + elevator3.requestFloor);

    // if (this.callButtonsList === _requestedFloor) {
    //   elevator.door.status = 'open';
    //   console.log(elevator.door.status);
    // } else if (this.callButtonsList < _requestedFloor) {
    //   this._direction = 'up';
    //   console.log(this._direction);
    // } else if (this.callButtonsList > _requestedFloor) {
    //   this._direction = 'down';
    //   console.log(this._direction);
    // }
  };
}

//INSIDE ELEVATOR
class Elevator {
  constructor(_id, _amountOfFloors) {
    this.ID = _id,
    this.status = 'idle',
    this.direction,
    this.currentFloor = 1,
    this.door = new Door(_id),
    this.floorRequestButtonsList = [],
    this.floorRequestList = []

    for (let i = 0; i < _amountOfFloors; i++) {
    let requestButtonObject = new FloorRequestButton(i, _amountOfFloors)
    this.floorRequestButtonsList.push(requestButtonObject)
    // console.log("Button Objects: " + JSON.stringify(this.floorRequestButtonsList))
    }
  }
    requestFloor(_requestedFloor) {
      // this.requestedFloor = _requestedFloor;
      //A person enters an elevator, selects a floor of the control panel and it moves to the floor requested. The parameter provided is the requested floor.

      //process request
      // for (let i = 0; i < this._requestedFloor; i++) {}
      this.floorRequestList.push(_requestedFloor)
      console.log("Floor to go to once inside: " + this.floorRequestList)
      this.floorRequestList.sort(sortFloors)

      //Make the elevator move to the user’s destination
        //Operate the doors
      this.go()
      //
      //
      // this.open()
    }

      go() {
        while (this.floorRequestList.length != 0) {
        let requestedDestination = this.floorRequestList[0];
        this.status = 'in transit';

        if (this.currentFloor === requestedDestination) {
          this.status = 'at destination'
          this.direction = 'idle';
          this.door.status = 'open';
        } else if (this.currentFloor < requestedDestination) {
          this.direction = 'up';
            while (this.currentFloor < requestedDestination) {
              console.log("Elevator is currently on floor: " + this.currentFloor);
              this.currentFloor++;
              // this.currentFloor = this.currentFloor;
            }
        } else if (this.currentFloor > requestedDestination) {
          this.direction = 'down';
            while (this.currentFloor > requestedDestination) {
              console.log("Elevator is currently on floor: " + this.currentFloor);
              this.currentFloor--;
              // this.currentFloor = this.currentFloor;
            }
        }
        this.status = 'offline'
        this.floorRequestList.shift()
        console.log("Elevator has arrived on floor: " + this.currentFloor)
        console.log("Opening doors <>")
        // while (this.currentFloor === _requestedFloor) {
        //   this.status = 'at destination'
        //   this.direction = 'idle';
        //   this.door.status = 'open';
        //   console.log(`Door Status: ${this.door.status}`);
        // }
        // while (this.currentFloor < _requestedFloor) {
        //   this.currentFloor++;
        //   this.status = 'in transit';
        //   this.direction = 'up'
        //   console.log("Current Floor: " + this.currentFloor);
        // }
        // while (this.currentFloor > _requestedFloor) {
        //   this.currentFloor--;
        //   this.status = 'in transit';
        //   this.direction = 'down'
        //   console.log("Current Floor: " + this.currentFloor);
        // }
      }
      this.status = 'idle'
    }

      // open() {
      //   while (this.currentFloor === this._requestedFloor) {
      //     this.door.status = 'open';
      //     console.log("Opening doors <>")
      //   }
      // }
}

class CallButton {
  constructor(_id, _floor, _direction) {
    this.ID = _id,
    this.status = 'off',
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

//functions
function sortFloors(a,b) {
  return a-b;
}

module.exports = {Column, Elevator, CallButton, FloorRequestButton, Door}

// SCENARIO 1 REVISED *NOT WORKING*
// let column = new Column("A",1,1) //_id, _amountOfFloors, _amountOfElevators
// column.elevatorsList[0].currentFloor = 3
// let elevator = column.requestElevator(3,'up') //_requestedFloor, _direction
// elevator.requestFloor(7) //_requestedFloor

// // SCENARIO 1
// let column1 = new Column("A",1,1) //_id, _amountOfFloors, _amountOfElevators
// column1.elevatorsList[0].currentFloor = 3
// column1.requestElevator(3,'up') //_requestedFloor, _direction
// // console.log(column1);
//
// let elevator1 = new Elevator("A",4) //_id, _amountOfFloors
// elevator1.requestFloor(7) //_requestedFloor
// // console.log(elevator1);


//SCENARIO 2
//
let column = new Column("B",2,2);

column.elevatorsList[0].currentFloor = 3
let elevator = column.requestElevator(1,'down');
elevator.requestFloor(6)

column.elevatorsList[0].currentFloor = 6
let elevator1 = column.requestElevator(3,'down')
elevator1.requestFloor(5)

let column2 = new Column("A",4,1)

column2.elevatorsList[0].currentFloor = 10
let elevator2 = column2.requestElevator(9,'up')
elevator2.requestFloor(2)

// SCENARIO 2 - ORIGINAL
// let column1 = new Column(1,2,2)
// column1.requestElevator(1,'down')
//
// let elevator1 = new Elevator(1,5)
// elevator1.requestFloor(6)
// //
// let column2 = new Column(2,3,2)
// column2.requestElevator(3,'down')
//
// let elevator2 = new Elevator(2,2)
// elevator2.requestFloor(5)
// //
// let column3 = new Column(3,4,1)
// column3.requestElevator(9,'up')
//
// let elevator3 = new Elevator(3,7)
// elevator3.requestFloor(9)

//

//SCENARIO 3 - OLD
// let column1 = new Column(1,7,1)
// column1.requestElevator(3,'down')
//
// let elevator1 = new Elevator(1,1)
// elevator1.requestFloor(2)
// //
// let column2 = new Column(2,4,2)
// column2.requestElevator(10,'up')
//
// let elevator2 = new Elevator(2,7)
// elevator2.requestFloor(3)



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



//loop variations
// let button = new CallButton(_id, _floor, _direction)

// this.elevatorsList.forEach((item, i) => {
//   this.elevatorsList.push(elevator)
//   console.log(elevatorsList);
// });
// this.callButtonsList.forEach((item, i) => {
//   this.callButtonsList.push(button)
//   console.log(callButtonsList);
// });


//old best elevator function

function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    const students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1)); // Adding the return value of studentSeat
    }
    return students;
}

// Create a closure classRoom with 10 students
const classRoom = createClassRoom(10);

// Example usage
classRoom.forEach((studentFunc, index) => {
    console.log(`Student ${index + 1} is in seat ${studentFunc()}`);
});

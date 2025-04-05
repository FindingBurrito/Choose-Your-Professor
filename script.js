function askCollege(type) {
    const college = prompt("Enter your college name:");
    if (college) {
        alert(`You chose to rate a ${type} at ${college}.`);
    } else {
        alert("College name is required.");
    }
}

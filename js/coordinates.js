const myCounty = {
    name: "Delaware",
    state: "PA",
    xMin: -75.60154,
    yMin: 39.801919,
    xMax: -75.211463,
    yMax: 40.066196,
}

console.log(myCounty)

function checkCoords() {
    // Read input values from the form (provided)
    const latInput = document.getElementById('lat-input').value;
    const lonInput = document.getElementById('lon-input').value;
    // STEP A: Convert strings to numbers using parseFloat()
    // Your code here:
    const lat = parseFloat(latInput);
    const lon = parseFloat(lonInput);
    // STEP B: Validate — check that both values are actual numbers
    // Hint: isNaN() returns true if the value is not a number
    // If either input is invalid, set a helpful message and return early
    // Your code here:
     if (isNaN(lat) || isNaN(lon)) {
        document.getElementById('result').textContent = "Please enter valid numbers for latitude and longitude.";
        return;
    }
    // STEP C: Check the boundaries using your myCounty object
    // Write an if/else that checks whether both coordinates fall
    // inside all four edges of your county. Use the && operator.
    // Declare a variable called result and assign your message inside each branch.
    // Your code here:
    let result;
    if (
        lat >= myCounty.yMin &&
        lat <= myCounty.yMax &&
        lon >= myCounty.xMin &&
        lon <= myCounty.xMax
    )
    {
        result = "YES! Those coordinates are INSIDE " + myCounty.name + " County!";
    }
    else {
        result = "NO. Those coordinates are OUTSIDE " + myCounty.name + " County.";
    }
    document.getElementById('result').textContent = result;
}
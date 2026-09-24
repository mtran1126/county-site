const myCounty = {
    name: "Delaware",
    state: "PA",
    xMin: -75.60154,
    yMin: 39.801919,
    xMax: -75.211463,
    yMax: 40.066196,
}

const checkBtn = document.querySelector("#check-btn");
const resultDiv = document.querySelector("#result");
checkBtn.addEventListener("click", () => {
      // Read input values from the form (provided)
    const latInput = document.getElementById('lat-input').value;
    const lonInput = document.getElementById('lon-input').value;
    // STEP A: Convert strings to numbers using parseFloat()
    // Your code here:
    const lat = parseFloat(latInput);
    const lon = parseFloat(lonInput);

    resultDiv.classList.remove("result-inside", "result-outside");
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
    if (
        lat >= myCounty.yMin &&
        lat <= myCounty.yMax &&
        lon >= myCounty.xMin &&
        lon <= myCounty.xMax
    )
    {
        resultDiv.textContent = "YES! Those coordinates are INSIDE " + myCounty.name + " County!";
        resultDiv.classList.add("result-inside");

        const midpointLat = (myCounty.yMin + myCounty.yMax) / 2;

        if (lat >= midpointLat) {
            resultDiv.textContent += " You're in the northern half of " + myCounty.name + " County.";
        }
        else {
            resultDiv.textContent += " You're in the southern half of " + myCounty.name + " County.";
        }
    }
    else {
        resultDiv.textContent = "NO. Those coordinates are OUTSIDE " + myCounty.name + " County.";
        resultDiv.classList.add("result-outside");
    }
});

console.log(myCounty)
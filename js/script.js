// Validate input to allow only numbers
function validateInput() {
    const input = document.getElementById("input-suhu");
    if (isNaN(input.value)) {
        input.value = "";  // Clear invalid input
        alert("Masukkan angka yang valid.");
    }
}

// Conversion logic
let isCelsius = true;

function convertTemp() {
    const input = document.getElementById("input-suhu").value;
    const resultField = document.getElementById("hasil-suhu");
    const explanationField = document.getElementById("how-to-suhu");

    if (input === "") {
        alert("Harap masukkan suhu!");
        return;
    }

    let result, explanation;

    if (isCelsius) {
        result = (input * 9/5) + 32;  // Celsius to Fahrenheit
        explanation = `${input}°C × 9/5 + 32 = ${result.toFixed(2)}°F`;
    } else {
        result = (input - 32) * 5/9;  // Fahrenheit to Celsius
        explanation = `(${input}°F - 32) × 5/9 = ${result.toFixed(2)}°C`;
    }

    resultField.value = result.toFixed(2);  // Show result in textarea
    explanationField.value = explanation;   // Show calculation explanation
}

// Reverse conversion logic
function reverseConversion() {
    isCelsius = !isCelsius;  // Toggle the conversion direction

    // Change labels for input and result fields
    document.querySelector("label[for='input-suhu']").textContent = isCelsius ? "Celsius (°C)" : "Fahrenheit (°F)";
    document.querySelector("label[for='hasil-suhu']").textContent = isCelsius ? "Fahrenheit (°F)" : "Celsius (°C)";
    document.getElementById("input-suhu").placeholder = isCelsius ? "Masukkan Celsius..." : "Masukkan Fahrenheit...";

    // Change the instruction text
    const instructionText = document.querySelector("article p");
    if (isCelsius) {
        instructionText.innerHTML = "Masukkan suhu dalam derajat Celsius (&deg;C) dan klik tombol konversi untuk mendapatkan hasil suhu dalam derajat Fahrenheit (&deg;F).";
    } else {
        instructionText.innerHTML = "Masukkan suhu dalam derajat Fahrenheit (&deg;F) dan klik tombol konversi untuk mendapatkan hasil suhu dalam derajat Celsius (&deg;C).";
    }
}

// Reset form logic
function resetForm() {
    document.getElementById("hasil-suhu").value = "";
    document.getElementById("how-to-suhu").value = "";
}

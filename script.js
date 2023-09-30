document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const weightInput = document.getElementById("weight");
    const resultDiv = document.getElementById("result");
    const bromhexineDoseSpan = document.querySelector("#bromhexineDose span");
    const azithromycinDoseSpan = document.querySelector("#azithromycinDose span");
    const piritonDoseSpan = document.querySelector("#piritonDose span");
    const errorDiv = document.getElementById("error");
    const errorMessage = document.getElementById("errorMessage");

    calculateButton.addEventListener("click", function () {
        const patientWeight = parseFloat(weightInput.value);

        try {
            const doses = calculateDoses(patientWeight);
            displayDoses(doses);
        } catch (error) {
            displayError(error.message);
        }
    });

    function calculateDoses(weight) {
        if (weight <= 0 || isNaN(weight)) {
            throw new Error("Weight should be a positive number.");
        }

        const doses = {
            bromhexine: (weight * 0.3 * 5) / 4,      // Convert mg to ml
            azithromycin: (weight * 10 * 5) / 200,   // Convert mg to ml
            piriton: (weight * 0.1 * 5) / 4,         // Convert mg to ml
        };

        return doses;
    }

    function displayDoses(doses) {
        bromhexineDoseSpan.textContent = doses.bromhexine.toFixed(2);
        azithromycinDoseSpan.textContent = doses.azithromycin.toFixed(2);
        piritonDoseSpan.textContent = doses.piriton.toFixed(2);
        resultDiv.classList.remove("hidden");
        errorDiv.classList.add("hidden");
    }

    function displayError(message) {
        errorMessage.textContent = message;
        resultDiv.classList.add("hidden");
        errorDiv.classList.remove("hidden");
    }
});

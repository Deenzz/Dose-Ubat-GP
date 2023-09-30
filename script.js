document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const weightInput = document.getElementById("weight");
    const resultDiv = document.getElementById("result");
    const bromhexineDoseSpan = document.querySelector("#bromhexineDose span");
    const azithromycinDoseSpan = document.querySelector("#azithromycinDose span");
    const piritonDoseSpan = document.querySelector("#piritonDose span");
    const augmentinDoseSpan = document.querySelector("#augmentinDose span");
    const amoxicillinDoseSpan = document.querySelector("#amoxicillinDose span");
    const cefuroximeDoseSpan = document.querySelector("#cefuroximeDose span");
    const paracetamolDoseSpan = document.querySelector("#paracetamolDose span");
    const prednisoloneDoseSpan = document.querySelector("#prednisoloneDose span");
    const domperidoneDoseSpan = document.querySelector("#domperidoneDose span");
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
            augmentin: (weight * 30 * 5) / 228,         // Convert mg to ml
            amoxicillin: (weight * 30 * 5) / 250,         // Convert mg to ml
            cefuroxime: (weight * 10 * 5) / 125,         // Convert mg to ml
            azithromycin: (weight * 12 * 5) / 200,         // Convert mg to ml
            paracetamol: (weight * 15 * 5) / 250,         // Convert mg to ml
            prednisolone: (weight * 1 * 5) / 3,         // Convert mg to ml
            domperidone: (weight * 0.25 * 5) / 5,         // Convert mg to ml
        };

        return doses;
    }

    function displayDoses(doses) {
        bromhexineDoseSpan.textContent = doses.bromhexine.toFixed(2);
        azithromycinDoseSpan.textContent = doses.azithromycin.toFixed(2);
        piritonDoseSpan.textContent = doses.piriton.toFixed(2);
        augmentinDoseSpan.textContent = doses.augmentin.toFixed(2);
        amoxicillinDoseSpan.textContent = doses.amoxicillin.toFixed(2);
        cefuroximeDoseSpan.textContent = doses.cefuroxime.toFixed(2);
        azithromycinDoseSpan.textContent = doses.azithromycin.toFixed(2);
        paracetamolDoseSpan.textContent = doses.paracetamol.toFixed(2);
        prednisoloneDoseSpan.textContent = doses.prednisolone.toFixed(2);
        domperidoneDoseSpan.textContent = doses.domperidone.toFixed(2);
        resultDiv.classList.remove("hidden");
        errorDiv.classList.add("hidden");
    }

    function displayError(message) {
        errorMessage.textContent = message;
        resultDiv.classList.add("hidden");
        errorDiv.classList.remove("hidden");
    }
});

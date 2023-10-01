document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const weightInput = document.getElementById("weight");
    const resultDiv = document.getElementById("result");
    const medicationDosesList = document.getElementById("medicationDoses");
    const errorDiv = document.getElementById("error");
    const errorMessage = document.getElementById("errorMessage");

    calculateButton.addEventListener("click", function () {
        // Clear previous results and errors
        clearResults();

        const patientWeight = parseFloat(weightInput.value);

        if (isNaN(patientWeight) || patientWeight <= 0) {
            displayError("Please enter a valid positive weight.");
        } else {
            try {
                const dosesAndNotes = calculateDoses(patientWeight);
                displayDosesAndNotes(dosesAndNotes);
            } catch (error) {
                displayError(error.message);
            }
        }
    });

    function calculateDoses(weight) {
        const medicationData = [
            { name: "Paracetamol", dose: (weight * 5 * 15) / 250, note: "QID" },
            { name: "Amoxicillin", dose: (weight * 5 * 15) / 250, note: "MAX DOSE: Amox 10ml TDS" },
            { name: "Cephalexin", dose: (weight * 5 * 15) / 250, note: "MAX DOSE: Cephalexin 10ml QID" },
            { name: "Cefaclor", dose: (weight * 5 * 15) / 250, note: "MAX DOSE: Cefaclor 5ml TDS" },
            { name: "Cloxacilin", dose: (weight * 5 * 15) / 250, note: "MAX DOSE: Cloxacilin 10ml QID" },
            { name: "Augmentin (228mg/5ml)", dose: (weight * 5 * 15) / 228, note: "BD/TDS for 5 days" },
            { name: "Augmentin (312.5mg/5ml)", dose: (weight * 5 * 15) / 312.5, note: "BD/TDS for 5 days" },
            { name: "Augmentin (457mg/5ml)", dose: (weight * 5 * 15) / 457, note: "BD/TDS for 5 days" },
            { name: "Azithromycin", dose: (weight * 5 * 10) / 200, note: "BD for 3 days" },
            { name: "Cefuroxime", dose: (weight * 5 * 10) / 125, note: "BD for 5 days" },
            { name: "Erythromycin", dose: (weight * 5 * 20) / 200, note: "BD for 5 days" },
            { name: "Cetirizine", dose: (weight * 5 * 0.25) / 5, note: "Use > 2 y/o , OD" },
            { name: "Desloratadine", dose: (weight * 5 * 0.1) / 2.5, note: "Use > 1 y/o , OD" },
            { name: "Piriton", dose: (weight * 5 * 0.1) / 4, note: "Use > 2 y/o , Max dose 5ml TDS" },
            { name: "Bromhexine", dose: (weight * 5 * 0.3) / 4, note: "Use > 2 y/o , TDS" },
            { name: "Benadryl", dose: (weight * 5 * 1) / 14, note: "Use > 2 y/o , Not for ASTHMA pt. Max dose 10ml TDS" },
            { name: "Ibuprofen", dose: (weight * 5 * 5) / 100, note: "TDS/QID, Caution: GI bleed" },
            { name: "Prednisolone", dose: (weight * 5 * 0.15) / 2.5, note: "TDS. AEBA can use 1mg/kg OD." },
            { name: "Promethazine", dose: (weight * 5 * 0.2) / 5, note: "Use > 2 y/o , TDS (Antiemetic/Antihistamine)" },
            { name: "Domperidone", dose: (weight * 5 * 0.25) / 5, note: "TDS" },

        ];

        return medicationData;
    }

    function displayDosesAndNotes(dosesAndNotes) {
        dosesAndNotes.forEach((medication) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${medication.name}: ${medication.dose.toFixed(2)} ml - Note: ${medication.note}`;
            medicationDosesList.appendChild(listItem);
        });

        resultDiv.classList.remove("hidden");
    }

    function displayError(message) {
        errorMessage.textContent = message;
        errorDiv.classList.remove("hidden");
    }

    function clearResults() {
        while (medicationDosesList.firstChild) {
            medicationDosesList.removeChild(medicationDosesList.firstChild);
        }
        resultDiv.classList.add("hidden");
        errorDiv.classList.add("hidden");
    }
});

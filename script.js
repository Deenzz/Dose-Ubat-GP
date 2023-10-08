document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const weightInput = document.getElementById("weight");
    const resultDiv = document.getElementById("result");
    const medicationDosesList = document.getElementById("medicationDoses");
    const errorDiv = document.getElementById("error");
    const errorMessage = document.getElementById("errorMessage");
    const toggleDarkModeButton = document.getElementById("toggleDarkMode");
    const themeStylesheet = document.getElementById("themeStylesheet");

    // Function to toggle dark mode
    function toggleDarkMode() {
        // Toggle dark mode styles by toggling the "dark-mode" class on the body
        document.body.classList.toggle("dark-mode");

        // Toggle the theme stylesheet link
        if (themeStylesheet.getAttribute("href") === "styles.css") {
            themeStylesheet.setAttribute("href", "styles-dark.css");
        } else {
            themeStylesheet.setAttribute("href", "styles.css");
        }
    }

    // Event listener for the dark mode button
    toggleDarkModeButton.addEventListener("click", toggleDarkMode);

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
              { name: "Paracetamol", dose: (weight * 5 * 15) / 250, note: "15mg/kg using 250mg/5ml per bottle; use max QID" },
    { name: "Amoxicillin", dose: (weight * 5 * 15) / 250, note: "15mg/kg using 250mg/5ml per bottle; MAX DOSE: Amox 10ml TDS" },
    { name: "Cephalexin", dose: (weight * 5 * 15) / 250, note: "15mg/kg using 250mg/5ml per bottle; MAX DOSE: Cephalexin 10ml QID" },
    { name: "Cefaclor", dose: (weight * 5 * 15) / 250, note: "15mg/kg using 250mg/5ml per bottle; MAX DOSE: Cefaclor 5ml TDS" },
    { name: "Cloxacilin", dose: (weight * 5 * 15) / 250, note: "15mg/kg using 250mg/5ml per bottle; MAX DOSE: Cloxacilin 10ml QID" },
    { name: "Augmentin (228mg/5ml)", dose: (weight * 5 * 15) / 228, note: "15mg/kg using 228mg/5ml per bottle; BD/TDS for 5 days" },
    { name: "Augmentin (312.5mg/5ml)", dose: (weight * 5 * 15) / 312.5, note: "15mg/kg using 312.5mg/5ml per bottle; BD/TDS for 5 days" },
    { name: "Augmentin (457mg/5ml)", dose: (weight * 5 * 15) / 457, note: "15mg/kg using 457mg/5ml per bottle; BD/TDS for 5 days" },
    { name: "Azithromycin", dose: (weight * 5 * 10) / 200, note: "10mg/kg using 200mg/5ml per bottle; BD for 3 days" },
    { name: "Cefuroxime", dose: (weight * 5 * 10) / 125, note: "10mg/kg using 125mg/5ml per bottle; BD for 5 days" },
    { name: "Erythromycin", dose: (weight * 5 * 20) / 200, note: "20mg/kg using 200mg/5ml per bottle; BD for 5 days" },
    { name: "Cetirizine", dose: (weight * 5 * 0.25) / 5, note: "0.25mg/kg using 5mg/5ml per bottle; Use > 2 y/o , OD" },
    { name: "Desloratadine", dose: (weight * 5 * 0.1) / 2.5, note: "0.1mg/kg using 2.5mg/5ml per bottle; Use > 1 y/o , OD" },
    { name: "Piriton", dose: (weight * 5 * 0.1) / 4, note: "0.1mg/kg using 4mg/5ml per bottle; Use > 2 y/o , Max dose 5ml TDS" },
    { name: "Bromhexine", dose: (weight * 5 * 0.3) / 4, note: "0.3mg/kg using 4mg/5ml per bottle; Use > 2 y/o , TDS" },
    { name: "Benadryl", dose: (weight * 5 * 1) / 14, note: "1mg/kg using 14mg/5ml per bottle; Use > 2 y/o , Not for ASTHMA pt. Max dose 10ml TDS" },
    { name: "Ibuprofen", dose: (weight * 5 * 5) / 100, note: "5mg/kg using 100mg/5ml per bottle; TDS/QID, Caution: GI bleed" },
    { name: "Prednisolone", dose: (weight * 5 * 0.15) / 2.5, note: "0.15mg/kg using 2.5mg/5ml per bottle; TDS. AEBA can use 1mg/kg OD." },
    { name: "Promethazine", dose: (weight * 5 * 0.2) / 5, note: "0.2mg/kg using 5mg/5ml per bottle; Use > 2 y/o , TDS (Antiemetic/Antihistamine)" },
    { name: "Domperidone", dose: (weight * 5 * 0.25) / 5, note: "0.25mg/kg using 5mg/5ml per bottle; TDS" },

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


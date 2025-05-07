document.getElementById("btn-download").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const nombre = document.getElementById("card-nombre").textContent;
    const doctor = document.getElementById("card-doctor").textContent;
    const fecha = document.getElementById("card-fecha").textContent;
    const diagnosis = document.getElementById("card-diagnosis").textContent;
    const medications = document.getElementById("card-medications").textContent;

    doc.setFontSize(16);
    doc.text("Medical Prescription", 20, 20);

    doc.setFontSize(12);
    doc.text(`Patient: ${nombre}`, 20, 40);
    doc.text(`Doctor: ${doctor}`, 20, 50);
    doc.text(`Date: ${fecha}`, 20, 60);
    doc.text(`Diagnosis: ${diagnosis}`, 20, 70);
    doc.text(`Medications: ${medications}`, 20, 80);

    doc.save("prescription.pdf");
});
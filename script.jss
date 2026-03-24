function next(page){
    window.location = page;
}

function saveVictim(){
    localStorage.setItem("name", fname.value + " " + lname.value);
    localStorage.setItem("dob", dob.value);
    localStorage.setItem("phone", phone.value);
    next("crime.html");
}

function saveCrime(){
    localStorage.setItem("crime", crime.value);
    localStorage.setItem("date", date.value);
    localStorage.setItem("time", time.value);
    localStorage.setItem("loss", loss.value);
    localStorage.setItem("reported", reported.value);
    next("evidence.html");
}

function generatePDF(){
    var doc = new jsPDF();

    doc.text("FIRST INFORMATION REPORT (FIR)", 20, 10);

    doc.text("Complainant: " + localStorage.getItem("name"), 10, 30);
    doc.text("DOB: " + localStorage.getItem("dob"), 10, 40);
    doc.text("Phone: " + localStorage.getItem("phone"), 10, 50);

    doc.text("Crime Type: " + localStorage.getItem("crime"), 10, 70);
    doc.text("Date: " + localStorage.getItem("date"), 10, 80);
    doc.text("Time: " + localStorage.getItem("time"), 10, 90);
    doc.text("Loss: " + localStorage.getItem("loss"), 10, 100);

    doc.text("Previously Reported: " + localStorage.getItem("reported"), 10, 110);

    doc.save("FIR_Report.pdf");
}

// Mock database
let members = [
    { MemberID: 1, FirstName: "John", LastName: "Doe", Email: "john.doe@example.com", MembershipType: "Premium" },
];

let classes = [
    { ClassID: 1, ClassName: "Yoga Basics", Instructor: "Alice Green", Duration: 60 },
];

let attendance = [
    { AttendanceID: 1, MemberID: 1, ClassID: 1, AttendanceDate: "2025-04-15" },
];

let payments = [
    { PaymentID: 1, MemberID: 1, Amount: 50.00, PaymentDate: "2025-04-10", Status: "Completed" },
];

// Render data dynamically
function renderData() {
    const membersList = document.getElementById("members-list");
    membersList.innerHTML = "";
    members.forEach((member, index) => {
        membersList.innerHTML += `
            <p>${member.FirstName} ${member.LastName} (${member.MembershipType})
                <button onclick="editMember(${index})">Edit</button>
                <button onclick="deleteMember(${index})">Delete</button>
            </p>`;
    });

    const classesList = document.getElementById("classes-list");
    classesList.innerHTML = "";
    classes.forEach((cls, index) => {
        classesList.innerHTML += `
            <p>${cls.ClassName} by ${cls.Instructor} (${cls.Duration} mins)
                <button onclick="editClass(${index})">Edit</button>
                <button onclick="deleteClass(${index})">Delete</button>
            </p>`;
    });

    const attendanceList = document.getElementById("attendance-list");
    attendanceList.innerHTML = "";
    attendance.forEach((att) => {
        attendanceList.innerHTML += `<p>Member ${att.MemberID} attended Class ${att.ClassID} on ${att.AttendanceDate}</p>`;
    });

    const paymentsList = document.getElementById("payments-list");
    paymentsList.innerHTML = "";
    payments.forEach((pay) => {
        paymentsList.innerHTML += `<p>Member ${pay.MemberID} paid $${pay.Amount} (${pay.Status})</p>`;
    });
}

// Add new member
function addMember() {
    const newMember = prompt("Enter new member details (FirstName LastName MembershipType):");
    if (newMember) {
        const [FirstName, LastName, MembershipType] = newMember.split(" ");
        members.push({ MemberID: members.length + 1, FirstName, LastName, Email: "", MembershipType });
        renderData();
    }
}

// Edit member
function editMember(index) {
    const updatedDetails = prompt("Update member details (FirstName LastName MembershipType):");
    if (updatedDetails) {
        const [FirstName, LastName, MembershipType] = updatedDetails.split(" ");
        members[index] = { ...members[index], FirstName, LastName, MembershipType };
        renderData();
    }
}

// Delete member
function deleteMember(index) {
    members.splice(index, 1);
    renderData();
}

// Add class
function addClass() {
    const newClass = prompt("Enter new class details (ClassName Instructor Duration):");
    if (newClass) {
        const [ClassName, Instructor, Duration] = newClass.split(" ");
        classes.push({ ClassID: classes.length + 1, ClassName, Instructor, Duration });
        renderData();
    }
}

// Edit class
function editClass(index) {
   // Similar logic as editMember()
}

// Delete class
function deleteClass(index) {
   // Similar logic as deleteMember()
}

// Initialize app
document.addEventListener("DOMContentLoaded", renderData);

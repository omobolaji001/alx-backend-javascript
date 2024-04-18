interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Habeeb",
  lastName: "Oyebode",
  age: 37,
  location: "Nigeria"
}

const student2: Student = {
  firstName: "Xavier",
  lastName: "Hernandez",
  age: 43,
  location: "Spain"
}

const studentList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const tr: HTMLTableRowElement = document.createElement("tr");
const th1: HTMLTableCellElement = document.createElement("th");
const th2: HTMLTableCellElement = document.createElement("th");

th1.innerText = "FirstName";
th2.innerText = "Location";

th1.style.padding = ".5rem";
th2.style.padding = ".5rem";

tr.append(th1);
tr.append(th2);
thead.append(tr);
table.append(thead);

studentList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const td1: HTMLTableCellElement = document.createElement("td");
  const td2: HTMLTableCellElement = document.createElement("td");

  td1.innerText = student.firstName;
  td2.innerText = student.location;

  td1.style.padding = ".5rem";
  td2.style.padding = ".5rem";

  row.append(td1);
  row.append(td2);
  tbody.append(row);
});

table.append(tbody);
body.append(table);

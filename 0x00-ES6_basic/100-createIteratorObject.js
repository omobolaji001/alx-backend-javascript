export default function createIteratorObject(report) {
 const employees = [];
  for (const emp of Object.values(report.allEmployees)) {
    employees.push(...emp);
  }
  return employees;
}

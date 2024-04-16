export default function getStudentIds(students) {
  return students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}

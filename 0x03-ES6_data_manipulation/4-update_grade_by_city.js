export default function updateStudentGradeByCity(listOfStudents, city, newGrade) {
  const students = listOfStudents.filter((student) => student.location === city);

  return students.map((student) => {
    const studentGrade = newGrade.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
}

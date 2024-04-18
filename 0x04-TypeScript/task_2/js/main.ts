interface DirectorInterface{
	workFromHome():string
	getCoffeeBreak():string
	workDirectorTasks():string

}


interface TeacherInterface{
	workFromHome():string
	getCoffeeBreak():string
	workTeacherTasks():string

}

class Director implements DirectorInterface{
	workFromHome(): string {
		return `Working from home`;
	}

	getCoffeeBreak(): string {
		return `Getting a coffee break`;
	}

	workDirectorTasks(): string {
		return `Getting to director tasks`;
	}
}


class Teacher  implements TeacherInterface{
	workFromHome(): string {
		return `Cannot work from home`;
	}

	getCoffeeBreak(): string {
		return `Cannot have a break`;
	}

	workTeacherTasks(): string {
		return `Getting to work`;
	}
}

export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();

export const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

export const executeWork = (employee: Teacher | Director): void => {
  const work = employee instanceof Teacher? employee.workTeacherTasks() : employee.workDirectorTasks();
  console.log(work)
}

type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects) : string => {
  return todayClass === 'Math' ? 'Teaching Math': 'Teaching History';
}

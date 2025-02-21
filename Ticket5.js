//Combining Arrays and Objects
let projects = [
    { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
    { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
    { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
];
console.log(projects);
//Create a new array of project names
let projectNames = projects.map(x=>x.projectName);
console.log(projectNames);  // ['Project A', 'Project B', 'Project C']

//Filter projects that are "in progress"
let inProgressProjects = projects.filter(project => project.status === 'in progress');
console.log(inProgressProjects);
//Sort projects by deadline in ascending order
projects.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
console.log(projects);


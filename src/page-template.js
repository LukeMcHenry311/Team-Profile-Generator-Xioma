const generateTeam = team => {
    const generateManager = manager => {

    }
    const generateEngineer = engineer => {

    }
    const generateIntern = intern => {

    }
    const html = []
    
    html.push(team
        .filter(employee => employee.getRole() === "manager")
        .map(manager => generateManager(manager))
     );
    html.push(team
        .filter(employee => employee.getRole() === "engineer")
        .map(engineer => generateEngineer(engineer))
    );
    html.push(team
        .filter(employee => employee.getRole() === "intern")
        .map(intern => generateIntern(intern))
     );

     return html.join("");
}

module.exports = team => {
    return `${generateTeam(team)}`;
};
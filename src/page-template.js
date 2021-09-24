const generateTeam = team => {
    let generateManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Name: ${manager.getName()}</li>
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: ${manager.getEmail()} </li>
                </ul>
            </div>
            </div>
        `;
    };
    let generateEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Name: ${engineer.getName()} </li>
                    <li class="list-group-item">ID: ${engineer.getId()} </li>
                    <li class="list-group-item">Email: ${engineer.getEmail()} </li>
                </ul>
            </div>
            </div>
        `;
    };
    let generateIntern = intern => {
        return `
        <div class="card">
            <div class="card-header">
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Name: ${intern.getName()}</li>
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: ${intern.getEmail()}</li>
                </ul>
            </div>
            </div>
        `;
    };

    const documenti = [];

    documenti.push(team.filter(employee => employee.getRole() === "manager")
    .map(manager => generateManager(manager)));
    documenti.push(team.filter(employee =>  employee.getRole() === "intern")
    .map(intern => generateIntern(intern)));
    documenti.push(team.filter(employee => employee.getRole() === "engineer")
    .map(engineer => generateEngineer(engineer)));
        // .join is smashing together the three employee classes.
        return documenti.join("");
};

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>blue</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
      <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
             </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `
}
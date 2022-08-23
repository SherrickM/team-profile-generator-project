function createHtml(team){

function managerHtml(manager){
  return(
    `
    <div class="col-md-3 card">
        <div class="card-head">
            <h3>${manager.name}</h3>
            <h4><i class="fa-solid fa-user-clock"></i> Manager </h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
);
  
}
function engineerHtml(engineer){
  return (
      `
    <div class="col-md-3 card">
        <div class="card-head">
            <h3>${engineer.name}</h3>
            <h4><i class="fa-solid fa-user-gear"></i> Engineer </h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer}">${engineer.gitHub}</a></li>
            </ul>
        </div>
    </div>
    `
  );
}
function internHtml(intern){
  return(
    `
    <div class="col-md-3 card">
        <div class="card-head">
            <h3>${intern.name}</h3>
            <h4><i class="fa-solid fa-user-graduate"></i> Intern </h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `
);
}

  const cards = []

  cards.push(team.filter(item =>item.getRole()=== 'Manager').map(manager => managerHtml(manager)))
  cards.push(team.filter(item =>item.getRole()=== 'Engineer').map(Engineer => engineerHtml(Engineer)))
  cards.push(team.filter(item =>item.getRole()=== 'Intern').map(Intern => internHtml(Intern)))

  return cards.join('')
}

module.exports =  (answers) => {
  return` 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<link rel="stylesheet" href="/dist/style.css">
  <title>Team Profile Generator</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="display-4">Team Profile Generator</h1>
   </div>
</div>
<main>
${createHtml(answers)}
  
</main>


</body>
</html>`
};

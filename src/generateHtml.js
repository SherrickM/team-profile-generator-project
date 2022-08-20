function createHtml(team){

function managerHtml(manager){
  return`
  `
}
function engineerHtml(engineer){
  return`
  `
}
function internHtml(intern){
  return`
  `
}

  const cards = []

  cards.push(team.filter(item =>item.getRole()=== 'Manager').map(manager => managerHtml(manager)))
  cards.push(team.filter(item =>item.getRole()=== 'Engineer').map(Engineer => EngineerHtml(Engineer)))
  cards.push(team.filter(item =>item.getRole()=== 'Intern').map(Intern => InternHtml(Intern)))

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
  <title>Team Profile Generator</title>
</head>
<body>

${createHtml(answers)}

</body>
</html>`
};

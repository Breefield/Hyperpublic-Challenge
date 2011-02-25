var people = new Array();
data = data.split("\n");
for(var i in data) {
  if(people[i] == undefined) people[i] = {};
  for(var j in data[i]) {
    people[i][j] = (data[i][j] == 'X') ? true : false;
  }
}

var persons = people.length - 1;
for(var i = 0; i < persons; i++) {
  console.log('-----------------------' + i);
  people[i].invited = countInvites(i);
  console.log(people[i].invited);
}

function countInvites(b) {
  var count = 0;
  for(var i = b + 1; i < persons; i++) {
    console.log(i);
    for(var j in persons[i]) {
      if(persons[i][j]) count++;
      count += countInvites(j);
    }
  }
  return count;
}
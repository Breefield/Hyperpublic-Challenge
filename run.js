var people = new Array();
data = data.split("\n");
for(var i in data) {
  if(people[i] == undefined) people[i] = new Array();
  for(var j in data[i]) {
    people[i][j] = (data[i][j] == 'X') ? true : false;
  }
}

var persons = people.length - 1;
var counts = new Array();
for(var i = 0; i < persons; i++) people[i].invited = countInvites(i, i);

counts.sort();
console.log(counts);

function countInvites(b, k) {
  var count = 0;
  var invites = people[k].length;
  for(var i = 0; i < invites; i++) {
    if(people[k][i]) {
      count++;
      count += countInvites(b, i);
    }
  }
  return count;
}
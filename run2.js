var karma_totals = new Array(2349,2102,2001,1747);
var activity_points = new Array(98,42,23,17,3,2);
var karma_tasks = new Array();
          
var total = 1;
for(var i in karma_totals) {
  console.log('#####################');
  karma_tasks[i] = findTasks(karma_totals[i]);
  total *= karma_tasks[i];
  console.log('::' + total);
}

console.log(karma_tasks);

function findTasks(k) {
  var t = 0;
  while(k > 0) {
    t++;
    if(k == 18) {
      k -= activity_points[4];
    } else if(k <= 10 && k > 6) {
      k -= activity_points[5];
    } else {
      for(var j in activity_points) {
        if(k >= activity_points[j]) {
          k -= activity_points[j];
          break;
        } 
      }
    }
  }
  return t;
}
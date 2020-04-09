function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let u in usersObj) {
    if(usersObj[u].online) {
      count += 1;
    }    
  }
  return count;
  // Only change code above this line
}

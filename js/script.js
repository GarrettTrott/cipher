var sent = prompt("enter text:");
console.log(sent);

function firstLastCap(str) {
  let first = str.charAt(0).toUpperCase();
  let last = str.slice(-1).toUpperCase();
  return first + last;
}

function rev(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function flCapRev(str) {
  return rev(firstLastCap(str));
}

function flCapRevCat(str) {
  return str + rev(firstLastCap(str));
}

function fourth(str) {
  return str.charAt(math.round(parseInt(str.length()) / 2)) + str;
}
alert(firstLastCap(sent));
alert(rev(sent));
alert(flCapRev(sent));
alert(flCapRevCat(sent));
alert(fourth(sent));

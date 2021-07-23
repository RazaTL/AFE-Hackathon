var p = document.getElementById('text');
p.innerHTML = '';
var n = 0;
var str = "Class Peccy:\n    def move():\n      while True:\n         move()\n  pec = Peccy()\n  pec.move()";
console.log(str);
var typeTimer = setInterval(function loop1() {
  prev = str.length;
  n = n + 1;
  p.innerHTML = "> " + str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = "> " + str;
    n = 0;
    var typeTimer2 = setInterval(function loop2() {

      if (n === 0) {
        p.innerHTML = "> " + str + "|"
        n = 1;
      } else {
        p.innerHTML = "> " + str
        n = 0;
      }
      if(str.length != prev) {
        console.log("I have changed!");
        prev = str.length;
        p.innerHTML = '';
        n = 0;
        clearInterval(typeTimer2);
        typeTimer = setInterval(loop1, 15);
      };
    }, 500);
};
}, 15)
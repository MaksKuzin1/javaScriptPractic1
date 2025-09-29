console.log("Задачка 1 \n для y=a*cosx c шагом п = п/8 при -п < x < п");
const a = 5;
let x = -Math.PI;

while (x<Math.PI) {
    console.log("при x = " + x + "\ny = " + a*Math.cos(x));
    x += Math.PI/8;
}
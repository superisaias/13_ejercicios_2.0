
function resultado(){
var a = parseFloat(document.Form1.a1.value);
var b = parseFloat(document.Form1.b2.value);
var c = parseFloat(document.Form1.c3.value);


if (a==b & b==c) // condicion
{
document.write('todos son iguales =' +a); // MUESTRA EN PANTALLA
 
}
if (a>b & b==c) // condicion
{
document.write('el mayor es='+a);
document.write('<br> El segundo y tercero son iguales='+b);
}
if (a<b & b==c) // condicion
{
document.write('el segundo y tercero son mayores iguales='+c); // MUESTRA EN PANTALLA
document.write('<br>el menor es='+a);

}
if (a==b & b>c)
{
document.write('el primero y segundo son mayores='+a);
document.write('<br>el menor es='+c)
}
if (a==b & b<c){

document.write('el mayor es='+c);
document.write('<br>el primero y segundo son iguales='+a);

}
if (a==c & b>c){
document.write('el mayor es='+b);
document.write('<br>el primero y tercero son iguales='+a)
}
if (a==c & b<c){
document.write('la primera y la tercera son mayores='+a);
document.write('<br>el menor es='+b);
}
if (a>b & b>c){

   document.write('el mayor es='+a);
   document.write('<br>el intermedio es='+b);
   document.write('<br>el menor es='+c);

}

if (a<b & b<c){
    document.write('el mayor es='+c);
    document.write('<br>el intermedio es='+b);
    document.write('<br>el menor es='+a);

}
if (a<c & b>c){
    document.write('el mayor es='+b);
    document.write('<br>el intermedio es='+c);
    document.write('<br>el menor es='+a);
}
if (a>c & b<c){
    document.write('el mayor es='+a);
    document.write('<br>el intermedio es='+c);
    document.write('<br>el menor es='+b);

}
if (a<c & b>c){
    document.write('el mayor es='+a);
    document.write('<br>el intermedio es='+b);
    document.write('<br>el menor es='+c);
}
if(b>a & a>c){
    document.write('el mayor es='+b);
    document.write('<br>el intermedio es='+a);
    document.write('<br>el menor es='+c)
}

}
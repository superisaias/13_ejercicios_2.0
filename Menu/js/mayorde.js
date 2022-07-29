function mayorde(){
    var a = parseFloat(document.Form1.a1.value);
    var b = parseFloat(document.Form1.b2.value);
    var c = parseFloat(document.Form1.c3.value);
    var d = parseFloat(document.Form1.d4.value);

    if(a==b & b==c & c==d) { // condiciones
        document.write('todos son iguales='+a); 	// muestra en pantalla
    }
    if(a==b & b==c & c>d) { // condiciones
        document.write('<br>el primero, segundo y tercero son mayores'+c); // muestra en pantalla
        document.write('<br>el cuarto es el menor='+d); // muestra en pantalla	
    }
    if(a==b & b==c & c<d) { // condiciones
        document.write('<br>el cuarto es el mayor='+d); // muestra en pantalla
        document.write('<br>el primero, segundo y tercero son menores='+c) ; // muestra en pantalla
    }
    if(a==b & b>c & c==d) { // condiciones
        document.write('<br>el primero y segundo son iguales mayores='+a); // muestra en pantalla
        document.write('<br>el tercero y cuarto son iguales menores='+c); // muestra en pantalla
    }
    if(a==b & b<c & c==d){ // condiciones
        document.write('<br>el tercero y cuarto son mayores iguales='+c) ; // muestra en pantalla
        document.write('<br>el primero y segundo son menores iguales='+a); // muestra en pantalla
    }
    if(a>b & b==c & c==d){// condiciones
        document.write('<br>el primero es el mayor'+a); // muestra en pantalla
        document.write('<br>el segundo, tercera y cuarta son menores iguales='+b); // muestra en pantalla
    }
    if(a<b & b==c & c==d){ // condiciones
        document.write('<br>el segundo, tercero y cuarto son mayores'+b); // muestra en pantalla
        document.write('<br>el primero es el menor='+a); // muestra en pantalla
    }
    if(a>b & b>c & c==d){ // condiciones
        document.write('<br>el primero es el mayor='+a);
        document.write('<br>el segundo es='+b);
        document.write('<br>tercero y cuarto son iguales menores='+c);
        
    }
    if(a==b & b>c & c>d){ // condiciones

        document.write('<br>el primero y segundo son mayores iguales='+a);
        document.write('<br>el intermedio es='+c);
        document.write('<br>el menor es='+d);
       
    }
    if(a==b & b<c & c<d){ // condiciones
        document.write('<br>el cuarto es el mayor='+d);
        document.write('<br>el segundo es='+c);
        document.write('<br>el primero y segundo son menores iguales='+a);
        
    }
    if(a<b & b<c & c==d){ // condiciones
        document.write('<br>el tercero y cuarto son mayores='+c);
        document.write('<br>el segundo es='+b);
        document.write('<br>el menor es = '+a);
       
    }
    if(a>d & d>c & c==b){ // condiciones
        document.write('<br>el primero es el mayor='+a);
        document.write('<br>el intermedio  es='+d);
        document.write('<br>el segundo y tercero son iguales menores='+b);
    }
    if(a<b & b==c & c<d){ // condiciones
        document.write('<br>el cuarto es el mayor='+d);
        document.write('<br>el segundo y tercero son iguales menores='+b);
        document.write('<br>el menor es='+a);

    }
    if(a==d & d>c & c>b){ // condiciones
        document.write ('<br>el primero y cuarto son iguales mayores='+a);
        document.write ('<br>el intermedio es='+c);// muestra en pantalla
        document.write ('<br>el menor es='+b);// muestra en pantalla
    }
    if(c>b & b>d & d==a) { // condiciones
        document.write ('<br>el tercero es mayor= '+c);// muestra en pantalla
        document.write ('<br>el intermedio es= '+b); // muestra en pantalla
        document.write ('<br>el primero y el cuarto son menores iguales'+d); // muestra en pantalla
    }
    if(a<c & c<b & b==d) { // condiciones
        document.write ('<br>el segundo y cuarto son mayores iguales= '+b); // muestra en pantalla
        document.write ('<br>el intermedio es= '+c); // muestra en pantalla
        document.write ('<br>el menor es= '+a); // muestra en pantalla
    }
    if(a==c & c>b & b==d){ // condiciones
        document.write ('<br>el primero y el tercero son mayores iguales= '+a);// muestra en pantalla
        document.write ('<br>el segundo y el cuarto son menores iguales= '+b); // muestra en pantalla
    }
    if(a==c & c<b & b==d){
        document.write ('<br>el segundo y cuarto son mayores iguales= '+b); // muestra en pantalla
        document.write ('<br>el primero y el tercero son menores iguales= '+a); // muestra en pantalla
    }
    if(a==d & d>b & b==c){ // condiciones
        document.write ('<br>el primero y cuarto son mayores= '+a); // muestra en pantalla
        document.write ('<br>el segundo y tercero son menores iguales= '+b); // muestra en pantalla
    }
    if(a==d & d<b & b==c){ // condiciones
        document.write ('<br>el segundo y tercero son mayores iguales= '+b); // muestra en pantalla
        document.write ('<br>el primero y cuarto son menores iguales= '+a); // muestra en pantalla
    }
    if(a==d & d<c & c<b){ // condiciones
        document.write ('<br>el mayor es= '+b);
        document.write ('<br>el intermedio es= '+c); // muestra en pantalla
            document.write ('<br>el primero y el cuarto son menores iguales= '+a); // muestra en pantalla
    }
    if (a==b & b<d & d<c){ // condiciones
        document.write ('<br>el tercero es el mayor = '+c); // muestra en pantalla
        document.write ('<br>el intermedio es= '+d); // muestra en pantalla
        document.write ('<br>el primero y segundo son menores iguales= '+a); // muestra en pantalla
    }
    if(a==b & b>d & d>c){ // condiciones
        document.write ('<br>el primero y el segundo son mayores= '+a); // muestra en pantalla
        document.write ('<br>el intermedio es= '+d); // muestra en pantalla
        document.write ('<br>el menor es = '+c); // muestra en pantalla
    }
    if(a==b & b==d & d<c){ // condiciones
        document.write ('<br>el mayor es = '+c); // muestra en pantalla
        document.write ('<br>el primero, segundo y cuarto son iguales menores= '+a); // muestra en pantalla
    }
    if(a==b & b==d & d>c){ // condiciones
        document.write ('<br>el primero, segundo y cuarto son mayores iguales= '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+c); // muestra en pantalla
    }
    if(a==c & c==d & d<b){ // condiciones
        document.write ('<br>el mayor es= '+b); // muestra en pantalla
        document.write ('<br>el primero, tercero y cuarto son iguales menores= '+a); // muestra en pantalla
    }
    if(a==c & c==d & d>b){ // condiciones
        document.write ('<br>el primero, tercero y cuarto son mayores= '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+b); // muestra en pantalla
    }
    if(c>a & a>b & b==d){ // condiciones
        document.write ('<br>el tercero es mayor= '+c); // muestra en pantalla
        document.write ('<br>el intermedio es = '+a); // muestra en pantalla
        document.write ('<br>el segundo y tercero son iguales= '+b);// muestra en pantalla
    }
    if(b==d & d>a & a>c){ // condiciones
        document.write ('<br>el segundo y cuarto son mayores iguales= '+b); // muestra en pantalla
        document.write ('<br>el intermedio es= '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+c); // muestra en pantalla
    }
    if(b>a & a==d & d>c){ // condiciones
        document.write ('<br>el mayor = '+b); // muestra en pantalla
        document.write ('<br>el primero y el cuarto son iguales menores= '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+c); // muestra en pantalla
    }
    if(a>c & c>b & b==d){ // condiciones
        document.write ('<br>el mayor es= '+a); // muestra en pantalla
        document.write ('<br>el intermedio es= '+c); // muestra en pantalla
        document.write ('<br>el segundo y cuarto son menores iguales= '+b); // muestra en pantalla
    }
    if(a==d & d>b & b>c){ // condiciones
        document.write ('<br>el primero y cuarto son mayores= '+a); // muestra en pantalla
        document.write ('<br>el intermedio es= '+b); // muestra en pantalla
        document.write ('<br>el menor es= '+c);	// muestra en pantalla
    }
    if(b>a & a==c & c>d){ // condiciones
        document.write ('<br>el mayor = '+b); // muestra en pantalla
        document.write ('<br>el primero y el tercero son iguales menores= '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+d); // muestra en pantalla
    }
    if(a==c & c>d & d>b){ // condiciones
        document.write ('<br>el primero y tercero son mayores= '+a); // muestra en pantalla
        document.write ('<br>el intermedio es= '+d); // muestra en pantalla
        document.write ('<br>el menor es= '+b);	// muestra en pantalla
    }
    if(a==c & c>b & b>d){ // condiciones
        document.write ('<br>el primero y tercero son mayores= '+a); // muestra en pantalla
        document.write ('<br>el intermedio es= '+b); // muestra en pantalla
        document.write ('<br>el menor es= '+d);	// muestra en pantalla
    }
    if(d==c & c>a & a>b){ // condiciones
        document.write ('<br>el tercero y cuarto son mayores= '+c);// muestra en pantalla
        document.write ('<br>el intermedio es= '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+b); // muestra en pantalla
    }
    if(d>b & b>a & a==c){ // condiciones
        document.write ('<br>el mayor es= '+d); // muestra en pantalla
        document.write ('<br>el intermedio es= '+b); // muestra en pantalla
        document.write ('<br>el primero y tercero son menores= '+a); // muestra en pantalla
    }
    if(b>d & d>a & a==c){ // condiciones
        document.write ('<br>el mayor es= '+b); // muestra en pantalla
        document.write ('<br>el intermedio es= '+d); // muestra en pantalla
        document.write ('<br>el primero y tercero son menores= '+a); // muestra en pantalla
    }
    if(b>a & a>c & c==d){ // condiciones
        document.write ('<br>el mayor es= '+b); // muestra en pantalla
        document.write ('<br>el intermedio es= '+a); // muestra en pantalla
        document.write ('<br>el primero y tercero son menores= '+c); // muestra en pantalla
    }
    if(c>a & a==b & b>d){
        document.write ('<br>el mayor es= '+c); // muestra en pantalla
        document.write ('<br>el primero y segundo son menores iguales= '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+d); // muestra en pantalla
    }
    if(d>a & a==b & b>c){
        document.write ('<br>el mayor es= '+d); // muestra en pantalla
        document.write ('<br>el primero y segundo son menores iguales= '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+c); // muestra en pantalla
    }
    if(d>a & a==c & c>b){
        document.write ('<br>el mayor es= '+d); // muestra en pantalla
        document.write ('<br>el primero y tercero son menores iguales= '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+b); // muestra en pantalla
    }
    if(a>c & c==d & d>b){
        document.write ('<br>el mayor es= '+a); // muestra en pantalla
        document.write ('<br>el primero y tercero son menores iguales= '+c); // muestra en pantalla
        document.write ('<br>el menor es= '+b); // muestra en pantalla
    } 
    if(b>c & c>a & a>d){
        document.write ('<br>el primero es el mayor = '+b); // muestra en pantalla
        document.write ('<br>el segundo es= '+c); // muestra en pantalla
        document.write ('<br>el tercero es = '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+d);  // muestra en pantalla
    }
    if(d>c & c>a & a>b){
        document.write ('<br>el primero es el mayor = '+d); // muestra en pantalla
        document.write ('<br>el segundo es= '+c); // muestra en pantalla
        document.write ('<br>el tercero es = '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+b);  // muestra en pantalla	
    }
    if(c>b & b>a & a>d){
        document.write ('<br>el primero es el mayor = '+c); // muestra en pantalla
        document.write ('<br>el segundo es= '+b); // muestra en pantalla
        document.write ('<br>el tercero es = '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+d);  // muestra en pantalla	
    }
    if(a>b & b>c & c>d){ // condiciones
        document.write ('<br>el primero es el mayor = '+a); // muestra en pantalla
        document.write ('<br>el segundo es= '+b); // muestra en pantalla
        document.write ('<br>el tercero es = '+c); // muestra en pantalla
        document.write ('<br>el menor es= '+d);  // muestra en pantalla
    }
    if(a<b & b<c & c<d){ // condiciones
        document.write ('<br>el primero es el mayor = '+d); // muestra en pantalla
        document.write ('<br>el segundo es= '+c); // muestra en pantalla
        document.write ('<br>el tercero es = '+b); // muestra en pantalla
        document.write ('<br>el menor es= '+a);  // muestra en pantalla
    }
    if(a>b & b>d & d>c){ // condiciones
        document.write ('<br>el mayor es= '+a); // muestra en pantalla
        document.write ('<br>el segundo es= '+b); // muestra en pantalla
        document.write ('<br>el tercero es= '+d); // muestra en pantalla
        document.write ('<br>el menor es= '+c); // muestra en pantalla
    }
    if(a>c & c>d & d>b){ // condiciones
        document.write ('<br>el mayor es= '+a); // muestra en pantalla
        document.write ('<br>el segundo es= '+c); // muestra en pantalla
        document.write ('<br>el tercero es= '+d); // muestra en pantalla
        document.write ('<br>el menor es= '+b); // muestra en pantalla
    }
    if(b>c & c>d & d>a){ // condiciones
        document.write ('<br>el mayor es= '+b); // muestra en pantalla
        document.write ('<br>el segundo es= '+c); // muestra en pantalla
        document.write ('<br>el tercero es= '+d); // muestra en pantalla
        document.write ('<br>el menor es= '+a); // muestra en pantalla
    }
    if(a>d & d>c & c>b){ // condiciones
        document.write ('<br>el mayor es= '+a); // muestra en pantalla
        document.write ('<br>el segundo es= '+d); // muestra en pantalla
        document.write ('<br>el tercero es= '+c); // muestra en pantalla
        document.write ('<br>el menor es= '+b); // muestra en pantalla
    }
    if(c>a & a>d & d>b){ // condiciones
        document.write ('<br>el mayor es= '+c); // muestra en pantalla
        document.write ('<br>el segundo es= '+a); // muestra en pantalla
        document.write ('<br>el tercero es= '+d); // muestra en pantalla
        document.write ('<br>el menor es= '+b); // muestra en pantalla
    }
    if(c>d & d>a & a>b){ // condiciones
        document.write ('<br>el mayor es= '+c); // muestra en pantalla
        document.write ('<br>el segundo es= '+d); // muestra en pantalla
        document.write ('<br>el tercero es= '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+b); // muestra en pantalla
    }
    if(c>a & a>b & b>d){ // condiciones
        document.write ('<br>el mayor es= '+c); // muestra en pantalla
        document.write ('<br>el segundo es= '+a); // muestra en pantalla
        document.write ('<br>el tercero es= '+b); // muestra en pantalla
        document.write ('<br>el menor es= '+d); // muestra en pantalla
    }
    if(c>b & b>d & d>a){ // condiciones
        document.write ('<br>el mayor es= '+c); // muestra en pantalla
        document.write ('<br>el segundo es= '+b); // muestra en pantalla
        document.write ('<br>el tercero es= '+d); // muestra en pantalla
        document.write ('<br>el menor es= '+a); // muestra en pantalla
    }
    if(c>d & d>b & b>a){ // condiciones
        document.write ('<br>el mayor es= '+c); // muestra en pantalla
        document.write ('<br>el segundo es= '+d); // muestra en pantalla
        document.write ('<br>el tercero es= '+b); // muestra en pantalla
        document.write ('<br>el menor es= '+a); // muestra en pantalla
    }
    if(d>a & a>b & b>c){ // condiciones
        document.write ('<br>el mayor es= '+d); // muestra en pantalla
        document.write ('<br>el segundo es= '+a); // muestra en pantalla
        document.write ('<br>el tercero es= '+b); // muestra en pantalla
        document.write ('<br>el menor es= '+c); // muestra en pantalla
    }
    if(a>c & c>b & b>d){ // condiciones
        document.write ('<br>el mayor es= '+a); // muestra en pantalla
        document.write ('<br>el segundo es= '+c); // muestra en pantalla
        document.write ('<br>el tercero es= '+b); // muestra en pantalla
        document.write ('<br>el menor es= '+d); // muestra en pantalla
    }
    if(d>a & a>c & c>b){ // condiciones
        document.write ('<br>el mayor es= '+d); // muestra en pantalla
        document.write ('<br>el segundo es= '+a); // muestra en pantalla
        document.write ('<br>el tercero es= '+c); // muestra en pantalla
        document.write ('<br>el menor es= '+b); // muestra en pantalla
    }
    if(b>d & d>a & a>c){ // condiciones
        document.write ('<br>el mayor es= '+b); // muestra en pantalla
        document.write ('<br>el segundo es= '+d); // muestra en pantalla
        document.write ('<br>el tercero es= '+a); // muestra en pantalla
        document.write ('<br>el menor es= '+c); // muestra en pantalla
    }
    if(d>b & b>c & c>a){ // condiciones
        document.write ('<br>el mayor es= '+d); // muestra en pantalla
        document.write ('<br>el segundo es= '+b); // muestra en pantalla
        document.write ('<br>el tercero es= '+c); // muestra en pantalla
        document.write ('<br>el menor es= '+a); // muestra en pantalla
    }
    if(b>a & a>d & d>c){
        document.write ('<br>el mayor es= '+b); // muestra en pantalla
        document.write ('<br>el segundo es= '+a); // muestra en pantalla
        document.write ('<br>el tercero es='+d); // muestra en pantalla
        document.write ('<br>el menor es= '+c); // muestra en pantalla
    }
    if(a>d & d>b & b>c){
        document.write ('<br>el mayor es= '+a); // muestra en pantalla
        document.write ('<br>el segundo es= '+d); // muestra en pantalla
        document.write ('<br>el tercero es='+b); // muestra en pantalla
        document.write ('<br>el menor es='+c); // muestra en pantalla
    }
    if(d>b & b>a & a>c){
        document.write('<br>el mayor es='+d);
        document.write('<br>el segundo es='+b);
        document.write('<br>el tercero es='+a);
        document.write('<br>el menor es='+c);
        
    }
    if(b>a & a>c & c>d){
        document.write('<br>el mayor es='+d);
        document.write('<br>el segundo es='+b);
        document.write('<br>el tercero es='+a);
        document.write('<br>el menor es='+c);
       
}
if(a>b & b==d & d>c){
        document.write('<br>el mayor es='+a);
        document.write('<br>el segundo y el cuarto son iguales='+b);
        document.write('<br>el tercero es el menor='+c);
}
}
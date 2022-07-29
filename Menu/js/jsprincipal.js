function suma() {
    var a1 = parseInt(document.Form1.numero1.value);
    var a2 = parseInt(document.Form1.numero2.value);
    document.Form1.resultado.value=a1+a2;
}

function resta() {
    var A1 = parseInt(document.Form2.num1.value);
    var A2 = parseInt(document.Form2.num2.value);
    document.Form2.resul.value=A1-A2;
}
function multiplicacion() {
    var m1 = parseInt(document.Form3.m1.value);
    var m2 = parseInt(document.Form3.m2.value);
    document.Form3.resultado.value=m1*m2;
}
function modulo(){
    var f1 = parseInt(document.Form5.numero1.value);
    var f2 = parseInt(document.Form5.numero2.value);
    document.Form5.resultado.value=f1 % f2;
}
function division(){
    var f1 = parseInt(document.Form4.r1.value);
    var f2 = parseInt(document.Form4.r2.value);
    document.Form4.resultado.value=f1 / f2;
}

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
            document.write('<br>el mayor es='+b);
            document.write('<br>el segundo es='+a);
            document.write('<br>el tercero es='+c);
            document.write('<br>el menor es='+d);
           
    }
    if(a>b & b==d & d>c){
            document.write('<br>el mayor es='+a);
            document.write('<br>el segundo y el cuarto son iguales='+b);
            document.write('<br>el tercero es el menor='+c);
    }
    

    }

    function mayordedos(){
        var a = parseFloat(document.Form1.a1.value);
        var b = parseFloat(document.Form1.b2.value);

        if(a==b) //condicion
{
 document.write(' si son iguales='+a); // MUESTRA EN PANTALLA 

}
 else if(a>b) // Condicion
 {
  document.write(' el mayor es='+a ); // MUESTRA EN PANTALLA
  document.write('<br> el menor es=' +b); // MUESTRA EN PANTALLA

 }
 else if(a<b) //condicion 
 {
  document.write(' el mayor es='+b); // MUESTRA EN PANTALLA
  document.write('<br> el menor es: '+b); // MUESTRA EN PANTALLA

    }
}
function tablas(){
    var a = parseFloat(document.Form1.a1.value);

    while(a<1|a>50); //condicion
    for( var i = 1; i<=10; i++)// operacion
{
document.write(+a + 'x' +i+ '=' +a*i +'<br>'); // MUESTRA EN PANTALLA
}

}

function calcula_cantidad(){

	var a =parseFloat(document.Form1.a1.value);

	if(a>=0 & a<=9){
		document.write('este numero tiene 1 cifra');
		
	}
	else if(a>=10 & a<=99){
		document.write('este numero tiene 2 cifra');
	}
	else if(a>=100 & a<=999){

		document.write('este numero tiene 3 cifra');
	}
	else if(a>=1000 & a<=9999){
		document.write('este numero tiene 4 cifra');
	}
	else if(a>=10000 & a<=99999){
		document.write('este numero tiene 5 cifra');
	}
	else if(a>=100000 & a<=999999){
		document.write('este numero tiene 6 cifra');
	}
	else if(a>=1000000){
		document.write(' este numero supera los valores requeridos::');
	}
}

function binarios_decimales(){
         a = parseFloat(document.binario.b.value);
        var b = parseFloat(document.binario.d.value);

        switch(a){
            case '1':

            document.write(' Holaaa');

            

            
        }

}
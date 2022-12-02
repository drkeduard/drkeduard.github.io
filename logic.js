function calcPerimCuad(){
let txtb = document.getElementById(`cuadrado`); //Input
let perimCuad = Number(txtb.value); //Input valor
let perim = perimCuad * 4; //valor
let input = document.getElementById(`textAnswer`);//P de respuesta
let texto = input.innerText=`El perimetro de tu cuadrado es ${perim} cm`;
if(perimCuad==0){
    alert(`Error: Este campo no puede estar vacio`);
    txtb.focus();
    texto = input.innerText = ``;
}
txtb.value = ``;
txtb.focus();
}

function calcAreaCuad(){
    let txtb = document.getElementById(`cuadrado`); //Input
    let areaCuad = Number(txtb.value); //Input valor
    let area = areaCuad * areaCuad; //valor
    let input = document.getElementById(`textAnswer`);//P de respuesta
    let texto = input.innerText=`El area de tu cuadrado es ${area} cm`;
    if(areaCuad==0){
        alert(`Error: Este campo no puede estar vacio`);
        txtb.focus();
        texto = input.innerText = ``;
    }
    txtb.value = ``;
    txtb.focus();
}

function calcTriangPerim(){
    let txtb1 = document.getElementById(`TriangLado1`); //Input
    let txtb2 = document.getElementById(`TriangLado2`); //Input
    let txtb3 = document.getElementById(`TriangLado3`); //Input
    let ladotriang1 = Number(txtb1.value); //Input valor
    let ladotriang2 = Number(txtb2.value); //Input valor
    let ladotriang3 = Number(txtb3.value); //Input valor
    let perim = ladotriang1 + ladotriang2 + ladotriang3; //valor
    let p = document.getElementById(`textAnswer`);//P de respuesta
    let texto = p.innerText=`El perimetro de tu triangulo es ${perim} cm`;
    if(ladotriang1==0){
        alert(`Error: Este campo no puede estar vacio`);
        txtb1.focus();
        texto = p.innerText = ``;
    }
    if(ladotriang2==0){
        alert(`Error: Este campo no puede estar vacio`);
        txtb2.focus();
        texto = p.innerText = ``;
    }
    if(ladotriang3==0){
        alert(`Error: Este campo no puede estar vacio`);
        txtb3.focus();
        texto = p.innerText = ``;
    }
    txtb1.value = ``;
    txtb2.value = ``;
    txtb3.value = ``;
    txtb1.focus();
}

function calcTriangArea(){
    //Inputs
    let b = document.getElementById(`triangBase`);
    let a = document.getElementById(`triangAltura`);
    //Valores de Input
    let aDato = Number(a.value);
    let bDato = Number(b.value);
    //Logica
    let triArea = (aDato * bDato) / 2;
    //Texto de respuesta
    let resp = document.getElementById(`textAnswer`);
    let texto = resp.innerText = `El area de su triangulo es de ${triArea}² cm`
    //condicion
    if(bDato==0){
        alert(`Error: Este campo no puede estar vacio`);
        b.focus();
        texto = resp.innerText = ``;
    }
    if(aDato==0){
        alert(`Error: Este campo no puede estar vacio`);
        a.focus();
        texto = resp.innerText = ``;
    }
    b.value = ``;
    a.value = ``;
    b.focus();
}

function calcCircDiam(){
let txtb = document.getElementById(`circDato`); //Input
let datoCirc = Number(txtb.value); //Input valor
let diam = Math.round(datoCirc / Math.PI); //valor
let input = document.getElementById(`textAnswer`);//P de respuesta
let texto = input.innerText=`El diametro de tu circulo es ${diam} cm`;
if(datoCirc==0){
    alert(`Error: Este campo no puede estar vacio`);
    txtb.focus();
    texto = input.innerText = ``;
}
txtb.value = ``;
txtb.focus();
}

function calcCircPerim(){
    let txtb = document.getElementById(`circDato`); //Input
    let datoCirc = Number(txtb.value); //Input valor
    let perim = Math.round(datoCirc * Math.PI); //valor
    let input = document.getElementById(`textAnswer`);//P de respuesta
    let texto = input.innerText=`El diametro de tu circulo es ${perim} cm`;
    if(datoCirc==0){
        alert(`Error: Este campo no puede estar vacio`);
        txtb.focus();
        texto = input.innerText = ``;
    }
    txtb.value = ``;
    txtb.focus();
}

function calcCircArea(){
    let txtb = document.getElementById(`circDato`); //Input
    let datoCirc = Number(txtb.value); //Input valor
    let area = (Math.PI * (datoCirc^2)); //valor
    let input = document.getElementById(`textAnswer`);//P de respuesta
    let texto = input.innerText=`El area de tu circulo es ${area}² cm`;
    if(datoCirc==0){
        alert(`Error: Este campo no puede estar vacio`);
        txtb.focus();
        texto = input.innerText = ``;
    }
    txtb.value = ``;
    txtb.focus();
}



// global function ------------>
function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueText = inputValue.value;
    const value = parseFloat(inputValueText);
    return value;
}
function clearInputValue(clearId){
    const clearValue = document.getElementById(clearId);
    clearValue.value = '';
}
function clearTextValue(clearId){
    const clearTextValue = document.getElementById(clearId);
    clearTextValue.innerText = '0';
}
function setAreaElementText(elementId , area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
function areaCalculationValue(areaType , area){
    const calculationEntry = document.getElementById("calculation-entry");
    let count = calculationEntry.childElementCount;
    const p = document.createElement("p");
    p.innerHTML = `
       ${count + 1}. ${areaType} ${area}cm<sup>2</sup>   <button id="convertor-m" class="btn btn-sm btn-outline btn-secondary lowercase mb-4">Covert to m<sup>2</sup></button>
    `;
    calculationEntry.appendChild(p);
}
// -----------------------
// traingle area
function getTraiangleArea(){
    const base = getInputValue("triangle-base");
    const height = getInputValue("triangle-height")
    area = 0.5 * base * height;
    if(isNaN(base) || isNaN(height)){
        alert("please input valid number")
        return;
    }
    setAreaElementText("triangle-area" , area);
    areaCalculationValue("Triangle" , area);

}
function traiangleElementValue(){
    clearInputValue("triangle-base")
    clearInputValue("triangle-height");
    clearTextValue("triangle-area")
}
// rectangle area
function getRectangleArea(){
    const width = getInputValue("rectangle-width");
    const length = getInputValue("rectangle-lenght");
    area = width * length;
    if(isNaN(width) || isNaN(length)){
        alert("please input valid number")
        return;
    }
    setAreaElementText("rectangle-area" , area);
    areaCalculationValue("Rectangle", area) 
}
function rectangleElementValue(){
    clearInputValue("rectangle-width");
    clearInputValue("rectangle-lenght");
    clearTextValue("rectangle-area")
}
//Parallelogram  area
function getParallelogramArea(){
    const base = getInputValue("parallelogram-base");
    const height = getInputValue("parallelogram-height");
    area = base * height;
    if(isNaN(base) || isNaN(height)){
        alert("please input valid number")
        return;
    }
    setAreaElementText("parallelogram-area" , area);
    areaCalculationValue("Parallelogram", area) 
}
function parallelogramElementValue(){
    clearInputValue("parallelogram-base");
    clearInputValue("parallelogram-height");
    clearTextValue("parallelogram-area")
}
//Rhombus  area
function getRhombusArea(){
    const d1 = getInputValue("rhombus-d1");
    const d2 = getInputValue("rhombus-d2");
    area = 0.5 * d1 * d2;
    if(isNaN(d1) || isNaN(d2)){
        alert("please input valid number")
        return;
    }
    setAreaElementText("rhombus-area" , area);
    areaCalculationValue("Rhombus", area) 
}
function rhombusElementValue(){
    clearInputValue("rhombus-d1");
    clearInputValue("rhombus-d2");
    clearTextValue("rhombus-area")
}
//Pentagon  area
function getPentagonArea(){
    const perimeter = getInputValue("pentagon-perimeter");
    const apothem = getInputValue("pentagon-apothem");
    area = 0.5 * perimeter * apothem;
    if(isNaN(perimeter) || isNaN(apothem)){
        alert("please input valid number")
        return;
    }
    setAreaElementText("pentagon-area" , area);
    areaCalculationValue("Pentagon", area) 
}
function pentagonElementValue(){
    clearInputValue("pentagon-perimeter");
    clearInputValue("pentagon-apothem");
    clearTextValue("pentagon-area")
}
//Ellipse  area
function getEllipseArea(){
    const major = getInputValue("ellipse-major");
    const minor = getInputValue("ellipse-minor");
    area = (Math.PI * major * minor).toFixed(2);
    if(isNaN(major) || isNaN(minor)){
        alert("please input valid number")
        return;
    }
    setAreaElementText("ellipse-area" , area);
    areaCalculationValue("Ellipse", area) 
}
function ellipseElementValue(){
    clearInputValue("ellipse-major");
    clearInputValue("ellipse-minor");
    clearTextValue("ellipse-area")
}

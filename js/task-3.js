function getElementWidth(content, padding, border){
const numContent = parseFloat(content);
const numPadding = parseFloat(padding);
const numBorder = parseFloat(border);
const totalWidth = numContent + numPadding * 2 + numBorder * 2;
return totalWidth;
};
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 
let containerBackgroundColor = document.getElementById("bgColorInput");
let containerFontColor = document.getElementById("fontColorInput");
let containerFontSizer = document.getElementById("fontSizeInput");
let containerFontWeight = document.getElementById("fontWeightInput");
let containerPadding = document.getElementById("paddingInput");
let containerBorderRadius = document.getElementById("borderRadiusInput");

let containerButtonApply = document.getElementById("customButton");

    let backgroundValue = containerBackgroundColor.value;
    let fontColorValue = containerFontColor.value;
    let fontSizeValue = containerFontSizer.value;
    let fontWeightValue = containerFontWeight.value;
    let paddingValue = containerPadding.value;
    let borderRadius = containerBorderRadius.value;

    function apply(){
    containerButtonApply.style.backgroundColor = backgroundValue;
    containerButtonApply.style.color = fontColorValue;
    containerButtonApply.style.fontSize = fontSizeValue + "px";
    containerButtonApply.style.fontWeight = fontWeightValue;
    containerButtonApply.style.padding = paddingValue + "px";
    containerButtonApply.style.borderRadius = borderRadius + "px";
}
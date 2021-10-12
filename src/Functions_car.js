export function calculate_Coordinates(string_Comand){
    if (isCorrectFormat_Dimensions(string_Comand)){
        return "0,0 N"
    }else{
        return "Formato incorrecto"
    }
}

function isCorrectFormat_Dimensions(string_Comand_dimensions){
    let dimensions = string_Comand_dimensions.split(",").map(Number);
    const isPositive = num => num > 0;
    const isWholeNumber = num => num % 1 == 0;
    const isCorrectNumber = num => isPositive(num) && isWholeNumber(num);

    if (isCorrectNumber(dimensions[0]) && isCorrectNumber(dimensions[1]) ){
        return true
    }else{
        return false
    }
}
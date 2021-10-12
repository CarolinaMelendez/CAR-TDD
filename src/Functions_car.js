export function calculate_Coordinates(string_Comand){
    let string_Comand_separated = string_Comand.split("/");
    let comand_dimensions = string_Comand_separated[0];
    let initial_position = string_Comand_separated[1];

    let default_position = "0,0 N";
    if (isCorrectFormat_Dimensions(comand_dimensions)){
        if (initial_position){
            if (isCorrectFormat_InitialPosition(initial_position)){
                return initial_position;
            }else{
                return "Formato incorrecto";
            }
            
        }else{
            return default_position;
        }
    }else{
        return "Formato incorrecto";
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

function isCorrectFormat_InitialPosition(string_Comand_initialPosition){
    let orientation = string_Comand_initialPosition[string_Comand_initialPosition.length -1];
    let coordinates = string_Comand_initialPosition.replace(orientation,"");
    let coordinates_pair = coordinates.split(",").map(Number);
    const isPositive = num => num > 0;
    const isWholeNumber = num => num % 1 == 0;
    const isCorrectNumber = num => isPositive(num) && isWholeNumber(num);

    const isCorrectOrientation = orientation => orientation == "N" || orientation == "E" || orientation == "S" || orientation == "W";

    if (isCorrectNumber(coordinates_pair[0]) && isCorrectNumber(coordinates_pair[1] && isCorrectOrientation(orientation)) ){
        return true
    }else{
        return false
    }
}
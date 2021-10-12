import { parseSync } from "@babel/core";

const isPositive = num => num > 0;
const isWholeNumber = num => num % 1 == 0;
const isCorrectNumber = num => isPositive(num) && isWholeNumber(num);
const isCorrectNumbersPair = vector => isCorrectNumber(vector[0]) &&  isCorrectNumber(vector[1]);

export function calculate_Coordinates(string_Comand){
    let string_Comand_separated = string_Comand.split("/");
    let dimensions = string_Comand_separated[0];
    let initial_position = string_Comand_separated[1];
    let default_position = "0,0 N";
    let errorMessage = "Formato incorrecto";

    if (isCorrectFormat_Dimensions(dimensions)){
        if (initial_position){
            if (isCorrectFormat_InitialPosition(initial_position)){
                return initial_position;
            }else{
                return errorMessage; 
            }
        }else{
            return default_position;
        }
    }else{
        return errorMessage;
    }


}



function isCorrectFormat_Dimensions(string_Comand_dimensions){
    let dimensions = string_Comand_dimensions.split(",").map(Number);
    if (isCorrectNumbersPair(dimensions)){
        return true
    }else{
        return false
    }
}

function isCorrectFormat_InitialPosition(string_Comand_initialPosition){
    let orientation = string_Comand_initialPosition[string_Comand_initialPosition.length -1];
    let coordinates_pair = string_Comand_initialPosition.replace(orientation,"").split(",").map(Number);
    const isCorrectOrientation = orientation => orientation == "N" || orientation == "E" || orientation == "S" || orientation == "W";
    
    if (isCorrectNumbersPair(coordinates_pair) && isCorrectOrientation(orientation)){
        return true
    }else{
        return false
    }
}
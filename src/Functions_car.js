import { parseSync } from "@babel/core";

const isPositive = num => num > 0;
const isWholeNumber = num => num % 1 == 0;
const isCorrectNumber = num => isPositive(num) && isWholeNumber(num);
const isCorrectNumbersPair = vector => isCorrectNumber(vector[0]) &&  isCorrectNumber(vector[1]);

export function calculate_Coordinates(string_command){
    let string_command_separated = string_command.split("/");
    let dimensions = string_command_separated[0];
    let initial_position = string_command_separated[1];
    let move_command = string_command_separated[2];

    let default_position = "0,0 N";
    let errorMessage = "Formato incorrecto";

    if (isCorrectFormat_Dimensions(dimensions)){
        if (initial_position){ // if initial_position exits
            if (isCorrectFormat_InitialPosition(initial_position)){

                if (move_command){ // if a move command exits
                    var info_positionInitial = getPairInicialPosition_and_orientation(initial_position)
                    var coordinate_X = info_positionInitial.coordinates_pair[0] ;
                    var coordinate_Y = info_positionInitial.coordinates_pair[1] ;
                    var orientation = info_positionInitial.orientation;
                    if (orientation == "N"){
                        coordinate_Y++;
                    }
                    if (orientation == "S"){
                        coordinate_Y--;
                    }
                    if (orientation == "W"){
                        coordinate_X--;
                    }
                    if (orientation == "E"){
                        coordinate_X++;
                    }
                    return [coordinate_X,",",coordinate_Y," ",orientation].join('')

                }else{
                    return initial_position;
                }
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

function getPairInicialPosition_and_orientation(string_Comand_initialPosition){
    let orientation = string_Comand_initialPosition[string_Comand_initialPosition.length -1];
    let coordinates_pair = string_Comand_initialPosition.replace(orientation,"").split(",").map(Number);
    return {coordinates_pair : coordinates_pair , orientation : orientation };
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
//import { parseSync } from "@babel/core";

const isPositive = num => num > 0;
const isWholeNumber = num => num % 1 == 0;
const isCorrectNumber = num => isPositive(num) && isWholeNumber(num);
const isCorrectNumbersPair = vector => isCorrectNumber(vector[0]) &&  isCorrectNumber(vector[1]);

// to keep positions of the car
var coordinate_X = 0;
var coordinate_Y = 0;
var orientation = "N";

export function calculate_Coordinates(string_command){
    let string_command_separated = string_command.split("/");
    let dimensions = string_command_separated[0];
    let initial_position = string_command_separated[1];
    let move_command = string_command_separated[2];

    let answerCorrectionFormat = checkFormat_AllCommandString(dimensions,initial_position,move_command)

    if (answerCorrectionFormat == "Formato correcto"){
        setUp_initialPosition(initial_position);
        for (var move of move_command) {
            moveForward_cmd_A_(dimensions);
        }
        return final_position();
        
    }else{
        return answerCorrectionFormat;
    }
}

function final_position(){
    return [coordinate_X,",",coordinate_Y," ",orientation].join('');
}



function moveForward_cmd_A_(string_Comand_dimensions){
    let dimensions = string_Comand_dimensions.split(",").map(Number);
    var isBetween_dimension = (num,dim) => num > 0 && num < dim ;

    if (isBetween_dimension(coordinate_X,dimensions[0]) && isBetween_dimension(coordinate_Y,dimensions[1])){        
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
    }
}

function setUp_initialPosition(initial_position){
    orientation = initial_position[initial_position.length -1];
    let coordinates_pair = initial_position.replace(orientation,"").split(",").map(Number);
    coordinate_X = coordinates_pair[0] ;
    coordinate_Y = coordinates_pair[1] ;
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
    let orientation_string = string_Comand_initialPosition[string_Comand_initialPosition.length -1];
    let coordinates_pair = string_Comand_initialPosition.replace(orientation_string,"").split(",").map(Number);
    const isCorrectOrientation = orientation => orientation == "N" || orientation == "E" || orientation == "S" || orientation == "W";
    if (isCorrectNumbersPair(coordinates_pair) && isCorrectOrientation(orientation_string)){
        return true;
    }
    return false;
}

function isCorrectFormat_StringMovements(stringMovements){
    var existThisMovement = move => move == 'A';
    var isFormatCorrect = true;
    for (var move_letter of stringMovements) {
        if(!existThisMovement(move_letter)){
            isFormatCorrect = false;
        }
    }
    return isFormatCorrect;
}

function checkFormat_AllCommandString(dimensions,initial_position,stringMovements){ 
    if (isCorrectFormat_Dimensions(dimensions)){
        if (initial_position){ // if initial_position exits
            if (isCorrectFormat_InitialPosition(initial_position)){
                if (stringMovements){    // if stringMovements exits
                    if(isCorrectFormat_StringMovements(stringMovements)){
                        return "Formato correcto";
                    }
                    return "Formato incorrecto";
                }
                return initial_position;
            }
            return "Formato incorrecto";
        }
        return final_position();
    }
    return "Formato incorrecto";
}
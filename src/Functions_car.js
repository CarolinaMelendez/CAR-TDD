//import { parseSync } from "@babel/core";

const isPositive = num => num >= 0;
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
            if(move == 'I'){
                toTurnLeft_cmd_I_();
            }else if (move == 'D'){
                toTurnRight_cmd_D_();
            }else if (move == 'A'){
                moveForward_cmd_A_(dimensions);
            }
            if (move == 'S'){
                jump();
            }
        }
        return final_position();
    }else{
        return answerCorrectionFormat;
    }
}

function jump(){
        if (      orientation == "N"){ 
            coordinate_Y = coordinate_Y + 2;
        }else if (orientation == "W"){ 
            coordinate_X = coordinate_X - 2; 
        }else if (orientation == "E"){ 
            coordinate_X = coordinate_X + 2; 
        }else{ // if (orientation == "S"){ 
            coordinate_Y = coordinate_Y -2 ;
        }

}

function final_position(){
    return [coordinate_X,",",coordinate_Y," ",orientation].join('');
}


function toTurnLeft_cmd_I_(){
    if (      orientation == "N"){ 
        orientation = "W"; 
    }else if (orientation == "W"){ 
        orientation = "S"; 
    }else if (orientation == "E"){ 
        orientation = "N"; 
    }else{ // if (orientation == "S"){ 
        orientation = "E"; 
    }
}

function toTurnRight_cmd_D_(){
    if (      orientation == "N"){ 
        orientation = "E"; 
    }else if (orientation == "W"){ 
        orientation = "N"; 
    }else if (orientation == "E"){ 
        orientation = "S"; 
    }else{ // if (orientation == "S"){ 
        orientation = "W"; 
    }
}

function moveForward_cmd_A_(string_Comand_dimensions){
    let dimensions = string_Comand_dimensions.split(",").map(Number);
    var isBetween_dimension = (num,dim) => num >= 0 && num <= dim;     
        if (      orientation == "N"){
            coordinate_Y++;
            if (!isBetween_dimension(coordinate_Y,dimensions[1])){
                coordinate_Y--;
            }
        }else if (orientation == "S"){
            coordinate_Y--;
            if (!isBetween_dimension(coordinate_Y,dimensions[1])){
                coordinate_Y++;
            }
        }else if (orientation == "W"){
            coordinate_X--;
            if (!isBetween_dimension(coordinate_X,dimensions[0])){
                coordinate_X++;
            }
        }else{ //  if (orientation == "E"){
            coordinate_X++;
            if (!isBetween_dimension(coordinate_X,dimensions[0])){
                coordinate_X--;
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
    var existThisMovement = move => move == "A" || move == "I" || move == "D" || move == "S";
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


export function completeInformation_toShow(stringCommand_ofCar){
    let string_command_separated = stringCommand_ofCar.split("/");
    let dimensions = string_command_separated[0];
    let initial_position = string_command_separated[1];
    let move_command = string_command_separated[2];
    let finalPosition_ofCar = calculate_Coordinates(stringCommand_ofCar);
    return [initial_position,move_command,finalPosition_ofCar ];
} 
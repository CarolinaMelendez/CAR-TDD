import {completeInformation_toShow} from "./Functions_car";

const stringCommand_ofCar = document.querySelector("#string-command-input");

const final_position_output = document.querySelector("#final-position-output");
const initial_position_output = document.querySelector("#ini-position-output");
const commands_output = document.querySelector("#commands-output");



const form = document.querySelector("#car-form")

form.addEventListener("submit",event=>{
    event.preventDefault();
    var completeInfomation = completeInformation_toShow(stringCommand_ofCar.value);
    var initial_position = completeInfomation[0];
    var commands = completeInfomation[1];
    var final_position = completeInfomation[2];

    if (final_position != "Formato incorrecto"){
        initial_position_output.innerHTML = "Posición inicial: " + initial_position;
        commands_output.innerHTML = "Comados: " + commands;
        final_position_output.innerHTML = "Posición final: " + final_position;
    }else{
        final_position_output.innerHTML = "Oh oh  " + final_position ;
    }
});
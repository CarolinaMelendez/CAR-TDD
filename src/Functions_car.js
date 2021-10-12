export function calculate_Coordinates(string_Comand){
    let dimensions = string_Comand.split(",").map(Number);
    if (dimensions[0] > 0 && dimensions[1] > 0 && dimensions[1] % 1 == 0 && dimensions[0] % 1 == 0){
        return "0,0 N"
    }else{
        return "Formato incorrecto"
    }
}


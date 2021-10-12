import {calculate_Coordinates} from "./Functions_car";

describe("--- CALCULATE COORDINATES --- ",() =>  {
    it("Test 1.1 - Insert matrix dimensions",() => {
        expect( calculate_Coordinates("5,5")).toEqual("0,0 N"); 
    } );
    it("Test 1.2 - Insert matrix dimensions",() => {
        expect( calculate_Coordinates(" ")).toEqual("Formato incorrecto"); 
    } );
    it("Test 1.3 - Insert matrix dimensions",() => {
        expect( calculate_Coordinates("")).toEqual("Formato incorrecto"); 
        
    } );
} )
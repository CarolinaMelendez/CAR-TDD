import {calculate_Coordinates} from "./Functions_car";

describe("--- CALCULATE COORDINATES --- ",() =>  {
    it("Test F1.1 - Give default position",() => {
        expect( calculate_Coordinates("5,5")).toEqual("0,0 N"); 
    } );
    it("Test F1.2 - Control empty string",() => {
        expect( calculate_Coordinates(" ")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.3 - Control empty string",() => {
        expect( calculate_Coordinates("")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.4 - Check format",() => {
        expect( calculate_Coordinates("5-5")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.5 - Check format",() => {
        expect( calculate_Coordinates("5.1-5")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.6 - Check format",() => {
        expect( calculate_Coordinates("5")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.7 - Check format",() => {
        expect( calculate_Coordinates("-1,5")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.8 - Check format",() => {
        expect( calculate_Coordinates("0.1,5.2")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.9 - Check format",() => {
        expect( calculate_Coordinates("0.1,1.0")).toEqual("Formato incorrecto"); 
    } );

} )

describe("--- FUNCIONALIDAD 2: Ingresar posición inicial  --- ",() =>  {
    it("Test F2.1 - give initial position",() => {
        expect( calculate_Coordinates("5,5/3,1 N")).toEqual("3,1 N"); 
    } );
} )
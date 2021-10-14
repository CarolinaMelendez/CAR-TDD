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
    it("Test F2.2 - Check format of posición inicial -> 3-1 s",() => {
        expect( calculate_Coordinates("5,5/3-1 s")).toEqual("Formato incorrecto"); 
    } );
    it("Test F2.3 - Check format of posición inicial -> 3,1 F",() => {
        expect( calculate_Coordinates("5,5/3,1 F")).toEqual("Formato incorrecto"); 
    } );
    it("Test F2.4 - Check format of posición inicial ",() => {
        expect( calculate_Coordinates("5,5/3.1,1 F")).toEqual("Formato incorrecto"); 
    } );
    it("Test F2.5 - Check format of posición inicial ",() => {
        expect( calculate_Coordinates("5,5/2,-1 F")).toEqual("Formato incorrecto"); 
    } );
    it("Test F2.6 - Check format of posición inicial ",() => {
        expect( calculate_Coordinates("5,5/2,1N")).toEqual("2,1N"); 
    } );
} )

describe("--- FUNCIONALIDAD 3: Ejecutar una vez el comando A (Avanzar)  --- ",() =>  {
    it("Test F3.1 - give correct final position ",() => {
        expect( calculate_Coordinates("5,5/3,1 N/A")).toEqual("3,2 N"); 
    } );
    it("Test F3.2 - give correct final position  ",() => {
        expect( calculate_Coordinates("5,5/2,1 W/A")).toEqual("1,1 W"); 
    } );
    it("Test F3.3 - give correct final position  ",() => {
        expect( calculate_Coordinates("5,5/3,3 S/A")).toEqual("3,2 S"); 
    } );
    it("Test F3.4 - give correct final position  ",() => {
        expect( calculate_Coordinates("5,5/3,3 E/A")).toEqual("4,3 E"); 
    } );
    it("Test F3.5 - give correct final position  ",() => {
        expect( calculate_Coordinates("5,5/3,3 E/A")).toEqual("4,3 E"); 
    } );
    it("Test F3.6 - check correct command 'move along'  ",() => {
        expect( calculate_Coordinates("5,5/3,3 1/O")).toEqual("Formato incorrecto"); 
    } );
    it("Test F3.7 - check correct command 'move along'  ",() => {
        expect( calculate_Coordinates("5,5/3,3 1/a")).toEqual("Formato incorrecto"); 
    } );
  
} )
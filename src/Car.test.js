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

describe("--- FUNCIONALIDAD 4: Ejecutar n veces el comando 'A' (Avanzar)  --- ",() =>  {
    it("Test F4.1 - give correct position with many 'A' ",() => {
        expect( calculate_Coordinates("5,5/3,1 N/AAA")).toEqual("3,4 N"); 
    } );
    it("Test F4.2 - give correct position with many 'A' ",() => {
        expect( calculate_Coordinates("5,5/3,1 W/AAA")).toEqual("0,1 W"); 
    } );
    it("Test F4.3 - check format with many letters ",() => {
        expect( calculate_Coordinates("5,5/3,1 W/AAAO")).toEqual("Formato incorrecto"); 
    } );
    it("Test F4.4 - check the limits of the dimensions ",() => {
        expect( calculate_Coordinates("5,5/3,1 W/AAAAAAAAAAA")).toEqual("0,1 W"); 
    } );
} )

describe("--- FUNCIONALIDAD 5: Implementar comando 'I' (Izquierda)   --- ",() =>  {
    it("Test F5.1 - give correct position with I ",() => {
        expect( calculate_Coordinates("5,5/3,1 N/AAAI")).toEqual("3,4 W"); 
    } );
    it("Test F5.2 - give correct position with I ",() => {
        expect( calculate_Coordinates("5,5/3,1 N/AAAII")).toEqual("3,4 S"); 
    } );
    it("Test F5.3 - give correct position with I ",() => {
        expect( calculate_Coordinates("5,5/3,1 N/AAAIII")).toEqual("3,4 E"); 
    } );
    it("Test F5.4 - give correct position with I ",() => {
        expect( calculate_Coordinates("5,5/3,1 N/AAAIIII")).toEqual("3,4 N"); 
    } );
    it("Test F5.5 - check format ",() => {
        expect( calculate_Coordinates("5,5/3,1 N/AAAIIII1")).toEqual("Formato incorrecto"); 
    } );

} )

describe("--- FUNCIONALIDAD 6: Implementar comando 'D' (Derecha)  --- ",() =>  {
    it("Test F6.1 - give correct position with I ",() => {
        expect( calculate_Coordinates("5,5/3,1 N/AAAD")).toEqual("3,4 E"); 
    } );
    it("Test F6.2 - give correct position with I ",() => {
        expect( calculate_Coordinates("5,5/3,1 N/AAADD")).toEqual("3,4 S"); 
    } );
    it("Test F6.3 - give correct position with I ",() => {
        expect( calculate_Coordinates("5,5/3,1 N/AAADDD")).toEqual("3,4 W"); 
    } );
    it("Test F6.4 - give correct position with I ",() => {
        expect( calculate_Coordinates("5,5/3,1 N/AAADDDD")).toEqual("3,4 N"); 
    } );
    it("Test F6.5 - check format ",() => {
        expect( calculate_Coordinates("5,5/3,1 N/AAAD51")).toEqual("Formato incorrecto"); 
    } );

} )

describe("--- General Tests  --- ",() =>  {
    it("Gral.Test 1",() => {
        expect( calculate_Coordinates("5,5/3,3 E/AADAADADDA")).toEqual("5,1 E"); 
    } );
    it("Gral.Test 2",() => {
        expect( calculate_Coordinates("5,5/1,2 N/IAIAIAIAA")).toEqual("1,3 N"); 
    } );
    it("Gral.Test 3 ",() => {
        expect( calculate_Coordinates("2,2/0,1 S/AAAAAA")).toEqual("0,0 S"); 
    } );
    it("Gral.Test 4 ",() => {
        expect( calculate_Coordinates("2,2/2,2 S/AAAAAADAAAAAAADAAAAAADAAAAAADAAAA")).toEqual("2,0 S"); 
    } );
} )


describe("--- Funcionalidad 7: Implementar comando 'S' (Saltar)  --- ",() =>  {
    it("F7.1 check exits command S",() => {
        expect( calculate_Coordinates("5,5/3,3 E/S")).toEqual("5,3 E"); 
    } );
    it("F7.1 give correct position with S",() => {
        expect( calculate_Coordinates("5,5/3,3 N/S")).toEqual("5,3 N"); 
    } );
} )
import {calculate_Coordinates} from "./Functions_car";

describe("--- CALCULATE COORDINATES --- ",() =>  {
    it("Test F1.1 - Insert matrix dimensions",() => {
        expect( calculate_Coordinates("5,5")).toEqual("0,0 N"); 
    } );
    it("Test F1.2 - Insert matrix dimensions",() => {
        expect( calculate_Coordinates(" ")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.3 - Insert matrix dimensions",() => {
        expect( calculate_Coordinates("")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.4 - Insert matrix dimensions",() => {
        expect( calculate_Coordinates("5-5")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.5 - Insert matrix dimensions",() => {
        expect( calculate_Coordinates("5.1-5")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.6 - Insert matrix dimensions",() => {
        expect( calculate_Coordinates("5")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.7 - Insert matrix dimensions",() => {
        expect( calculate_Coordinates("-1,5")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.8 - Insert matrix dimensions",() => {
        expect( calculate_Coordinates("0.1,5.2")).toEqual("Formato incorrecto"); 
    } );
    it("Test F1.9 - Insert matrix dimensions",() => {
        expect( calculate_Coordinates("0.1,1.0")).toEqual("Formato incorrecto"); 
    } );
} )
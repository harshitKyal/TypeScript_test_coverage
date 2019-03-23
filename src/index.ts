#!/usr/bin/env node

import sales_data from '../sales_data.json';


//1. To find total sale in chadstone
function findTotalSalesInCentre(arr: any[], centreName: string) {

    let flag: boolean = false;
    let result: any;
    let i: number;
    for (i = 0; i < arr.length; i++)
        if (arr[i].centre == centreName) {
            flag = true;
            result = arr[i];
            break;
        }
    //check Centre Name found or not 
    if (flag)
        console.log(`The total sales reported by the flagship store in  ${centreName} is ${result.totalSales}`)
    else
        console.log(`${centreName} Not Found`)
    return result.totalSales
}

// 2. Top sales centre 
function centreWithMostSales(arr: any, prop: string): any {

    let max: any;
    for (let i: number = 0; i < arr.length; i++) {
        if (!max || (arr[i][prop]) > (max[prop]))
            max = arr[i];
    }
    return max;

}


// 3. The total sales reported by stores in particular state(VIC)
function totalSalesOfState(arr: any[], stateName: string) {
    let sum: number = 0;
    let flag: boolean = false;          // to check if particular state is in json or not
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i].state == stateName) {
            flag = true;
            sum += sales_data[i].totalSales;
        }
    };
    //check Centre Name found or not 
    if (flag)
        console.log(`The total sales reported by stores in ${stateName} is ${sum}`)
    else
        console.log(`${stateName} Not Found`)
    return sum
}

// 4. The centre with the highest sales PSM *
function centreWithHighestPSM(arr: any[]): any {

    let max: any;
    let PSM: any;
    let result: any;
    for (let i: number = 0; i < arr.length; i++) {
        PSM = arr[i].totalSales / arr[i].area
        if (!max || PSM > max) {
            max = PSM;
            result = arr[i];
        }
    }
    return result;
}

// 1.
findTotalSalesInCentre(sales_data, "Chadstone")

// 2. 
let centreWithTopSales = centreWithMostSales(sales_data, "totalSales");
console.log(`The centre where we took the most sales is :  ${centreWithTopSales.centre} `);

// 3.
totalSalesOfState(sales_data, "VIC")

// 4.
let centreWithTopPSM = centreWithHighestPSM(sales_data)
console.log(`The store with the highest sales PSM is ${centreWithTopPSM.centre}`)

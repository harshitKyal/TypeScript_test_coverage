#!/usr/bin/env node
var word = [
    {
        "state": "VIC",
        "centre": "Altona Gate",
        "totalSales": 4535,
        "f": "L0-95",
        "area": 239
    },
    {
        "state": "NSW",
        "centre": "Bathurst City Centre",
        "totalSales": 4157,
        "unit": "L2-24",
        "area": 229
    },
    {
        "state": "VIC",
        "centre": "Bentons Square",
        "totalSales": 4286,
        "unit": "L1-30",
        "area": 210
    },
    {
        "state": "VIC",
        "centre": "Box Hill Central",
        "totalSales": 4140,
        "unit": "L2-78",
        "area": 208
    },
    {
        "state": "NSW",
        "centre": "Carlingford Court",
        "totalSales": 4864,
        "unit": "L3-34",
        "area": 245
    },
    {
        "state": "VIC",
        "centre": "Chadstone",
        "totalSales": 6642,
        "unit": "L3-99",
        "area": 360
    },
    {
        "state": "VIC",
        "centre": "Corio Central",
        "totalSales": 4962,
        "unit": "L3-76",
        "area": 216
    },
    {
        "state": "NSW",
        "centre": "DFO Homebush",
        "totalSales": 4443,
        "unit": "L0-62",
        "area": 250
    },
    {
        "state": "QLD",
        "centre": "Northshore Village",
        "totalSales": 4131,
        "unit": "L3-52",
        "area": 200
    },
    {
        "state": "QLD",
        "centre": "Grand Plaza",
        "totalSales": 4537,
        "unit": "L0-9",
        "area": 218
    },
    {
        "state": "VIC",
        "centre": "Mornington Central",
        "totalSales": 4191,
        "unit": "L3-49",
        "area": 223
    },
    {
        "state": "VIC",
        "centre": "The Glen",
        "totalSales": 4843,
        "unit": "L0-85",
        "area": 223
    },
    {
        "state": "QLD",
        "centre": "The Myer Centre Brisbane",
        "totalSales": 4661,
        "unit": "L0-87",
        "area": 247
    },
    {
        "state": "WA",
        "centre": "Stirlings Central",
        "totalSales": 4133,
        "unit": "L1-6",
        "area": 208
    },
    {
        "state": "WA",
        "centre": "Livingston Marketplace",
        "totalSales": 4763,
        "unit": "L3-27",
        "area": 215
    },
    {
        "state": "WA",
        "centre": "Flinders Square",
        "totalSales": 4415,
        "unit": "L2-57",
        "area": 209
    }
];
var num = 0;
var i;
//1. To find total sale in chadstone
function findTotalSales(centreName) {
    //console.log(centreName)
    for (i = 0; i < word.length; i++)
        if (word[i].centre == centreName)
            console.log(" Total Sales In  " + centreName + " is " + word[i].totalSales);
}
// 2. The centre where we took the most sales 
function centreWithMostSales(arr, prop) {
    var max;
    for (var i = 0; i < arr.length; i++) {
        if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
            max = arr[i];
    }
    return max;
}
function totalSalesOfState(stateName) {
    var sum;
    var word1 = word.forEach(function (word2) {
        if (word2.state == stateName)
            sum = sum + word2.totalSales;
    }, 0);
    console.log(word1);
}
//to find total sale of particular centre
console.log(findTotalSales("Chadstone"));
//to call second function 
var centreWithTopSales = centreWithMostSales(word, "Total Sales");
console.log("Top Sales: " + centreWithTopSales.centre);
//c//onsole.log(factorial)
//console.log(message)

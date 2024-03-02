
const sum = (a,b) => {
    return a + b
}

// Contenido de app.js 



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (moneyIn) =>{
    
    return (moneyIn / oneEuroIs.USD) * oneEuroIs.JPY 
    
    
    
    
}

const fromEuroToDollar = (moneyIn) => {
    return moneyIn * oneEuroIs.USD
}

const fromYenToPound = (moneyIn) =>{
    return (moneyIn / oneEuroIs.JPY) * oneEuroIs.GBP
    
     
}






// cajero1 XUSD / 1.07USD  = XEUR * 156.5 = XJPY

// cajero2 XEUR * 1.07$ = XUSD

// cajero3 XJPY / 156.5JPY = XEUR * 0.87GBP = XGBP

console.log(fromYenToPound(156.5));

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };

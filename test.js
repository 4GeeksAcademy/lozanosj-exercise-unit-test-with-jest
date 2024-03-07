// const {fromDollarToYen, 
//         fromEuroToDollar, 
//         fromYenToPound } = require('./app.js');

        test("One euro should be 1.07 dollars", function() {
                // Importo la funcion desde app.js
                const { fromEuroToDollar } = require('./app.js');
            
                // Uso la función como debe ser usada
                const euro = fromEuroToDollar(1);
            
                // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
                const expected = 1 * 1.07;
            
                // Hago mi comparación (la prueba)
                expect(fromEuroToDollar(1)).toBe(1.07); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
            })



            test("1.07 dollar should be 156.5 yen", function() {
                // Importo la funcion desde app.js
                const { fromDollarToYen } = require('./app.js');
            
                // Uso la función como debe ser usada
                const dollars = fromDollarToYen(1.07);
            
                // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
                const expected = 1.07 * 156.5;
            
                // Hago mi comparación (la prueba)
                expect(fromDollarToYen(1.07)).toBe(156.5); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
            })


            test("156.5 yen should be 0.87 pound", function() {
                // Importo la funcion desde app.js
                const { fromYenToPound } = require('./app.js');
            
                // Uso la función como debe ser usada
                const yen = fromYenToPound(156.5);
            
                // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
                const expected = 156.5 * 0.87;
            
                // Hago mi comparación (la prueba)
                expect(fromYenToPound(156.5)).toBe(0.87); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
            })



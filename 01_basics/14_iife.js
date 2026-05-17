// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB connected`);
})();

( (name) => {
    //un named iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('Raghav')

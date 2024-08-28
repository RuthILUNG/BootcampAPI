export function enoughAirtime(Puse,airtime) {
    
    var Ituse = Puse.split(',');   
    var calls = 1.88;
    var sms = 0.75;
    var data = 12.00;    
    var Costs= 0;
   
    for (var i = 0; i <Ituse.length; i++) {
        if (Ituse[i] === 'call') {
            Costs += calls;
        } else if (Ituse[i] === 'sms') {
            Costs += sms;
        } else if (Ituse[i] === 'data') {
            Costs += data;
        }
    }
    
    const remainder = airtime - Costs;
    
    return remainder >= 0 ? 'R' +remainder.toFixed(2) : 'R0.00';
}

console.log(enoughAirtime('call,call,call,data,sms,sms,call,data', 50)); 
console.log(enoughAirtime('data,data,data', 36)); 

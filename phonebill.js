export function totalPhoneBill(d) {
    console.log(d)
    
    var thelist = d.split(','); 
    console.log(thelist)  
    var calls = 0;
    var sms = 0;   
    for (var j = 0; j < thelist.length; j++) {
              if (thelist[j] === 'call') {
          
            calls++;
        } else if (thelist[j] === 'sms') {
            
            sms++;
        }
    }

        const cost = (calls * 2.75) + (sms * 0.65);

        const rcost = 'R' + cost.toFixed(2);
   
    return rcost;
}

// console.log(totalPhoneBill('call, sms, call, sms, sms')); 
// console.log(totalPhoneBill('call, sms')); 
// console.log(totalPhoneBill('sms, sms')); 

var param =[{principal:"a", time : "b"},
            {principal:"a", time : "b"},
            {principal:"a", time : "b"},
            {principal:"a", time : "b"}];

var data = [{principal:2500, time:1.8},
              {principal:1000, time:5},
              {principal:3000, time:1},
              {principal:2000, time:3}];

    
function interestcalculator(param){
    
    
    
  for(i = 0; i < param.length; i++){
        param[i].rate = [];

    if(param[i].principal >= 2500 && param[i].time > 1
         && param[i].time < 3){
        
       param[i].rate = 3;
       
    }
    else if(param[i].principal >= 2500 && param[i].time >= 3){
        
         param[i].rate = 4;      
           
    }
    else if(param[i].principal < 2500 || param[i].time <= 1){
    
          param[i].rate = 2;
   }
    else {
        param[i].rate = 1;
        
    }
    console.log(data[i].rate);
    
          } 

    for(i = 0; i <data.length; i++){
         data[i].interest = [];
 data[i].interest = (data[i].principal * data[i].time * data[i].rate)/100;
           
          console.log(data[i].interest);
             
    }
    
    var interestdata = [];
    var interestdata = data;
    console.log(interestdata);
    return interestdata; 
   } 
    
    interestcalculator(data);


    


   
   
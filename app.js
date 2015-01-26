$(".button").click(function(){
    var one_rep_max = $("input").val();
 
    var percentage = .50;  
  
  for (i=0; i<10; i++){
      
      var calc = one_rep_max * percentage;
      var roundedCalc = Math.round(calc);
      $("ul").append("<li>" + roundedCalc +"</li>");
      var percentage = percentage + .05;
     }
  
});

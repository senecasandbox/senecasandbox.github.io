$(document).ready(function(){
  
 $("#All").click(function(){
      $(".york, .newnham, .markham, .king").show();
      $("#All").addClass("button-active");
      $("#Newnham, #Markham, #York, #King").removeClass("button-active");
   
  });
  
  $("#Newnham").click(function(){
      $(".king, .markham, .york").hide();
      $(".newnham").show();
      $("#Newnham").addClass("button-active");
      $("#All, #Markham, #York, #King").removeClass("button-active");
  });
  
    $("#Markham").click(function(){
      $(".king, .newnham, .york").hide();
      $(".markham").show();
       $("#Markham").addClass("button-active");
       $("#All, #Newnham, #York, #King").removeClass("button-active");
  });
  
    
    $("#York").click(function(){
      $(".king, .newnham, .markham").hide();
      $(".york").show();
      $("#York").addClass("button-active");
       $("#All, #Markham, #Newnham, #King").removeClass("button-active");
  });
  
      
    $("#King").click(function(){
      $(".york, .newnham, .markham").hide();
      $(".king").show();
      $("#King").addClass("button-active");
      $("#All, #Markham, #York, #Newnham").removeClass("button-active");
  });
});
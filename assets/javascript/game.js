 var random_result;
 var lost = 0;
 var win =0;
 var previous = 0;

 var resetAndStart = function(){
     $(".crystal").empty();

 }
   
    random_result = Math.floor(Math.random()* 101) + 19;

        $("#result").html("Random Result:" + random_result);
        for(var i=o; i< 4; i++){

        var random = Math.floor(Marth.random()* 11) +1;

        var crystal = $("<div>");
         crystal.attr
          ("class:" ,"crystal");
            "data-random"; random  
         } ;
         var imageCrystal = $("<img>");
             imageCrystal.attr("<img>");

       
         $(".crystal").append(crystal);       
        
        //  shows numbers to check
         crystal.html(random);

     $("#previous").html("Total Score:" + previous);{
 
        resetAndStart();
     }
        $(".crystal").on("click", function (){
         var result;
     

     $(document).on("click","crystal", function (){
         $(document).ready(function(){
             $("crystal").click(function(){
                 $(this).hide(200)
                 ;
            })
    
        var num =parseInt$(this).attr("data-random"); {
         previous += num;
    
    $("#previous").html("Total score: " + previous);
         if(previous > random_result){ 
             lost--;
            $("#lost").html("Losses: " + lost);
            previous = 0;
    
        resetAndStart();
         }
         else if(previous === random_result) 
         win++;
         $("#win").html("Wins:" + win);
         previous = 0;

         resetAndStart();

    
        
    });

    

    }       
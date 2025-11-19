
$("#add-creature").click(
    function(){
     
        let crName = $("#crName").val();
        if (crName=="") {  || (crName.length>12)
        }
        else{
        $("#creature-list").append(crName + ", ");
        }

         $("#crName").val("");
});







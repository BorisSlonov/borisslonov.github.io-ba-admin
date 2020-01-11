
$(document).ready(function () {


  //form-project
  
  $(".modalbox").fancybox();
  $("#project-form").submit(function () {
      return false;
  });
  $("").on("click", function () {

      // тут дальнейшие действия по обработке формы
      // закрываем окно, как правило делать это нужно после обработки данных
      $("").fadeOut("slow", function () {
          $(this).before("");
          setTimeout("$.fancybox.close()", 500);
      });
  });

  

      
});
  
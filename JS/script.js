$(document).ready(function(){
  //json data for handlebar template
  var data = {templateEngine:"Handlebar",
              italicText:"<i>This text should be in italics</i>"
  };

  //handlebar template html
  var template = $("#template1").html();

  //handlebar's compile method returns special function which can be used to get final html
  var compiledCode = Handlebars.compile(template);

  //json data is passed top compiled code and result will be html
  var result = compiledCode(data);

  //compiled html can be rendered in document
  $("#content").html(result);
});

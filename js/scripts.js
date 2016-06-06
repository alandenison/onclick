
$(document).ready(function() {
  var elements = ['h1', 'p', 'img'];
  var messages = elements.map(function() {
      alert("This is a " + element);
  });




  // elements.forEach(function(element){
  //   debugger;
  //   $(element).click(function(){
  //     alert(messages[0]);
  //   });


    // var userTouch = $("" + element).val(function(){
    //   alert("this is a");
    //
    //
    // });
  });
});




// $("h1").click(function() {
//   alert("This is a header.");
// });
//
// $("p").click(function() {
//   alert("This is a paragraph.");
// });
//
// $("img").click(function() {
//   alert("This is an image.");

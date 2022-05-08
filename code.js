// document.getElementById('toggle-button').onclick = function(){
//   document.getElementById('home').css("background","red");
// }
document.getElementById('signin').click = function(){
  $('label.name select').each(function(){
          var labelTxt = $(this).text();
          var labelForTxt = $(this).attr('for');
          var inputVal = $('#'+labelForTxt).val();
          alert(inputVal);
      });
}
// if(document. getElementById('signin').clicked == true)
// {
// alert("button was clicked");
// }

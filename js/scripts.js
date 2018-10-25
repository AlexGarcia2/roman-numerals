function romanIndex (input){

  var output = [input]
  var numsToTen = [" ","I","II","III","V"]
     for (i=0; i< numsToTen.length; i ++){
        if ( [i] === output){

        }else if (input === 4){
          return (numsToTen[1] + numsToTen[4])

        }else if (input === 5){
          return numsToTen[4]
        }

        if (input === 6){
          return (numsToTen[4] + numsToTen[1])
        }

    }

return numsToTen[output]
}





$(document).ready(function(){
  $("#form").submit(function(event){
  event.preventDefault();
  var input = parseInt($("#inputNumber").val());

  var result = romanIndex(input);
  console.log(result)

  $("#result").val(result);
  });

});









  // var romanOne = "I"
  // var romanTwo = "II"
  // var romanThree = "III"
  // var romanFive = "V"
  // var romanTen = "X"




//   if(input === 1){
//     return romanOne
//   }else if (input === 2){
//     return romanTwo
//   }else if (input === 3) {
//     return romanThree
//   }else if (input === 4) {
//     return (romanOne + romanFive)
// }
//   if(input === 5){
//     return romanFive
//   }else if (input === 6) {
//     return (romanFive + romanOne)
//   }else if (input === 7) {
//     return (romanFive + romanTwo)
//   }else if (input === 8) {
//     return (romanFive + romanThree)
//   }else if (input === 9) {
//     return (romanOne + romanTen)
//   }

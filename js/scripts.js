function master (input){
debugger;
  var masterOutput = input.split("")

  for (i = 0; i < masterOutput.length; i++){
    if (([i] === 1-9) && ([i] === "")){
    return romanOneToNine();
  }else if (([i]=== 1-9) && ([i] === 0-9) && ([i] !== "")){
    return romanTenToFifty();
  }




  }
}

function romanOneToNine (input){

  var output = [input]
  var numsToTen = [" ","I","II","III","V","X"]
     for (i=0; i< numsToTen.length; i ++){
        if ( [i] === output){

        }else if (input === 4){
          return (numsToTen[1] + numsToTen[4])
        }else if (input === 5){
          return numsToTen[4]
        }else if (input === 6){
          return (numsToTen[4] + numsToTen[1])
        }else if (input === 7) {
          return (numsToTen[4] + numsToTen[2])
        }else if (input === 8) {
          return (numsToTen[4] + numsToTen[3])
        }else if (input === 9) {
          return (numsToTen[1] + numsToTen[5])
        }
    }
return numsToTen[output]
}

function romanTenToFifty(input){
  romanOneToNine ()
  debugger;
  input.toString()
  input.split()
  var output = [input]
  var numsToFifty = [" ","I","II","III","V","X", "L", "C"]
     for (i=0; i< numsToTen.length; i ++){
        if ( [i] === output[1]){
        }else if (output === [1,0]){
          return (numsToTen[6])
        }else if (input === 5){
          return numsToTen[4]
        }else if (input === 6){
          return (numsToTen[4] + numsToTen[1])
        }else if (input === 7) {
          return (numsToTen[4] + numsToTen[2])
        }else if (input === 8) {
          return (numsToTen[4] + numsToTen[3])
        }else if (input === 9) {
          return (numsToTen[1] + numsToTen[5])
        }
}


}




$(document).ready(function(){
  $("#form").submit(function(event){
  event.preventDefault();
  var input = $("#inputNumber").val();

  var result = master(input);
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

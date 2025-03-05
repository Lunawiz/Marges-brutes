$(".button").click(function () {
    //a random number is generated
    //that number chooses which string to display
    //the string displays in html
    let numVal = Math.floor(Math.random() * 10)
    const expr = numVal
    switch (expr) {
      case 1:
        console.log("Typographie aveugle")
        $("#show-me").html("Typographie aveugle")
        break
      case 2:
        console.log("Grille liquide")
        $("#show-me").html("Grille liquide")
        break
      case 3:
        console.log("Composition météoroogique")
        $("#show-me").html("Composition météoroogique")
        break
      case 4:
        console.log("Ligne de fuite")
        $("#show-me").html("Ligne de fuite")
        break
      case 5:
        console.log("Flux interrompus")
        $("#show-me").html("Flux interrompus")
        break
      case 6:
        console.log("Échos textuels")
        $("#show-me").html("Échos textuels")
        break
        case 7:
        console.log("Architectures éditoriales")
        $("#show-me").html("Architectures éditoriales")
        break
      case 8:
        console.log("Débordements graphiques")
        $("#show-me").html("Débordements graphiques")
        break
      case 9:
        console.log("Contraintes centrifuges")
        $("#show-me").html("Contraintes centrifuges")
        break
      case 10:
        console.log("Espaces en tension")
        $("#show-me").html("Espaces en tension")
        break
      default:
        console.log("Lecture oblique")
        $("#show-me").html("Lecture oblique")
    }
  })
  
  // Math.floor(Math.random() * 10) + 1
  
  // if(something=true){
  //   then do some stuff
  // }
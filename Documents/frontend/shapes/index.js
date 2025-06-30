function shapes(){

    function square(){
        let value = parseInt(prompt("Enter the side of the square: "));
        console.log(`You have entered ${value} as side of the square`);
        return value*value
    }
    function rectangle(){
        let value = parseInt(prompt("Enter the lenght  of the rectangle: "));
        let len = parseInt(prompt("Enter the width of the rectangle"))
        console.log(`you have entered ${value} as the lenght and swidth of the rectangle`);
        return len*len
    }
    function circle(){
        let value = parseInt(prompt("Enter the the radius of the circle: "));
        console.log(` you have entered ${value} as redius of the cirlcle` );
        return Math.PIvalue*value
    }
    function Triangle(){
        let value = parseInt(prompt("Enter the hight of the Trangle: "));
        let len = parseInt(prompt("Enter the hight of the the Trangle:" ))
        console.log = (`you have emtered ${value} as the base and hight `);
        return value*value
    }
    let shapesArea = ["square", "rectangle", "circle", "Triangle"]
    let userIput = prompt("enter a sahape");
   if (userIput == "square"){
    let result = square()
    console.log("The area is ", result);
   } else if(userIput.toLowerCase() == "rectangle"){
    let results = rectangle()
    console.log("The area is ", results);
   }
   else if(userIput.toLowerCase() == "circle"){
    let result = circle()
    console.log("The area is ", result);
   }
   else if (userIput.toLowerCase() == "Triangle"){
    let result = Triangle()
    console.log("the area is", results);

   }
}

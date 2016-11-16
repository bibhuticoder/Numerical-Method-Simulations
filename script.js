function func(a){
    var exp = "(function(x){return("+expression+");})(a)";
   
    return(eval(exp));
}


function getXlXu(u, l){
    for(var i=l; i<=u; i++){
        for(var j=l; j<=u; j++){
            if(func(i)*func(j) < 0){
                return{
                    xL:i,
                    xU:j
                };
            }
        }       
    }
}

var result = "";
var expression = "";
function init(){
    var xL, xU, xM,fxL, fxU, fxM, upperLimit, lowerLimit, root, E, Ea;

    E = parseFloat(document.getElementById("E").value);
    upperLimit = parseInt(document.getElementById("xU").value);
    lowerLimit =  parseInt(document.getElementById("xL").value);

    
     //step 1
    xL = getXlXu(upperLimit, lowerLimit).xL;
    xU = getXlXu(upperLimit, lowerLimit).xU;
   
    var count = 0;
    
    function recursion(){

    count++;

    result += "\n-------------------------------------------\n";
    result += "\n" + "Iteration " + count + "\n";
    result += "\n" + "xL = "+xL + "\n" + "xU = "+ xU + "\n";
   

    //step 2
    fxL = func(xL);
    fxU = func(xU);

    result += "\n" + "f(xL) = "+fxL + "\n" + "f(xU) = "+ fxU + "\n";
    

    //step 3
    xM = (xL+xU)/2;
    fxM = func(xM);

    result += "\n" + "xM = (xL+xU)/2";
    result += "\n" + "0r, xM = "+xM + "\n\n" + "f(xM) = "+ fxM + "\n";


    //step 4
    if(fxL * fxU == 0){

        result += "\n" + "fxL * fxU = 0 " + "\n";
        result += "i.e " + fxL + " * " + fxU + " = 0 " + "\n";

        root = xM;

        result += "So root = " + root;
    }

    else if(fxL * fxU < 0){

        result += "\n" + "fxL * fxU < 0 " + "\n";
        result += "i.e " + fxL + " * " + fxU + " < 0 " + "\n";

        xU = xM;

        result += "xU = xM" + "\n";
        result += "i.e xU = " + xM;
    }

    else{

        result += "\n" + "fxL * fxU > 0 " + "\n";
        result += "i.e " + fxL + " * " + fxU + " > 0 " + "\n";

        xL = xM;

        result += "xL = xM" + "\n";
        result += "\n" + "i.e xL = " + xM;
    }

    //step 5
    Ea = (Math.abs((xL-xU)/xL)).toFixed(2);

    result += "\n" + "Ea = |(xL-xU)/xL|" + "\n";
    result += "\n" + "Ea = " + Ea + "\n";

    //step 6
    if(Ea <= E){

        result += "\n" + "Since, Ea < E" + "\n";
        result += "\n" + "root = (xL+xU)/2" + "\n";

        root = (xL + xU)/2;

        result += "\n" + "i.e root = " + root;
    }

    else 
        //goto step 2
        // result += "\n" + "Since, Ea > E" + "\n";
        // result += "\nReturn to step 2\n";
        
        recursion();
}

recursion();


document.getElementById("solution").textContent = result;
    
}



document.getElementById("btnSolve").onclick = function(){
    
    expression = document.getElementById("eqn").value;
    result += "\n=====================================\n"+ expression + "\n=====================================\n";
    init();
    result = "";
}


function winCheck(arr, target){
    
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        // Row check
        
        for(let j = 0; j < arr[i].length; j++){
            if(target === arr[i][j]){
                count++;
            }
        }
        if(count === arr[i].length){
            return true;
        }
    
    // Column check    
        count = 0;
        for(let j = 0; j < arr.length; j++){
            if(target === arr[j][i]){
                count++;
            }
        }
        
        if(count === arr.length){
            return true;
        }
        
    }
    return false;
}

// Cross check
function crossCheck (arr, target){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(target === arr[i][i]){
            count++;
        }
    }
        
    if(count === arr.length){
        return true;
    }
    
    count = 0;
    let j = 0;
    for(let i = arr.length - 1; i >= 0; i--){
        if(target === arr[j][i]){
            count++;
        }
        j++;
    }
    
    if(count === arr.length){
        return true;
    }
    
    return false;
}

// Draw check
function drawCheck(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === null){
                return false;
            }
        }
    }
    return true;
}

// Final call the all functions
function ticTacToe(arr){
    if(winCheck(arr, "X") || crossCheck(arr, "X")){
        return "X is win";
    }
    else if(winCheck(arr, "O") || crossCheck(arr, "O")){
        return "O is win";
    }
    else if(drawCheck(arr)){
        return "macth is draw";
    }
    else{
        return "Boad not finished";
    }
}
console.log("Test case 1");
let rowX = ticTacToe([
    ["X", "X", "X"],
    ["X", "O", "O"], 
    ["O", "O", "O"]
    ]);
console.log(rowX);

console.log("Test case 2");
let rowO = ticTacToe([
    ["X", "O", "X"],
    ["O", "O", "O"], 
    ["O", "X", "X"]
    ]);
console.log(rowO);

console.log("Test case 3");
let crossX = ticTacToe([
    ["X", "O", "X"],
    ["O", "X", "O"], 
    ["X", "O", "O"]
    ]);
console.log(crossX);

console.log("Test case 4");
let crossO = ticTacToe([
    ["O", "O", "X"],
    ["O", "O", "X"], 
    ["X", "X", "O"]
    ]);
console.log(crossO);

console.log("Test case 5");
let colX = ticTacToe([
    ["X", "O", "X"],
    ["X", "O", "O"], 
    ["X", "X", "O"]
    ]);
console.log(colX);

console.log("Test case 6");
let colO = ticTacToe([
    ["O", "O", "X"],
    ["O", "X", "X"], 
    ["O", "X", "O"]
    ]);
console.log(colO);

console.log("Test case 7");
let draw = ticTacToe([
    ["X", "O", "X"],
    ["X", "O", "X"], 
    ["O", "X", "O"]
    ]);
console.log(draw);

console.log("Test case 8");
let bnf = ticTacToe([
    ["X", "O", "X"],
    ["X", null, "X"], 
    ["O", "X", "O"]
    ]);
console.log(bnf);









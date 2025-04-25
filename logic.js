 function winCheck(arr, target) {
            for (let i = 0; i < arr.length; i++) {
                let count = 0;
                for (let j = 0; j < arr[i].length; j++) {
                    if (target === arr[i][j]) {
                        count++;
                    }
                }
                if (count === arr[i].length) {
                    return true;
                }

                count = 0;
                for (let j = 0; j < arr.length; j++) {
                    if (target === arr[j][i]) {
                        count++;
                    }
                }
                if (count === arr.length) {
                    return true;
                }
            }
            return false;
        }

        function crossCheck(arr, target) {
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (target === arr[i][i]) {
                    count++;
                }
            }
            if (count === arr.length) return true;

            count = 0;
            let j = 0;
            for (let i = arr.length - 1; i >= 0; i--) {
                if (target === arr[j][i]) {
                    count++;
                }
                j++;
            }
            return count === arr.length;
        }

        function drawCheck(arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] === null) {
                        return false;
                    }
                }
            }
            return true;
        }

        function ticTacToe(arr) {
            if (winCheck(arr, "X") || crossCheck(arr, "X")) {
                gameOver = true;
                return "X win!";
            } else if (winCheck(arr, "O") || crossCheck(arr, "O")) {
                gameOver = true;
                return "O win!";
            } else if (drawCheck(arr)) {
                gameOver = true;
                return "macth is draw";
            } else {
                return "Boad not finished";
            }
        }
   

        let result =  ticTacToe([
            [null,null, null]
        ]);

        console.log(result);
        
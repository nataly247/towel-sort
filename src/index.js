
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let arr = [];
    
    if (!Array.isArray(matrix)) {
        return [];
    }
    
    if (matrix.length === 0){
        return matrix;
    }
    
    for(let i = 0; i < matrix.length; i++){
        if (i % 2 !== 0){
            matrix[i].reverse();
        }
        arr.push(matrix[i])
    }

    return arr.flat();
};

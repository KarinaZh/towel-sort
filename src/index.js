// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    } else {
        let m = []
        for (let i = 0; i < matrix.length; i++) {
            let arrMain = matrix[i];
            if (i % 2 == 0) {
                for (let k = 0; k < arrMain.length; k++) {
                    let arrEven = arrMain[k];
                    m.push(arrEven);
                }
            } else {
                for (let l = arrMain.length - 1; l >= 0; l--) {
                    let arrOdd = arrMain[l]
                    m.push(arrOdd);
                }
            }
        }
        return m;
    }

}

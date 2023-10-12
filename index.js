function whereIsWaldo(matrix) {
  if (!Array.isArray(matrix) || matrix.length < 2) {
    return null; 
  }

  const referenceElement = matrix[0][0]; 

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] !== referenceElement) {
        return [row + 1, col + 1];
      }
    }
  }

  return null; 
}

const matrix = [
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]
];

const differingElementCoordinates = whereIsWaldo(matrix);
console.log(differingElementCoordinates);
class Matrix {
  cells: number[][] = [];
  rows: number = 1;
  columns: number = 1;

  constructor(rows: number, columns: number) {
    if (rows <= 0 || columns <= 0) {
      throw new Error("Matrix dimensions must be positive integers!");
    }

    this.rows = rows;
    this.columns = columns;

    for (let i = 0; i < rows; i++) {
      this.cells.push([]);
      for (let j = 0; j < columns; j++) {
        this.cells[i].push(0);
      }
    }
  }

  resize(rows: number, columns: number): void {
    if (rows > this.rows) {
      this.cells.push([]);
      for (let i = this.rows; i < rows; i++) {
        this.cells.push([]);
        for (let j = 0; j < columns; j++) {
          this.cells[i].push(0);
        }
      }
    } else if (rows < this.rows) {
      for (let i = this.rows; i > rows; i--) {
        this.cells.pop();
      }
    }

    if (columns > this.columns) {
      for (let i = 0; i < rows; i++) {
        for (let j = this.columns; j < columns; j++) {
          this.cells[i].push(0);
        }
      }
    } else if (columns < this.columns) {
      for (let i = 0; i < rows; i++) {
        for (let j = this.columns; j > columns; j--) {
          this.cells[i].pop();
        }
      }
    }

    this.rows = rows;
    this.columns = columns;
  }
}

function multiplyMatrices(a: Matrix, b: Matrix): Matrix {
  let res = new Matrix(a.rows, b.columns);

  for (let i = 0; i < res.rows; i++) {
    for (let j = 0; j < res.columns; j++) {
      for (let k = 0; k < a.columns; k++) {
        res.cells[i][j] += a.cells[i][k] * b.cells[k][j];
      }
    }
  }

  return res;
}

function drawMatrix(a: Matrix, name: string): void {
  let matrA = document.createElement("div");
  matrA.className = `matrix ${name}`;

  for (let i = 0; i < a.rows; i++) {
    let row = document.createElement("div");
    row.className = `row ${i}`;

    for (let j = 0; j < a.columns; j++) {
      let cell = document.createElement("input");
      cell.type = "value";
      cell.size = 1;
      cell.className = `cell ${j}`;
      cell.value = a.cells[i][j].toString();

      cell.addEventListener("change", (e) => {
        const { target } = e;
        a.cells[i][j] = parseInt((target as HTMLInputElement).value);
      });
      row.append(cell);
    }
    matrA.append(row);
  }

  section?.append(matrA);
}

const section = document.querySelector("section");

let a = new Matrix(3, 4);
let b = new Matrix(4, 4);

drawMatrix(a, "0");
drawMatrix(b, "1");

const watchMatrix = (a: Matrix) => {
  for (let i = 0; i < a.rows; i++) {
    console.log(a.cells[i]);
  }
  setTimeout(() => {
    watchMatrix(a);
  }, 5000);
};

watchMatrix(a);

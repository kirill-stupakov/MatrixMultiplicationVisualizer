"use strict";
var Matrix = /** @class */ (function () {
    function Matrix(rows, columns) {
        this.cells = [];
        this.rows = 1;
        this.columns = 1;
        if (rows <= 0 || columns <= 0) {
            throw new Error("Matrix dimensions must be positive integers!");
        }
        this.rows = rows;
        this.columns = columns;
        for (var i = 0; i < rows; i++) {
            this.cells.push([]);
            for (var j = 0; j < columns; j++) {
                this.cells[i].push(0);
            }
        }
    }
    Matrix.prototype.resize = function (rows, columns) {
        if (rows > this.rows) {
            this.cells.push([]);
            for (var i = this.rows; i < rows; i++) {
                this.cells.push([]);
                for (var j = 0; j < columns; j++) {
                    this.cells[i].push(0);
                }
            }
        }
        else if (rows < this.rows) {
            for (var i = this.rows; i > rows; i--) {
                this.cells.pop();
            }
        }
        if (columns > this.columns) {
            for (var i = 0; i < rows; i++) {
                for (var j = this.columns; j < columns; j++) {
                    this.cells[i].push(0);
                }
            }
        }
        else if (columns < this.columns) {
            for (var i = 0; i < rows; i++) {
                for (var j = this.columns; j > columns; j--) {
                    this.cells[i].pop();
                }
            }
        }
        this.rows = rows;
        this.columns = columns;
    };
    return Matrix;
}());
function multiplyMatrices(a, b) {
    var res = new Matrix(a.rows, b.columns);
    for (var i = 0; i < res.rows; i++) {
        for (var j = 0; j < res.columns; j++) {
            for (var k = 0; k < a.columns; k++) {
                res.cells[i][j] += a.cells[i][k] * b.cells[k][j];
            }
        }
    }
    return res;
}
function drawMatrix(a, name) {
    var matrA = document.createElement("div");
    matrA.className = "matrix " + name;
    var _loop_1 = function (i) {
        var row = document.createElement("div");
        row.className = "row " + i;
        var _loop_2 = function (j) {
            var cell = document.createElement("input");
            cell.type = "value";
            cell.size = 1;
            cell.className = "cell " + j;
            cell.value = a.cells[i][j].toString();
            cell.addEventListener("change", function (e) {
                var target = e.target;
                a.cells[i][j] = parseInt(target.value);
            });
            row.append(cell);
        };
        for (var j = 0; j < a.columns; j++) {
            _loop_2(j);
        }
        matrA.append(row);
    };
    for (var i = 0; i < a.rows; i++) {
        _loop_1(i);
    }
    section === null || section === void 0 ? void 0 : section.append(matrA);
}
var section = document.querySelector("section");
var a = new Matrix(3, 4);
var b = new Matrix(4, 4);
drawMatrix(a, "0");
drawMatrix(b, "1");
var watchMatrix = function (a) {
    for (var i = 0; i < a.rows; i++) {
        console.log(a.cells[i]);
    }
    setTimeout(function () {
        watchMatrix(a);
    }, 5000);
};
watchMatrix(a);

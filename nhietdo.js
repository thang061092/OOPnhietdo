let Temperature = function (c) {
    this.c = c;
    this.getc = function () {
        return this.c;
    }
    this.getF = function () {
        return this.c * 1.8 + 32;
    }
    this.getK = function () {
        return this.c + 273.15;
    }
}
let temperature = new Temperature(25);
let C = temperature.getc();
let F = temperature.getF();
let K = temperature.getK();
alert(C + " độ C = " + F + " độ F và " + K + " độ K ");
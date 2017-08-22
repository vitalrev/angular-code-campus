"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = (function () {
    function Student(name, num) {
        this.name = name;
        this.num = num;
    }
    Student.prototype.getLabel = function () {
        return "Student " + this.name + " mit Matrikelnummer: " + this.num;
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=student.js.map
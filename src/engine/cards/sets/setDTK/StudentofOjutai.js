"use strict";
const Constants = require ("../../../Constants");
const StudentofOjutaiBase = require("../setIMA/StudentofOjutai");

class StudentofOjutai extends StudentofOjutaiBase {
  constructor (game) {
    super(game, "Student of Ojutai", "Dragons of Tarkir", "DTK");
  }
}

module.exports = StudentofOjutai;

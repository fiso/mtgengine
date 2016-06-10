"use strict";
const Constants = require ("../../../Constants");
const DisruptiveStudentBase = require("../setBRB/DisruptiveStudent");

class DisruptiveStudent extends DisruptiveStudentBase {
  constructor (game) {
    super(game, "Disruptive Student", "Urza's Saga", "USG");
  }
}

module.exports = DisruptiveStudent;

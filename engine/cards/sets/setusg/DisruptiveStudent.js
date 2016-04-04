"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DisruptiveStudentBase = require("../setBRB/DisruptiveStudent.js");

class DisruptiveStudent extends DisruptiveStudentBase {
  constructor(game) {
    super(game, "Disruptive Student", "Urza's Saga", "USG");
  }
}

module.exports = DisruptiveStudent;

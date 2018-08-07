"use strict";
const Constants = require ("../../../Constants");
const DuplicantBase = require("../setC18/Duplicant");

class Duplicant extends DuplicantBase {
  constructor (game) {
    super(game, "Duplicant", "Kaladesh Inventions", "MPS");
  }
}

module.exports = Duplicant;

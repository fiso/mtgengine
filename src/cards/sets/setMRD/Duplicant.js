"use strict";
const Constants = require ("../../../Constants");
const DuplicantBase = require("../setARC/Duplicant");

class Duplicant extends DuplicantBase {
  constructor (game) {
    super(game, "Duplicant", "Mirrodin", "MRD");
  }
}

module.exports = Duplicant;

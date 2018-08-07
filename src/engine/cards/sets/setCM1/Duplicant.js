"use strict";
const Constants = require ("../../../Constants");
const DuplicantBase = require("../setC18/Duplicant");

class Duplicant extends DuplicantBase {
  constructor (game) {
    super(game, "Duplicant", "Commander's Arsenal", "CM1");
  }
}

module.exports = Duplicant;

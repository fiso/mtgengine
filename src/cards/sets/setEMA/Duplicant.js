"use strict";
const Constants = require ("../../../Constants");
const DuplicantBase = require("../setARC/Duplicant");

class Duplicant extends DuplicantBase {
  constructor (game) {
    super(game, "Duplicant", "Eternal Masters", "EMA");
  }
}

module.exports = Duplicant;

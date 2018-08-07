"use strict";
const Constants = require ("../../../Constants");
const RuneclawBearBase = require("../setM15/RuneclawBear");

class RuneclawBear extends RuneclawBearBase {
  constructor (game) {
    super(game, "Runeclaw Bear", "Magic 2010", "M10");
  }
}

module.exports = RuneclawBear;

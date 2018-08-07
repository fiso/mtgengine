"use strict";
const Constants = require ("../../../Constants");
const RuneclawBearBase = require("../setM15/RuneclawBear");

class RuneclawBear extends RuneclawBearBase {
  constructor (game) {
    super(game, "Runeclaw Bear", "Magic 2012", "M12");
  }
}

module.exports = RuneclawBear;

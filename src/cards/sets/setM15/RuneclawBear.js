"use strict";
const Constants = require ("../../../Constants");
const RuneclawBearBase = require("../setDPA/RuneclawBear");

class RuneclawBear extends RuneclawBearBase {
  constructor (game) {
    super(game, "Runeclaw Bear", "Magic 2015 Core Set", "M15");
  }
}

module.exports = RuneclawBear;

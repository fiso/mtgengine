"use strict";
const Constants = require ("../../../Constants");
const RunedServitorBase = require("../setDDF/RunedServitor");

class RunedServitor extends RunedServitorBase {
  constructor (game) {
    super(game, "Runed Servitor", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = RunedServitor;

"use strict";
const Constants = require ("../../../Constants");
const RunedServitorBase = require("../setIMA/RunedServitor");

class RunedServitor extends RunedServitorBase {
  constructor (game) {
    super(game, "Runed Servitor", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = RunedServitor;

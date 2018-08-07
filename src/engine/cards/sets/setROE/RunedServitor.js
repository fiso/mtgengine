"use strict";
const Constants = require ("../../../Constants");
const RunedServitorBase = require("../setIMA/RunedServitor");

class RunedServitor extends RunedServitorBase {
  constructor (game) {
    super(game, "Runed Servitor", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RunedServitor;

"use strict";
const Constants = require ("../../../Constants");
const RunedServitorBase = require("../setDDF/RunedServitor");

class RunedServitor extends RunedServitorBase {
  constructor (game) {
    super(game, "Runed Servitor", "Magic Origins", "ORI");
  }
}

module.exports = RunedServitor;

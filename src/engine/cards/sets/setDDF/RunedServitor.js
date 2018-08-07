"use strict";
const Constants = require ("../../../Constants");
const RunedServitorBase = require("../setIMA/RunedServitor");

class RunedServitor extends RunedServitorBase {
  constructor (game) {
    super(game, "Runed Servitor", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = RunedServitor;

"use strict";
const Constants = require ("../../../Constants");
const RunedServitorBase = require("../setDDF/RunedServitor");

class RunedServitor extends RunedServitorBase {
  constructor(game) {
    super(game, "Runed Servitor", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = RunedServitor;

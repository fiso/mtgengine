"use strict";
const Constants = require ("../../../Constants");
const ExecuteBase = require("../set9ED/Execute");

class Execute extends ExecuteBase {
  constructor (game) {
    super(game, "Execute", "Odyssey", "ODY");
  }
}

module.exports = Execute;

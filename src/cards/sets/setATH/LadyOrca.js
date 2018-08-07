"use strict";
const Constants = require ("../../../Constants");
const LadyOrcaBase = require("../setME3/LadyOrca");

class LadyOrca extends LadyOrcaBase {
  constructor (game) {
    super(game, "Lady Orca", "Anthologies", "ATH");
  }
}

module.exports = LadyOrca;

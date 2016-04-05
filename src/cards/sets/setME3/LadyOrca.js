"use strict";
const Constants = require ("../../../Constants");
const LadyOrcaBase = require("../setATH/LadyOrca");

class LadyOrca extends LadyOrcaBase {
  constructor(game) {
    super(game, "Lady Orca", "Masters Edition III", "ME3");
  }
}

module.exports = LadyOrca;

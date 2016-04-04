"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LadyOrcaBase = require("../setATH/LadyOrca.js");

class LadyOrca extends LadyOrcaBase {
  constructor(game) {
    super(game, "Lady Orca", "Legends", "LEG");
  }
}

module.exports = LadyOrca;

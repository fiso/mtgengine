"use strict";
const Constants = require ("../../../Constants");
const LavaFlowBase = require("../setME4/LavaFlow");

class LavaFlow extends LavaFlowBase {
  constructor(game) {
    super(game, "Lava Flow", "Portal", "POR");
  }
}

module.exports = LavaFlow;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LavaFlowBase = require("../setME4/LavaFlow.js");

class LavaFlow extends LavaFlowBase {
  constructor(game) {
    super(game, "Lava Flow", "Portal", "POR");
  }
}

module.exports = LavaFlow;

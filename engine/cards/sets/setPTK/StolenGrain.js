"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StolenGrainBase = require("../setME3/StolenGrain.js");

class StolenGrain extends StolenGrainBase {
  constructor(game) {
    super(game, "Stolen Grain", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = StolenGrain;

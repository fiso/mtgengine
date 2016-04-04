"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimalClay extends Card {
  constructor(game) {
    super(game, "Primal Clay", "Antiquities", "ATQ");
  }
}

module.exports = PrimalClay;

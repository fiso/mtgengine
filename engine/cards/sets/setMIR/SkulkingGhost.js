"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkulkingGhost extends Card {
  constructor(game) {
    super(game, "Skulking Ghost", "Mirage", "MIR");
  }
}

module.exports = SkulkingGhost;

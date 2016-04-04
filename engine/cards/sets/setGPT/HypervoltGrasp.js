"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HypervoltGrasp extends Card {
  constructor(game) {
    super(game, "Hypervolt Grasp", "Guildpact", "GPT");
  }
}

module.exports = HypervoltGrasp;

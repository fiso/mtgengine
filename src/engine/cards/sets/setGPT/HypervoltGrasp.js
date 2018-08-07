"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HypervoltGrasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Hypervolt Grasp", "Guildpact", "GPT");
  }
}

module.exports = HypervoltGrasp;

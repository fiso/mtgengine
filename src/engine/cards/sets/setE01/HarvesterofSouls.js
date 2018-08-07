"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarvesterofSouls extends UnimplementedCard {
  constructor (game) {
    super(game, "Harvester of Souls", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = HarvesterofSouls;

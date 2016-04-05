"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasureMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Treasure Mage", "Magic Game Day", "pMGD");
  }
}

module.exports = TreasureMage;

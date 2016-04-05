"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightning Elemental", "Battle Royale Box Set", "BRB");
  }
}

module.exports = LightningElemental;

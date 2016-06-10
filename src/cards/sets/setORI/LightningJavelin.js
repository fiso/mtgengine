"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningJavelin extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Javelin", "Magic Origins", "ORI");
  }
}

module.exports = LightningJavelin;

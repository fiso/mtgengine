"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningAxe extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Axe", "Shadows over Innistrad", "SOI");
  }
}

module.exports = LightningAxe;

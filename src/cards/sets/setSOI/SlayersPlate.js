"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlayersPlate extends UnimplementedCard {
  constructor(game) {
    super(game, "Slayer's Plate", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SlayersPlate;

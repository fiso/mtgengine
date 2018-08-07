"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherbornMarauder extends UnimplementedCard {
  constructor (game) {
    super(game, "Aetherborn Marauder", "Kaladesh", "KLD");
  }
}

module.exports = AetherbornMarauder;

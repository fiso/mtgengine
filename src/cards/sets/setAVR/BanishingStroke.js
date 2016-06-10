"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BanishingStroke extends UnimplementedCard {
  constructor (game) {
    super(game, "Banishing Stroke", "Avacyn Restored", "AVR");
  }
}

module.exports = BanishingStroke;

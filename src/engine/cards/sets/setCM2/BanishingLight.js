"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BanishingLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Banishing Light", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BanishingLight;

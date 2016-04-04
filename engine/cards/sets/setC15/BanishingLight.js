"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BanishingLight extends UnimplementedCard {
  constructor(game) {
    super(game, "Banishing Light", "Commander 2015", "C15");
  }
}

module.exports = BanishingLight;

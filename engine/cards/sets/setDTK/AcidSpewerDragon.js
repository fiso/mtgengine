"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcidSpewerDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Acid-Spewer Dragon", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AcidSpewerDragon;

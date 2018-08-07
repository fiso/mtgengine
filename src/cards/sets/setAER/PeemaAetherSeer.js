"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeemaAetherSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Peema Aether-Seer", "Aether Revolt", "AER");
  }
}

module.exports = PeemaAetherSeer;

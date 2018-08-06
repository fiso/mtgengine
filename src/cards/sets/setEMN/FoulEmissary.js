"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoulEmissary extends UnimplementedCard {
  constructor (game) {
    super(game, "Foul Emissary", "Eldritch Moon", "EMN");
  }
}

module.exports = FoulEmissary;

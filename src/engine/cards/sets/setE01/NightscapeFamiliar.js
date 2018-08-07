"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightscapeFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Nightscape Familiar", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = NightscapeFamiliar;

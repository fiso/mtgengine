"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VensertheSojourner extends UnimplementedCard {
  constructor (game) {
    super(game, "Venser, the Sojourner", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = VensertheSojourner;

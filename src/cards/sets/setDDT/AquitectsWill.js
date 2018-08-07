"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AquitectsWill extends UnimplementedCard {
  constructor (game) {
    super(game, "Aquitect's Will", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = AquitectsWill;

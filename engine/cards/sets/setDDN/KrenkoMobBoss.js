"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrenkoMobBoss extends UnimplementedCard {
  constructor(game) {
    super(game, "Krenko, Mob Boss", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = KrenkoMobBoss;

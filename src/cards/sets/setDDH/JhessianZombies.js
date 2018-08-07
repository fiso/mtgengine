"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JhessianZombies extends UnimplementedCard {
  constructor (game) {
    super(game, "Jhessian Zombies", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = JhessianZombies;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaddiLifestrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Jaddi Lifestrider", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = JaddiLifestrider;

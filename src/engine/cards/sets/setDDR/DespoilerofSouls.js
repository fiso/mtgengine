"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DespoilerofSouls extends UnimplementedCard {
  constructor (game) {
    super(game, "Despoiler of Souls", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = DespoilerofSouls;

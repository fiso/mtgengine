"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurveillingSprite extends UnimplementedCard {
  constructor(game) {
    super(game, "Surveilling Sprite", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SurveillingSprite;

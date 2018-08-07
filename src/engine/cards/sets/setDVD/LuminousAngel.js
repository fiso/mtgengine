"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LuminousAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Luminous Angel", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = LuminousAngel;

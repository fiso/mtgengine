"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LuminousAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Luminous Angel", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = LuminousAngel;

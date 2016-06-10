"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChartoothCougar extends UnimplementedCard {
  constructor (game) {
    super(game, "Chartooth Cougar", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = ChartoothCougar;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoidmageApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Voidmage Apprentice", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = VoidmageApprentice;

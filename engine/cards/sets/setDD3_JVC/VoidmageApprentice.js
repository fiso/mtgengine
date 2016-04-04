"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoidmageApprentice extends Card {
  constructor(game) {
    super(game, "Voidmage Apprentice", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = VoidmageApprentice;

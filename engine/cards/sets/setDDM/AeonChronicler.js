"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AeonChronicler extends Card {
  constructor(game) {
    super(game, "Aeon Chronicler", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = AeonChronicler;

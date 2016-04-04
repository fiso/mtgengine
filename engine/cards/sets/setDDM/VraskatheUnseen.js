"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VraskatheUnseen extends Card {
  constructor(game) {
    super(game, "Vraska the Unseen", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = VraskatheUnseen;

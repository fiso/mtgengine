"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Agoraphobia extends Card {
  constructor(game) {
    super(game, "Agoraphobia", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Agoraphobia;

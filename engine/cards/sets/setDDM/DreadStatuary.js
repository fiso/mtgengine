"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreadStatuary extends Card {
  constructor(game) {
    super(game, "Dread Statuary", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = DreadStatuary;

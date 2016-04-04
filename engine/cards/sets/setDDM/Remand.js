"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Remand extends Card {
  constructor(game) {
    super(game, "Remand", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Remand;

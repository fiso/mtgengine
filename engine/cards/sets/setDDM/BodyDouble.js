"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BodyDouble extends Card {
  constructor(game) {
    super(game, "Body Double", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = BodyDouble;

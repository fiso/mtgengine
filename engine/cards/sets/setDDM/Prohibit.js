"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Prohibit extends Card {
  constructor(game) {
    super(game, "Prohibit", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Prohibit;

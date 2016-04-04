"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JacesPhantasm extends Card {
  constructor(game) {
    super(game, "Jace's Phantasm", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = JacesPhantasm;

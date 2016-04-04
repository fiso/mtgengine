"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrosstownCourier extends Card {
  constructor(game) {
    super(game, "Crosstown Courier", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = CrosstownCourier;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LastKiss extends Card {
  constructor(game) {
    super(game, "Last Kiss", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = LastKiss;

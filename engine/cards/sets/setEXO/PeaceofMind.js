"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PeaceofMind extends Card {
  constructor(game) {
    super(game, "Peace of Mind", "Exodus", "EXO");
  }
}

module.exports = PeaceofMind;

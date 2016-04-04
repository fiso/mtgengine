"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StasisSnare extends Card {
  constructor(game) {
    super(game, "Stasis Snare", "Battle for Zendikar", "BFZ");
  }
}

module.exports = StasisSnare;

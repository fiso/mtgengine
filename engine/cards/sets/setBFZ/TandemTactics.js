"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TandemTactics extends Card {
  constructor(game) {
    super(game, "Tandem Tactics", "Battle for Zendikar", "BFZ");
  }
}

module.exports = TandemTactics;

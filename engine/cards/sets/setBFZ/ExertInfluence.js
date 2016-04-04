"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExertInfluence extends Card {
  constructor(game) {
    super(game, "Exert Influence", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ExertInfluence;

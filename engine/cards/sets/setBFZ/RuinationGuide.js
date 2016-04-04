"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RuinationGuide extends Card {
  constructor(game) {
    super(game, "Ruination Guide", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RuinationGuide;

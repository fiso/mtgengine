"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoralhelmGuide extends Card {
  constructor(game) {
    super(game, "Coralhelm Guide", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CoralhelmGuide;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConquerorsPledge extends Card {
  constructor(game) {
    super(game, "Conqueror's Pledge", "Zendikar", "ZEN");
  }
}

module.exports = ConquerorsPledge;

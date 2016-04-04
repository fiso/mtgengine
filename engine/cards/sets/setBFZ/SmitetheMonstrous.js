"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SmitetheMonstrous extends Card {
  constructor(game) {
    super(game, "Smite the Monstrous", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SmitetheMonstrous;

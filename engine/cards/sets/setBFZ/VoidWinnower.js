"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoidWinnower extends Card {
  constructor(game) {
    super(game, "Void Winnower", "Battle for Zendikar", "BFZ");
  }
}

module.exports = VoidWinnower;

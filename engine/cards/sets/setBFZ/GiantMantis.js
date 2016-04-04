"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantMantis extends Card {
  constructor(game) {
    super(game, "Giant Mantis", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GiantMantis;

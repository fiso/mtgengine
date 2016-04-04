"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaraudingKnight extends Card {
  constructor(game) {
    super(game, "Marauding Knight", "Invasion", "INV");
  }
}

module.exports = MaraudingKnight;

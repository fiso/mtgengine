"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlayerHusk extends Card {
  constructor(game) {
    super(game, "Flayer Husk", "Mirrodin Besieged", "MBS");
  }
}

module.exports = FlayerHusk;

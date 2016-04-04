"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientOoze extends Card {
  constructor(game) {
    super(game, "Ancient Ooze", "Scourge", "SCG");
  }
}

module.exports = AncientOoze;

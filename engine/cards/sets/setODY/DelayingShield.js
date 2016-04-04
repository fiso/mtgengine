"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DelayingShield extends Card {
  constructor(game) {
    super(game, "Delaying Shield", "Odyssey", "ODY");
  }
}

module.exports = DelayingShield;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodClock extends Card {
  constructor(game) {
    super(game, "Blood Clock", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = BloodClock;

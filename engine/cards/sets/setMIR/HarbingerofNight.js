"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarbingerofNight extends Card {
  constructor(game) {
    super(game, "Harbinger of Night", "Mirage", "MIR");
  }
}

module.exports = HarbingerofNight;

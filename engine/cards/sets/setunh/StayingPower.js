"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StayingPower extends Card {
  constructor(game) {
    super(game, "Staying Power", "Unhinged", "UNH");
  }
}

module.exports = StayingPower;

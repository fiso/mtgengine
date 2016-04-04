"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WalkingDead extends Card {
  constructor(game) {
    super(game, "Walking Dead", "Legends", "LEG");
  }
}

module.exports = WalkingDead;

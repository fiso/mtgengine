"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeadReveler extends Card {
  constructor(game) {
    super(game, "Dead Reveler", "Return to Ravnica", "RTR");
  }
}

module.exports = DeadReveler;

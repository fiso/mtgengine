"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RottedOnesLaySiege extends Card {
  constructor(game) {
    super(game, "Rotted Ones, Lay Siege", "Archenemy", "ARC");
  }
}

module.exports = RottedOnesLaySiege;

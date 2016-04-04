"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpinedThopter extends Card {
  constructor(game) {
    super(game, "Spined Thopter", "New Phyrexia", "NPH");
  }
}

module.exports = SpinedThopter;

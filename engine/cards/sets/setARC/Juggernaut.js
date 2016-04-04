"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Juggernaut extends Card {
  constructor(game) {
    super(game, "Juggernaut", "Archenemy", "ARC");
  }
}

module.exports = Juggernaut;

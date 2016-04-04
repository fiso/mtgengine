"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CausticHound extends Card {
  constructor(game) {
    super(game, "Caustic Hound", "Mirrodin Besieged", "MBS");
  }
}

module.exports = CausticHound;

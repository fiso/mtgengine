"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VirulentWound extends Card {
  constructor(game) {
    super(game, "Virulent Wound", "Mirrodin Besieged", "MBS");
  }
}

module.exports = VirulentWound;

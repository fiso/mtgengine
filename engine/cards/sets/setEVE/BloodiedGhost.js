"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodiedGhost extends Card {
  constructor(game) {
    super(game, "Bloodied Ghost", "Eventide", "EVE");
  }
}

module.exports = BloodiedGhost;

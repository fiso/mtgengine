"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlisterstickShaman extends Card {
  constructor(game) {
    super(game, "Blisterstick Shaman", "Mirrodin Besieged", "MBS");
  }
}

module.exports = BlisterstickShaman;

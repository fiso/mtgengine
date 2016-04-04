"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodCursedKnight extends Card {
  constructor(game) {
    super(game, "Blood-Cursed Knight", "Magic Origins", "ORI");
  }
}

module.exports = BloodCursedKnight;

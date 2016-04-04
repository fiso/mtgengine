"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulScourge extends Card {
  constructor(game) {
    super(game, "Soul Scourge", "Torment", "TOR");
  }
}

module.exports = SoulScourge;

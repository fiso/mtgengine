"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneColdBasilisk extends Card {
  constructor(game) {
    super(game, "Stone-Cold Basilisk", "Unhinged", "UNH");
  }
}

module.exports = StoneColdBasilisk;

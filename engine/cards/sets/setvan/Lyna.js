"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lyna extends Card {
  constructor(game) {
    super(game, "Lyna", "Vanguard", "VAN");
  }
}

module.exports = Lyna;

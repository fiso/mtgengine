"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticMelting extends Card {
  constructor(game) {
    super(game, "Mystic Melting", "Coldsnap", "CSP");
  }
}

module.exports = MysticMelting;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticCrusader extends Card {
  constructor(game) {
    super(game, "Mystic Crusader", "Odyssey", "ODY");
  }
}

module.exports = MysticCrusader;

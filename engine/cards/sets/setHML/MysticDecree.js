"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticDecree extends Card {
  constructor(game) {
    super(game, "Mystic Decree", "Homelands", "HML");
  }
}

module.exports = MysticDecree;

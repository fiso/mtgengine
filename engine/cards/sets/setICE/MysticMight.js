"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticMight extends Card {
  constructor(game) {
    super(game, "Mystic Might", "Ice Age", "ICE");
  }
}

module.exports = MysticMight;

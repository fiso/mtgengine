"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticSpeculation extends Card {
  constructor(game) {
    super(game, "Mystic Speculation", "Future Sight", "FUT");
  }
}

module.exports = MysticSpeculation;

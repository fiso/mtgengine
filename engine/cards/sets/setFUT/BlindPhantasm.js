"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindPhantasm extends Card {
  constructor(game) {
    super(game, "Blind Phantasm", "Future Sight", "FUT");
  }
}

module.exports = BlindPhantasm;

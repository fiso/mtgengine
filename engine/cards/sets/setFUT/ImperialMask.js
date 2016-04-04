"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImperialMask extends Card {
  constructor(game) {
    super(game, "Imperial Mask", "Future Sight", "FUT");
  }
}

module.exports = ImperialMask;

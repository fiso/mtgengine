"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagusoftheMoon extends Card {
  constructor(game) {
    super(game, "Magus of the Moon", "Future Sight", "FUT");
  }
}

module.exports = MagusoftheMoon;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SarcomiteMyr extends Card {
  constructor(game) {
    super(game, "Sarcomite Myr", "Future Sight", "FUT");
  }
}

module.exports = SarcomiteMyr;

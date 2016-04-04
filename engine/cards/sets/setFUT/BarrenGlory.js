"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarrenGlory extends Card {
  constructor(game) {
    super(game, "Barren Glory", "Future Sight", "FUT");
  }
}

module.exports = BarrenGlory;

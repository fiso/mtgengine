"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcanumWings extends Card {
  constructor(game) {
    super(game, "Arcanum Wings", "Future Sight", "FUT");
  }
}

module.exports = ArcanumWings;

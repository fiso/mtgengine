"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarrenMoor extends Card {
  constructor(game) {
    super(game, "Barren Moor", "Archenemy", "ARC");
  }
}

module.exports = BarrenMoor;

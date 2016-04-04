"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wax extends Card {
  constructor(game) {
    super(game, "Wax", "Archenemy", "ARC");
  }
}

module.exports = Wax;

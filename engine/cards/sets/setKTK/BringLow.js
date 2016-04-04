"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BringLow extends Card {
  constructor(game) {
    super(game, "Bring Low", "Khans of Tarkir", "KTK");
  }
}

module.exports = BringLow;

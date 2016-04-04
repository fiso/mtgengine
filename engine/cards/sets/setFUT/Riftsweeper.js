"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Riftsweeper extends Card {
  constructor(game) {
    super(game, "Riftsweeper", "Future Sight", "FUT");
  }
}

module.exports = Riftsweeper;

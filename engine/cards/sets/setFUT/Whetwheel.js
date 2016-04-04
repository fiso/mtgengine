"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Whetwheel extends Card {
  constructor(game) {
    super(game, "Whetwheel", "Future Sight", "FUT");
  }
}

module.exports = Whetwheel;

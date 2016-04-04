"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlamecastWheel extends Card {
  constructor(game) {
    super(game, "Flamecast Wheel", "Theros", "THS");
  }
}

module.exports = FlamecastWheel;

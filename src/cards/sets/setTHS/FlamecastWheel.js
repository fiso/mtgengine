"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamecastWheel extends UnimplementedCard {
  constructor(game) {
    super(game, "Flamecast Wheel", "Theros", "THS");
  }
}

module.exports = FlamecastWheel;

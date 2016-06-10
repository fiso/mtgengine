"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameJab extends UnimplementedCard {
  constructor (game) {
    super(game, "Flame Jab", "Eventide", "EVE");
  }
}

module.exports = FlameJab;

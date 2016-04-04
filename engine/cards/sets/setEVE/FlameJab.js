"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlameJab extends Card {
  constructor(game) {
    super(game, "Flame Jab", "Eventide", "EVE");
  }
}

module.exports = FlameJab;

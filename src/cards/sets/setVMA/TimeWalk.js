"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeWalk extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Walk", "Vintage Masters", "VMA");
  }
}

module.exports = TimeWalk;

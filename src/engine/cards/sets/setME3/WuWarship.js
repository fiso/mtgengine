"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WuWarship extends UnimplementedCard {
  constructor (game) {
    super(game, "Wu Warship", "Masters Edition III", "ME3");
  }
}

module.exports = WuWarship;

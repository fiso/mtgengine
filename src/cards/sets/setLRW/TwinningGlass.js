"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwinningGlass extends UnimplementedCard {
  constructor(game) {
    super(game, "Twinning Glass", "Lorwyn", "LRW");
  }
}

module.exports = TwinningGlass;

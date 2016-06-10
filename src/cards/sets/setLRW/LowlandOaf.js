"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LowlandOaf extends UnimplementedCard {
  constructor (game) {
    super(game, "Lowland Oaf", "Lorwyn", "LRW");
  }
}

module.exports = LowlandOaf;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZephyrGull extends UnimplementedCard {
  constructor (game) {
    super(game, "Zephyr Gull", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = ZephyrGull;

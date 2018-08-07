"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZephyrNet extends UnimplementedCard {
  constructor (game) {
    super(game, "Zephyr Net", "Lorwyn", "LRW");
  }
}

module.exports = ZephyrNet;

"use strict";
const Constants = require ("../../../Constants");
const StoneQuarryBase = require("../setM19/StoneQuarry");

class StoneQuarry extends StoneQuarryBase {
  constructor (game) {
    super(game, "Stone Quarry", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StoneQuarry;

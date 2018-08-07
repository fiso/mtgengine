"use strict";
const Constants = require ("../../../Constants");
const DragonTempestBase = require("../setIMA/DragonTempest");

class DragonTempest extends DragonTempestBase {
  constructor (game) {
    super(game, "Dragon Tempest", "Commander 2017", "C17");
  }
}

module.exports = DragonTempest;

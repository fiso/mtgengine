"use strict";
const Constants = require ("../../../Constants");
const DragonTempestBase = require("../setIMA/DragonTempest");

class DragonTempest extends DragonTempestBase {
  constructor (game) {
    super(game, "Dragon Tempest", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonTempest;

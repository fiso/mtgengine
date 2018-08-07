"use strict";
const Constants = require ("../../../Constants");
const DragonEggBase = require("../setTC18/DragonEgg");

class DragonEgg extends DragonEggBase {
  constructor (game) {
    super(game, "Dragon Egg", "Eternal Masters", "EMA");
  }
}

module.exports = DragonEgg;

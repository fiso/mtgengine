"use strict";
const Constants = require ("../../../Constants");
const DragonEggBase = require("../setTC18/DragonEgg");

class DragonEgg extends DragonEggBase {
  constructor (game) {
    super(game, "Dragon Egg", "Core Set 2019", "M19");
  }
}

module.exports = DragonEgg;

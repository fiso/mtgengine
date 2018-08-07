"use strict";
const Constants = require ("../../../Constants");
const DragonEggBase = require("../setTC18/DragonEgg");

class DragonEgg extends DragonEggBase {
  constructor (game) {
    super(game, "Dragon Egg", "Magic 2014", "M14");
  }
}

module.exports = DragonEgg;

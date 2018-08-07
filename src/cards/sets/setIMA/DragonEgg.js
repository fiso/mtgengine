"use strict";
const Constants = require ("../../../Constants");
const DragonEggBase = require("../setTC18/DragonEgg");

class DragonEgg extends DragonEggBase {
  constructor (game) {
    super(game, "Dragon Egg", "Iconic Masters", "IMA");
  }
}

module.exports = DragonEgg;

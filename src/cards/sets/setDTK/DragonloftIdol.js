"use strict";
const Constants = require ("../../../Constants");
const DragonloftIdolBase = require("../setIMA/DragonloftIdol");

class DragonloftIdol extends DragonloftIdolBase {
  constructor (game) {
    super(game, "Dragonloft Idol", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonloftIdol;

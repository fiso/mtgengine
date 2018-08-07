"use strict";
const Constants = require ("../../../Constants");
const StoneforgeMysticBase = require("../setTD0/StoneforgeMystic");

class StoneforgeMystic extends StoneforgeMysticBase {
  constructor (game) {
    super(game, "Stoneforge Mystic", "Magic Online Promos", "PRM");
  }
}

module.exports = StoneforgeMystic;

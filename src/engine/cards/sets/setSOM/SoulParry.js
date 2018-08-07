"use strict";
const Constants = require ("../../../Constants");
const SoulParryBase = require("../setDDO/SoulParry");

class SoulParry extends SoulParryBase {
  constructor (game) {
    super(game, "Soul Parry", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SoulParry;

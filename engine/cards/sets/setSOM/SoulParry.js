"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulParryBase = require("../setDDO/SoulParry.js");

class SoulParry extends SoulParryBase {
  constructor(game) {
    super(game, "Soul Parry", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SoulParry;

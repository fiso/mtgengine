"use strict";
const Constants = require ("../../../Constants");
const HexplateGolemBase = require("../setBBD/HexplateGolem");

class HexplateGolem extends HexplateGolemBase {
  constructor (game) {
    super(game, "Hexplate Golem", "Mirrodin Besieged", "MBS");
  }
}

module.exports = HexplateGolem;

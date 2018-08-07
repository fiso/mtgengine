"use strict";
const Constants = require ("../../../Constants");
const NazahnReveredBladesmithBase = require("../setC17/NazahnReveredBladesmith");

class NazahnReveredBladesmith extends NazahnReveredBladesmithBase {
  constructor (game) {
    super(game, "Nazahn, Revered Bladesmith", "You Make the Cube", "PZ2");
  }
}

module.exports = NazahnReveredBladesmith;

"use strict";
const Constants = require ("../../../Constants");
const BloodsporeThrinaxBase = require("../setCMA/BloodsporeThrinax");

class BloodsporeThrinax extends BloodsporeThrinaxBase {
  constructor (game) {
    super(game, "Bloodspore Thrinax", "Legendary Cube", "PZ1");
  }
}

module.exports = BloodsporeThrinax;

"use strict";
const Constants = require ("../../../Constants");
const ShrewdHatchlingBase = require("../setMM2/ShrewdHatchling");

class ShrewdHatchling extends ShrewdHatchlingBase {
  constructor (game) {
    super(game, "Shrewd Hatchling", "Eventide", "EVE");
  }
}

module.exports = ShrewdHatchling;

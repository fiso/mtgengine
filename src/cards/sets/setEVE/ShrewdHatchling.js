"use strict";
const Constants = require ("../../../Constants");
const ShrewdHatchlingBase = require("../setDDJ/ShrewdHatchling");

class ShrewdHatchling extends ShrewdHatchlingBase {
  constructor(game) {
    super(game, "Shrewd Hatchling", "Eventide", "EVE");
  }
}

module.exports = ShrewdHatchling;

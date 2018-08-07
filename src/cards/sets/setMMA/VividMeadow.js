"use strict";
const Constants = require ("../../../Constants");
const VividMeadowBase = require("../setCM2/VividMeadow");

class VividMeadow extends VividMeadowBase {
  constructor (game) {
    super(game, "Vivid Meadow", "Modern Masters", "MMA");
  }
}

module.exports = VividMeadow;

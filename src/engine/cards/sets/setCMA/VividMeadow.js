"use strict";
const Constants = require ("../../../Constants");
const VividMeadowBase = require("../setCM2/VividMeadow");

class VividMeadow extends VividMeadowBase {
  constructor (game) {
    super(game, "Vivid Meadow", "Commander Anthology", "CMA");
  }
}

module.exports = VividMeadow;

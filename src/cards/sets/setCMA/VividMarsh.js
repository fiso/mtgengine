"use strict";
const Constants = require ("../../../Constants");
const VividMarshBase = require("../setC17/VividMarsh");

class VividMarsh extends VividMarshBase {
  constructor (game) {
    super(game, "Vivid Marsh", "Commander Anthology", "CMA");
  }
}

module.exports = VividMarsh;

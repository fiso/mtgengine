"use strict";
const Constants = require ("../../../Constants");
const VividMarshBase = require("../setC17/VividMarsh");

class VividMarsh extends VividMarshBase {
  constructor (game) {
    super(game, "Vivid Marsh", "Modern Masters", "MMA");
  }
}

module.exports = VividMarsh;

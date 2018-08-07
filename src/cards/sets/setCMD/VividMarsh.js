"use strict";
const Constants = require ("../../../Constants");
const VividMarshBase = require("../setC17/VividMarsh");

class VividMarsh extends VividMarshBase {
  constructor (game) {
    super(game, "Vivid Marsh", "Commander 2011", "CMD");
  }
}

module.exports = VividMarsh;

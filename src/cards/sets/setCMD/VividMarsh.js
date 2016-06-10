"use strict";
const Constants = require ("../../../Constants");
const VividMarshBase = require("../setC13/VividMarsh");

class VividMarsh extends VividMarshBase {
  constructor (game) {
    super(game, "Vivid Marsh", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VividMarsh;

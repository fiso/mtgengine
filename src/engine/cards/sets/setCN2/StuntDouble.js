"use strict";
const Constants = require ("../../../Constants");
const StuntDoubleBase = require("../setPZ2/StuntDouble");

class StuntDouble extends StuntDoubleBase {
  constructor (game) {
    super(game, "Stunt Double", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = StuntDouble;

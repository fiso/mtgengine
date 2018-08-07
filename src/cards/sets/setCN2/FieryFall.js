"use strict";
const Constants = require ("../../../Constants");
const FieryFallBase = require("../setE01/FieryFall");

class FieryFall extends FieryFallBase {
  constructor (game) {
    super(game, "Fiery Fall", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = FieryFall;

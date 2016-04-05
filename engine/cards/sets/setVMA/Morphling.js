"use strict";
const Constants = require ("../../../Constants");
const MorphlingBase = require("../setpJGP/Morphling");

class Morphling extends MorphlingBase {
  constructor(game) {
    super(game, "Morphling", "Vintage Masters", "VMA");
  }
}

module.exports = Morphling;

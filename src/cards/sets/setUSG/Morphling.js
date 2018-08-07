"use strict";
const Constants = require ("../../../Constants");
const MorphlingBase = require("../setVMA/Morphling");

class Morphling extends MorphlingBase {
  constructor (game) {
    super(game, "Morphling", "Urza's Saga", "USG");
  }
}

module.exports = Morphling;

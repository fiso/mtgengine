"use strict";
const Constants = require ("../../../Constants");
const MorphlingBase = require("../setVMA/Morphling");

class Morphling extends MorphlingBase {
  constructor (game) {
    super(game, "Morphling", "Judge Gift Cards 2010", "G10");
  }
}

module.exports = Morphling;

"use strict";
const Constants = require ("../../../Constants");
const ThoughtcastBase = require("../setMM2/Thoughtcast");

class Thoughtcast extends ThoughtcastBase {
  constructor (game) {
    super(game, "Thoughtcast", "Mirrodin", "MRD");
  }
}

module.exports = Thoughtcast;

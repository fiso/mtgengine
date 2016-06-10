"use strict";
const Constants = require ("../../../Constants");
const ThoughtcastBase = require("../setDDF/Thoughtcast");

class Thoughtcast extends ThoughtcastBase {
  constructor (game) {
    super(game, "Thoughtcast", "Mirrodin", "MRD");
  }
}

module.exports = Thoughtcast;

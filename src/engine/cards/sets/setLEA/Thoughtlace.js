"use strict";
const Constants = require ("../../../Constants");
const ThoughtlaceBase = require("../set4ED/Thoughtlace");

class Thoughtlace extends ThoughtlaceBase {
  constructor (game) {
    super(game, "Thoughtlace", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Thoughtlace;

"use strict";
const Constants = require ("../../../Constants");
const ThoughtlaceBase = require("../set4ED/Thoughtlace");

class Thoughtlace extends ThoughtlaceBase {
  constructor (game) {
    super(game, "Thoughtlace", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Thoughtlace;

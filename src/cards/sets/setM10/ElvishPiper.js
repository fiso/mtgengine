"use strict";
const Constants = require ("../../../Constants");
const ElvishPiperBase = require("../setA25/ElvishPiper");

class ElvishPiper extends ElvishPiperBase {
  constructor (game) {
    super(game, "Elvish Piper", "Magic 2010", "M10");
  }
}

module.exports = ElvishPiper;

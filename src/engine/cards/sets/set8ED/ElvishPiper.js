"use strict";
const Constants = require ("../../../Constants");
const ElvishPiperBase = require("../setA25/ElvishPiper");

class ElvishPiper extends ElvishPiperBase {
  constructor (game) {
    super(game, "Elvish Piper", "Eighth Edition", "8ED");
  }
}

module.exports = ElvishPiper;

"use strict";
const Constants = require ("../../../Constants");
const ElvishPiperBase = require("../setA25/ElvishPiper");

class ElvishPiper extends ElvishPiperBase {
  constructor (game) {
    super(game, "Elvish Piper", "Ninth Edition", "9ED");
  }
}

module.exports = ElvishPiper;

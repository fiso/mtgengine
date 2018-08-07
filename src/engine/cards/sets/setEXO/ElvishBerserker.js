"use strict";
const Constants = require ("../../../Constants");
const ElvishBerserkerBase = require("../set10E/ElvishBerserker");

class ElvishBerserker extends ElvishBerserkerBase {
  constructor (game) {
    super(game, "Elvish Berserker", "Exodus", "EXO");
  }
}

module.exports = ElvishBerserker;

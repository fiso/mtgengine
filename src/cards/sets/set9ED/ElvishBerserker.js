"use strict";
const Constants = require ("../../../Constants");
const ElvishBerserkerBase = require("../set10E/ElvishBerserker");

class ElvishBerserker extends ElvishBerserkerBase {
  constructor (game) {
    super(game, "Elvish Berserker", "Ninth Edition", "9ED");
  }
}

module.exports = ElvishBerserker;

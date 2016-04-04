"use strict";
const Constants = require ("../../../Constants");
const ElvishBerserkerBase = require("../setEXO/ElvishBerserker");

class ElvishBerserker extends ElvishBerserkerBase {
  constructor(game) {
    super(game, "Elvish Berserker", "Tenth Edition", "10E");
  }
}

module.exports = ElvishBerserker;

"use strict";
const Constants = require ("../../../Constants");
const WhiteWardBase = require("../setCED/WhiteWard");

class WhiteWard extends WhiteWardBase {
  constructor (game) {
    super(game, "White Ward", "International Collector's Edition", "CEI");
  }
}

module.exports = WhiteWard;

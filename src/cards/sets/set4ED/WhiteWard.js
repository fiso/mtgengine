"use strict";
const Constants = require ("../../../Constants");
const WhiteWardBase = require("../setCED/WhiteWard");

class WhiteWard extends WhiteWardBase {
  constructor (game) {
    super(game, "White Ward", "Fourth Edition", "4ED");
  }
}

module.exports = WhiteWard;

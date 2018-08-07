"use strict";
const Constants = require ("../../../Constants");
const WhiteWardBase = require("../set4ED/WhiteWard");

class WhiteWard extends WhiteWardBase {
  constructor (game) {
    super(game, "White Ward", "Limited Edition Beta", "LEB");
  }
}

module.exports = WhiteWard;

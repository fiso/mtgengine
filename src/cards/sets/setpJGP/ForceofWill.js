"use strict";
const Constants = require ("../../../Constants");
const ForceofWillBase = require("../setALL/ForceofWill");

class ForceofWill extends ForceofWillBase {
  constructor (game) {
    super(game, "Force of Will", "Judge Gift Program", "pJGP");
  }
}

module.exports = ForceofWill;

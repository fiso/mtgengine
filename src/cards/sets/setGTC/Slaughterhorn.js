"use strict";
const Constants = require ("../../../Constants");
const SlaughterhornBase = require("../setMM3/Slaughterhorn");

class Slaughterhorn extends SlaughterhornBase {
  constructor (game) {
    super(game, "Slaughterhorn", "Gatecrash", "GTC");
  }
}

module.exports = Slaughterhorn;

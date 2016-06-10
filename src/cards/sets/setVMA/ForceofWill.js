"use strict";
const Constants = require ("../../../Constants");
const ForceofWillBase = require("../setALL/ForceofWill");

class ForceofWill extends ForceofWillBase {
  constructor (game) {
    super(game, "Force of Will", "Vintage Masters", "VMA");
  }
}

module.exports = ForceofWill;

"use strict";
const Constants = require ("../../../Constants");
const ForceofWillBase = require("../setMP2/ForceofWill");

class ForceofWill extends ForceofWillBase {
  constructor (game) {
    super(game, "Force of Will", "Vintage Masters", "VMA");
  }
}

module.exports = ForceofWill;

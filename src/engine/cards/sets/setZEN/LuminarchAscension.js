"use strict";
const Constants = require ("../../../Constants");
const LuminarchAscensionBase = require("../setA25/LuminarchAscension");

class LuminarchAscension extends LuminarchAscensionBase {
  constructor (game) {
    super(game, "Luminarch Ascension", "Zendikar", "ZEN");
  }
}

module.exports = LuminarchAscension;

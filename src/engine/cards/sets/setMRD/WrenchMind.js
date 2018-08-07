"use strict";
const Constants = require ("../../../Constants");
const WrenchMindBase = require("../setIMA/WrenchMind");

class WrenchMind extends WrenchMindBase {
  constructor (game) {
    super(game, "Wrench Mind", "Mirrodin", "MRD");
  }
}

module.exports = WrenchMind;

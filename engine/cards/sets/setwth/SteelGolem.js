"use strict";
const Constants = require ("../../../Constants");
const SteelGolemBase = require("../set10E/SteelGolem");

class SteelGolem extends SteelGolemBase {
  constructor(game) {
    super(game, "Steel Golem", "Weatherlight", "WTH");
  }
}

module.exports = SteelGolem;

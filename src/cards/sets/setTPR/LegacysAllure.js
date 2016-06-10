"use strict";
const Constants = require ("../../../Constants");
const LegacysAllureBase = require("../setTMP/LegacysAllure");

class LegacysAllure extends LegacysAllureBase {
  constructor (game) {
    super(game, "Legacy's Allure", "Tempest Remastered", "TPR");
  }
}

module.exports = LegacysAllure;

"use strict";
const Constants = require ("../../../Constants");
const LegacysAllureBase = require("../setTPR/LegacysAllure");

class LegacysAllure extends LegacysAllureBase {
  constructor (game) {
    super(game, "Legacy's Allure", "Tempest", "TMP");
  }
}

module.exports = LegacysAllure;

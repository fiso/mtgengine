"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LegacysAllureBase = require("../setTMP/LegacysAllure.js");

class LegacysAllure extends LegacysAllureBase {
  constructor(game) {
    super(game, "Legacy's Allure", "Tempest Remastered", "TPR");
  }
}

module.exports = LegacysAllure;

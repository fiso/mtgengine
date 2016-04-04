"use strict";
const Constants = require ("../../../Constants");
const HarmattanEfreetBase = require("../set6ED/HarmattanEfreet");

class HarmattanEfreet extends HarmattanEfreetBase {
  constructor(game) {
    super(game, "Harmattan Efreet", "Mirage", "MIR");
  }
}

module.exports = HarmattanEfreet;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HarmattanEfreetBase = require("../set6ED/HarmattanEfreet.js");

class HarmattanEfreet extends HarmattanEfreetBase {
  constructor(game) {
    super(game, "Harmattan Efreet", "Mirage", "MIR");
  }
}

module.exports = HarmattanEfreet;

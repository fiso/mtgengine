"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KeldonWarlordBase = require("../setCED/KeldonWarlord.js");

class KeldonWarlord extends KeldonWarlordBase {
  constructor(game) {
    super(game, "Keldon Warlord", "Revised Edition", "3ED");
  }
}

module.exports = KeldonWarlord;

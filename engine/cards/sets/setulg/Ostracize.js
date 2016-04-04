"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OstracizeBase = require("../set7ED/Ostracize.js");

class Ostracize extends OstracizeBase {
  constructor(game) {
    super(game, "Ostracize", "Urza's Legacy", "ULG");
  }
}

module.exports = Ostracize;

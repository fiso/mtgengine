"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HedgeTrollBase = require("../setPLC/HedgeTroll.js");

class HedgeTroll extends HedgeTrollBase {
  constructor(game) {
    super(game, "Hedge Troll", "Release Events", "pREL");
  }
}

module.exports = HedgeTroll;

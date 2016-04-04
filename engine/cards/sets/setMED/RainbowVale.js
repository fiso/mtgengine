"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RainbowValeBase = require("../setFEM/RainbowVale.js");

class RainbowVale extends RainbowValeBase {
  constructor(game) {
    super(game, "Rainbow Vale", "Masters Edition", "MED");
  }
}

module.exports = RainbowVale;

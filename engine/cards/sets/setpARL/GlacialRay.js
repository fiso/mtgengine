"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlacialRay extends Card {
  constructor(game) {
    super(game, "Glacial Ray", "Arena League", "pARL");
  }
}

module.exports = GlacialRay;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantStrengthBase = require("../set6ED/GiantStrength.js");

class GiantStrength extends GiantStrengthBase {
  constructor(game) {
    super(game, "Giant Strength", "Fifth Edition", "5ED");
  }
}

module.exports = GiantStrength;

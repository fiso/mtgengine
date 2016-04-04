"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LivingLandsBase = require("../set6ED/LivingLands.js");

class LivingLands extends LivingLandsBase {
  constructor(game) {
    super(game, "Living Lands", "Unlimited Edition", "2ED");
  }
}

module.exports = LivingLands;

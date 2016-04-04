"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LivingLandsBase = require("../set6ED/LivingLands.js");

class LivingLands extends LivingLandsBase {
  constructor(game) {
    super(game, "Living Lands", "Fifth Edition", "5ED");
  }
}

module.exports = LivingLands;

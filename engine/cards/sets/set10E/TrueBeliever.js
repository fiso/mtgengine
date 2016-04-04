"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrueBelieverBase = require("../setONS/TrueBeliever.js");

class TrueBeliever extends TrueBelieverBase {
  constructor(game) {
    super(game, "True Believer", "Tenth Edition", "10E");
  }
}

module.exports = TrueBeliever;

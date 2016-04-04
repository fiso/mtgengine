"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FatalBlowBase = require("../set6ED/FatalBlow.js");

class FatalBlow extends FatalBlowBase {
  constructor(game) {
    super(game, "Fatal Blow", "Weatherlight", "WTH");
  }
}

module.exports = FatalBlow;

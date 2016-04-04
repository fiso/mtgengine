"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FinalFortuneBase = require("../set6ED/FinalFortune.js");

class FinalFortune extends FinalFortuneBase {
  constructor(game) {
    super(game, "Final Fortune", "Mirage", "MIR");
  }
}

module.exports = FinalFortune;

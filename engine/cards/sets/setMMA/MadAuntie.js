"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MadAuntieBase = require("../setLRW/MadAuntie.js");

class MadAuntie extends MadAuntieBase {
  constructor(game) {
    super(game, "Mad Auntie", "Modern Masters", "MMA");
  }
}

module.exports = MadAuntie;

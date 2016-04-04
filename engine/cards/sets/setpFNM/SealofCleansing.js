"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SealofCleansingBase = require("../setC15/SealofCleansing.js");

class SealofCleansing extends SealofCleansingBase {
  constructor(game) {
    super(game, "Seal of Cleansing", "Friday Night Magic", "pFNM");
  }
}

module.exports = SealofCleansing;

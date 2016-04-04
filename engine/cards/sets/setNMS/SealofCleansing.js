"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SealofCleansingBase = require("../setC15/SealofCleansing.js");

class SealofCleansing extends SealofCleansingBase {
  constructor(game) {
    super(game, "Seal of Cleansing", "Nemesis", "NMS");
  }
}

module.exports = SealofCleansing;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpinerockKnollBase = require("../setC15/SpinerockKnoll.js");

class SpinerockKnoll extends SpinerockKnollBase {
  constructor(game) {
    super(game, "Spinerock Knoll", "Lorwyn", "LRW");
  }
}

module.exports = SpinerockKnoll;

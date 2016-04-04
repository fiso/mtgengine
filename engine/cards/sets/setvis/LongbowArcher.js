"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LongbowArcherBase = require("../set6ED/LongbowArcher.js");

class LongbowArcher extends LongbowArcherBase {
  constructor(game) {
    super(game, "Longbow Archer", "Visions", "VIS");
  }
}

module.exports = LongbowArcher;

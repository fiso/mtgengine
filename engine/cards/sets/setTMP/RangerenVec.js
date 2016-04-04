"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RangerenVecBase = require("../setATH/RangerenVec.js");

class RangerenVec extends RangerenVecBase {
  constructor(game) {
    super(game, "Ranger en-Vec", "Tempest", "TMP");
  }
}

module.exports = RangerenVec;

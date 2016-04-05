"use strict";
const Constants = require ("../../../Constants");
const RangerenVecBase = require("../setATH/RangerenVec");

class RangerenVec extends RangerenVecBase {
  constructor(game) {
    super(game, "Ranger en-Vec", "Tempest", "TMP");
  }
}

module.exports = RangerenVec;

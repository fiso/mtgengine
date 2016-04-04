"use strict";
const Constants = require ("../../../Constants");
const MaskofMemoryBase = require("../setC14/MaskofMemory");

class MaskofMemory extends MaskofMemoryBase {
  constructor(game) {
    super(game, "Mask of Memory", "Planechase", "HOP");
  }
}

module.exports = MaskofMemory;

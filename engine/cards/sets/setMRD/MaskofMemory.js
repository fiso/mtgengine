"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MaskofMemoryBase = require("../setC14/MaskofMemory.js");

class MaskofMemory extends MaskofMemoryBase {
  constructor(game) {
    super(game, "Mask of Memory", "Mirrodin", "MRD");
  }
}

module.exports = MaskofMemory;

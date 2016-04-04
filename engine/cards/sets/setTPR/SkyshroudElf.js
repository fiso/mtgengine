"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyshroudElfBase = require("../setTMP/SkyshroudElf.js");

class SkyshroudElf extends SkyshroudElfBase {
  constructor(game) {
    super(game, "Skyshroud Elf", "Tempest Remastered", "TPR");
  }
}

module.exports = SkyshroudElf;

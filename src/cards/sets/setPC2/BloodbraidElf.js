"use strict";
const Constants = require ("../../../Constants");
const BloodbraidElfBase = require("../setARB/BloodbraidElf");

class BloodbraidElf extends BloodbraidElfBase {
  constructor (game) {
    super(game, "Bloodbraid Elf", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = BloodbraidElf;

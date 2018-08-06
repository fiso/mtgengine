"use strict";
const Constants = require ("../../../Constants");
const BloodbraidElfBase = require("../setARB/BloodbraidElf");

class BloodbraidElf extends BloodbraidElfBase {
  constructor (game) {
    super(game, "Bloodbraid Elf", "Eternal Masters", "EMA");
  }
}

module.exports = BloodbraidElf;

"use strict";
const Constants = require ("../../../Constants");
const BloodbraidElfBase = require("../setPCA/BloodbraidElf");

class BloodbraidElf extends BloodbraidElfBase {
  constructor (game) {
    super(game, "Bloodbraid Elf", "Alara Reborn", "ARB");
  }
}

module.exports = BloodbraidElf;

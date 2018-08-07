"use strict";
const Constants = require ("../../../Constants");
const BloodbraidElfBase = require("../setPCA/BloodbraidElf");

class BloodbraidElf extends BloodbraidElfBase {
  constructor (game) {
    super(game, "Bloodbraid Elf", "Friday Night Magic 2010", "F10");
  }
}

module.exports = BloodbraidElf;

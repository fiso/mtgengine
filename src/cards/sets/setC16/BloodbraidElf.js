"use strict";
const Constants = require ("../../../Constants");
const BloodbraidElfBase = require("../setPCA/BloodbraidElf");

class BloodbraidElf extends BloodbraidElfBase {
  constructor (game) {
    super(game, "Bloodbraid Elf", "Commander 2016", "C16");
  }
}

module.exports = BloodbraidElf;

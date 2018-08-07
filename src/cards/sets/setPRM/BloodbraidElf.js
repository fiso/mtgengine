"use strict";
const Constants = require ("../../../Constants");
const BloodbraidElfBase = require("../setPCA/BloodbraidElf");

class BloodbraidElf extends BloodbraidElfBase {
  constructor (game) {
    super(game, "Bloodbraid Elf", "Magic Online Promos", "PRM");
  }
}

module.exports = BloodbraidElf;

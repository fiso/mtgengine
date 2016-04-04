"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodbraidElfBase = require("../setARB/BloodbraidElf.js");

class BloodbraidElf extends BloodbraidElfBase {
  constructor(game) {
    super(game, "Bloodbraid Elf", "Friday Night Magic", "pFNM");
  }
}

module.exports = BloodbraidElf;

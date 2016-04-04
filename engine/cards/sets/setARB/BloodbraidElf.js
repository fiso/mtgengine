"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodbraidElf extends Card {
  constructor(game) {
    super(game, "Bloodbraid Elf", "Alara Reborn", "ARB");
  }
}

module.exports = BloodbraidElf;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodbraidElf extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodbraid Elf", "Alara Reborn", "ARB");
  }
}

module.exports = BloodbraidElf;

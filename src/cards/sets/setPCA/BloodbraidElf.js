"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodbraidElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodbraid Elf", "Planechase Anthology", "PCA");
  }
}

module.exports = BloodbraidElf;

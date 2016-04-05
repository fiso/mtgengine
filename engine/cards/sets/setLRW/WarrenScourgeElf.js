"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarrenScourgeElf extends UnimplementedCard {
  constructor(game) {
    super(game, "Warren-Scourge Elf", "Lorwyn", "LRW");
  }
}

module.exports = WarrenScourgeElf;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CylianElf extends UnimplementedCard {
  constructor(game) {
    super(game, "Cylian Elf", "Shards of Alara", "ALA");
  }
}

module.exports = CylianElf;

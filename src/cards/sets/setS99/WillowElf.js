"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WillowElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Willow Elf", "Starter 1999", "S99");
  }
}

module.exports = WillowElf;

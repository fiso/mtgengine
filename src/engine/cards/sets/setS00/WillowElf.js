"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WillowElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Willow Elf", "Starter 2000", "S00");
  }
}

module.exports = WillowElf;

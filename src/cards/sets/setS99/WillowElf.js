"use strict";
const Constants = require ("../../../Constants");
const WillowElfBase = require("../setS00/WillowElf");

class WillowElf extends WillowElfBase {
  constructor (game) {
    super(game, "Willow Elf", "Starter 1999", "S99");
  }
}

module.exports = WillowElf;

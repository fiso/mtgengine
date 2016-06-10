"use strict";
const Constants = require ("../../../Constants");
const WillowElfBase = require("../setS99/WillowElf");

class WillowElf extends WillowElfBase {
  constructor (game) {
    super(game, "Willow Elf", "Starter 2000", "S00");
  }
}

module.exports = WillowElf;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WillowElf extends Card {
  constructor(game) {
    super(game, "Willow Elf", "Starter 1999", "S99");
  }
}

module.exports = WillowElf;

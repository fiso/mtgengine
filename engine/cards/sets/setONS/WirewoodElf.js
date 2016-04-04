"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WirewoodElf extends Card {
  constructor(game) {
    super(game, "Wirewood Elf", "Onslaught", "ONS");
  }
}

module.exports = WirewoodElf;

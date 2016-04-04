"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TauntingElfBase = require("../setONS/TauntingElf.js");

class TauntingElf extends TauntingElfBase {
  constructor(game) {
    super(game, "Taunting Elf", "Urza's Destiny", "UDS");
  }
}

module.exports = TauntingElf;

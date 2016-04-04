"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NomadicElfBase = require("../setDDE/NomadicElf.js");

class NomadicElf extends NomadicElfBase {
  constructor(game) {
    super(game, "Nomadic Elf", "Invasion", "INV");
  }
}

module.exports = NomadicElf;

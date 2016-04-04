"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HuntingPackBase = require("../setCMD/HuntingPack.js");

class HuntingPack extends HuntingPackBase {
  constructor(game) {
    super(game, "Hunting Pack", "Scourge", "SCG");
  }
}

module.exports = HuntingPack;

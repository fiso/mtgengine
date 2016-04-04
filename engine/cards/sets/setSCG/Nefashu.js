"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NefashuBase = require("../setHOP/Nefashu.js");

class Nefashu extends NefashuBase {
  constructor(game) {
    super(game, "Nefashu", "Scourge", "SCG");
  }
}

module.exports = Nefashu;

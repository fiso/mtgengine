"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArborColossusBase = require("../setC15/ArborColossus.js");

class ArborColossus extends ArborColossusBase {
  constructor(game) {
    super(game, "Arbor Colossus", "Theros", "THS");
  }
}

module.exports = ArborColossus;

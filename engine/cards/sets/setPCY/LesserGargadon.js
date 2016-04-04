"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LesserGargadonBase = require("../set8ED/LesserGargadon.js");

class LesserGargadon extends LesserGargadonBase {
  constructor(game) {
    super(game, "Lesser Gargadon", "Prophecy", "PCY");
  }
}

module.exports = LesserGargadon;

"use strict";
const Constants = require ("../../../Constants");
const LesserGargadonBase = require("../set8ED/LesserGargadon");

class LesserGargadon extends LesserGargadonBase {
  constructor (game) {
    super(game, "Lesser Gargadon", "Prophecy", "PCY");
  }
}

module.exports = LesserGargadon;

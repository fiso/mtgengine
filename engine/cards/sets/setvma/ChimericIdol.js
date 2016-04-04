"use strict";
const Constants = require ("../../../Constants");
const ChimericIdolBase = require("../setPCY/ChimericIdol");

class ChimericIdol extends ChimericIdolBase {
  constructor(game) {
    super(game, "Chimeric Idol", "Vintage Masters", "VMA");
  }
}

module.exports = ChimericIdol;

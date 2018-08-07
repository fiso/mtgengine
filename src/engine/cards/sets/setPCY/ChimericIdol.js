"use strict";
const Constants = require ("../../../Constants");
const ChimericIdolBase = require("../setVMA/ChimericIdol");

class ChimericIdol extends ChimericIdolBase {
  constructor (game) {
    super(game, "Chimeric Idol", "Prophecy", "PCY");
  }
}

module.exports = ChimericIdol;

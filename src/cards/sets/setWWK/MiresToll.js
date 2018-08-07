"use strict";
const Constants = require ("../../../Constants");
const MiresTollBase = require("../setDDR/MiresToll");

class MiresToll extends MiresTollBase {
  constructor (game) {
    super(game, "Mire's Toll", "Worldwake", "WWK");
  }
}

module.exports = MiresToll;

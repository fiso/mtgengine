"use strict";
const Constants = require ("../../../Constants");
const LostOrderofJarkeldBase = require("../setME2/LostOrderofJarkeld");

class LostOrderofJarkeld extends LostOrderofJarkeldBase {
  constructor (game) {
    super(game, "Lost Order of Jarkeld", "Ice Age", "ICE");
  }
}

module.exports = LostOrderofJarkeld;

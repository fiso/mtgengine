"use strict";
const Constants = require ("../../../Constants");
const LostOrderofJarkeldBase = require("../setICE/LostOrderofJarkeld");

class LostOrderofJarkeld extends LostOrderofJarkeldBase {
  constructor(game) {
    super(game, "Lost Order of Jarkeld", "Masters Edition II", "ME2");
  }
}

module.exports = LostOrderofJarkeld;

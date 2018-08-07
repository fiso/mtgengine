"use strict";
const Constants = require ("../../../Constants");
const WoodedFoothillsBase = require("../setEXP/WoodedFoothills");

class WoodedFoothills extends WoodedFoothillsBase {
  constructor (game) {
    super(game, "Wooded Foothills", "Magic Online Promos", "PRM");
  }
}

module.exports = WoodedFoothills;

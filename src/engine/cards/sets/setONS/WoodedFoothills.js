"use strict";
const Constants = require ("../../../Constants");
const WoodedFoothillsBase = require("../setEXP/WoodedFoothills");

class WoodedFoothills extends WoodedFoothillsBase {
  constructor (game) {
    super(game, "Wooded Foothills", "Onslaught", "ONS");
  }
}

module.exports = WoodedFoothills;

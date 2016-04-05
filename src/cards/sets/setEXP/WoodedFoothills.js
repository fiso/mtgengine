"use strict";
const Constants = require ("../../../Constants");
const WoodedFoothillsBase = require("../setpJGP/WoodedFoothills");

class WoodedFoothills extends WoodedFoothillsBase {
  constructor(game) {
    super(game, "Wooded Foothills", "Zendikar Expedition", "EXP");
  }
}

module.exports = WoodedFoothills;

"use strict";
const Constants = require ("../../../Constants");
const YotianSoldierBase = require("../setATQ/YotianSoldier");

class YotianSoldier extends YotianSoldierBase {
  constructor(game) {
    super(game, "Yotian Soldier", "Mirrodin", "MRD");
  }
}

module.exports = YotianSoldier;

"use strict";
const Constants = require ("../../../Constants");
const YotianSoldierBase = require("../setATQ/YotianSoldier");

class YotianSoldier extends YotianSoldierBase {
  constructor (game) {
    super(game, "Yotian Soldier", "Masters Edition IV", "ME4");
  }
}

module.exports = YotianSoldier;

"use strict";
const Constants = require ("../../../Constants");
const YotianSoldierBase = require("../setBBD/YotianSoldier");

class YotianSoldier extends YotianSoldierBase {
  constructor (game) {
    super(game, "Yotian Soldier", "Antiquities", "ATQ");
  }
}

module.exports = YotianSoldier;

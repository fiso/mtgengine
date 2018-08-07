"use strict";
const Constants = require ("../../../Constants");
const YotianSoldierBase = require("../setBBD/YotianSoldier");

class YotianSoldier extends YotianSoldierBase {
  constructor (game) {
    super(game, "Yotian Soldier", "Fourth Edition", "4ED");
  }
}

module.exports = YotianSoldier;

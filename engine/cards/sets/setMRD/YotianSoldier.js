"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YotianSoldierBase = require("../setATQ/YotianSoldier.js");

class YotianSoldier extends YotianSoldierBase {
  constructor(game) {
    super(game, "Yotian Soldier", "Mirrodin", "MRD");
  }
}

module.exports = YotianSoldier;

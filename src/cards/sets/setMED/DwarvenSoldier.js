"use strict";
const Constants = require ("../../../Constants");
const DwarvenSoldierBase = require("../setFEM/DwarvenSoldier");

class DwarvenSoldier extends DwarvenSoldierBase {
  constructor (game) {
    super(game, "Dwarven Soldier", "Masters Edition", "MED");
  }
}

module.exports = DwarvenSoldier;

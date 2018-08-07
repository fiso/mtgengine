"use strict";
const Constants = require ("../../../Constants");
const DwarvenSoldierBase = require("../setMED/DwarvenSoldier");

class DwarvenSoldier extends DwarvenSoldierBase {
  constructor (game) {
    super(game, "Dwarven Soldier", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenSoldier;

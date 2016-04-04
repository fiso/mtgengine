"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DwarvenSoldierBase = require("../setFEM/DwarvenSoldier.js");

class DwarvenSoldier extends DwarvenSoldierBase {
  constructor(game) {
    super(game, "Dwarven Soldier", "Masters Edition", "MED");
  }
}

module.exports = DwarvenSoldier;

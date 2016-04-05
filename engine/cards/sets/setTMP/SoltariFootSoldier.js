"use strict";
const Constants = require ("../../../Constants");
const SoltariFootSoldierBase = require("../setBRB/SoltariFootSoldier");

class SoltariFootSoldier extends SoltariFootSoldierBase {
  constructor(game) {
    super(game, "Soltari Foot Soldier", "Tempest", "TMP");
  }
}

module.exports = SoltariFootSoldier;

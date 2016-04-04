"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoltariFootSoldierBase = require("../setBRB/SoltariFootSoldier.js");

class SoltariFootSoldier extends SoltariFootSoldierBase {
  constructor(game) {
    super(game, "Soltari Foot Soldier", "Tempest", "TMP");
  }
}

module.exports = SoltariFootSoldier;

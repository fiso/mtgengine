"use strict";
const Constants = require ("../../../Constants");
const ShuSoldierFarmersBase = require("../setME3/ShuSoldierFarmers");

class ShuSoldierFarmers extends ShuSoldierFarmersBase {
  constructor(game) {
    super(game, "Shu Soldier-Farmers", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuSoldierFarmers;

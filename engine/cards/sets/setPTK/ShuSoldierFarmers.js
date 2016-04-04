"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShuSoldierFarmersBase = require("../setME3/ShuSoldierFarmers.js");

class ShuSoldierFarmers extends ShuSoldierFarmersBase {
  constructor(game) {
    super(game, "Shu Soldier-Farmers", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuSoldierFarmers;

"use strict";
const Constants = require ("../../../Constants");
const CoastalTowerBase = require("../set8ED/CoastalTower");

class CoastalTower extends CoastalTowerBase {
  constructor (game) {
    super(game, "Coastal Tower", "Invasion", "INV");
  }
}

module.exports = CoastalTower;

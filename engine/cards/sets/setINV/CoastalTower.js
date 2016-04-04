"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoastalTowerBase = require("../set8ED/CoastalTower.js");

class CoastalTower extends CoastalTowerBase {
  constructor(game) {
    super(game, "Coastal Tower", "Invasion", "INV");
  }
}

module.exports = CoastalTower;

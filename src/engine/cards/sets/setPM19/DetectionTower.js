"use strict";
const Constants = require ("../../../Constants");
const DetectionTowerBase = require("../setM19/DetectionTower");

class DetectionTower extends DetectionTowerBase {
  constructor (game) {
    super(game, "Detection Tower", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = DetectionTower;

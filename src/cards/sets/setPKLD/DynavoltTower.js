"use strict";
const Constants = require ("../../../Constants");
const DynavoltTowerBase = require("../setKLD/DynavoltTower");

class DynavoltTower extends DynavoltTowerBase {
  constructor (game) {
    super(game, "Dynavolt Tower", "Kaladesh Promos", "PKLD");
  }
}

module.exports = DynavoltTower;

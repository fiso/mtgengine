"use strict";
const Constants = require ("../../../Constants");
const ReliquaryTowerBase = require("../setC14/ReliquaryTower");

class ReliquaryTower extends ReliquaryTowerBase {
  constructor (game) {
    super(game, "Reliquary Tower", "Friday Night Magic", "pFNM");
  }
}

module.exports = ReliquaryTower;

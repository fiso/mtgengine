"use strict";
const Constants = require ("../../../Constants");
const ReliquaryTowerBase = require("../setM19/ReliquaryTower");

class ReliquaryTower extends ReliquaryTowerBase {
  constructor (game) {
    super(game, "Reliquary Tower", "Friday Night Magic 2013", "F13");
  }
}

module.exports = ReliquaryTower;

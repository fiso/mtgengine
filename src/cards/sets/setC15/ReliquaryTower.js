"use strict";
const Constants = require ("../../../Constants");
const ReliquaryTowerBase = require("../setM19/ReliquaryTower");

class ReliquaryTower extends ReliquaryTowerBase {
  constructor (game) {
    super(game, "Reliquary Tower", "Commander 2015", "C15");
  }
}

module.exports = ReliquaryTower;

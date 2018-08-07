"use strict";
const Constants = require ("../../../Constants");
const ReliquaryTowerBase = require("../setM19/ReliquaryTower");

class ReliquaryTower extends ReliquaryTowerBase {
  constructor (game) {
    super(game, "Reliquary Tower", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = ReliquaryTower;

"use strict";
const Constants = require ("../../../Constants");
const ReliquaryTowerBase = require("../setM19/ReliquaryTower");

class ReliquaryTower extends ReliquaryTowerBase {
  constructor (game) {
    super(game, "Reliquary Tower", "Magic 2013", "M13");
  }
}

module.exports = ReliquaryTower;

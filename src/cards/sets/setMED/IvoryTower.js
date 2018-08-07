"use strict";
const Constants = require ("../../../Constants");
const IvoryTowerBase = require("../setVMA/IvoryTower");

class IvoryTower extends IvoryTowerBase {
  constructor (game) {
    super(game, "Ivory Tower", "Masters Edition", "MED");
  }
}

module.exports = IvoryTower;

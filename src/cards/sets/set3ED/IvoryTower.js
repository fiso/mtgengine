"use strict";
const Constants = require ("../../../Constants");
const IvoryTowerBase = require("../setATQ/IvoryTower");

class IvoryTower extends IvoryTowerBase {
  constructor (game) {
    super(game, "Ivory Tower", "Revised Edition", "3ED");
  }
}

module.exports = IvoryTower;

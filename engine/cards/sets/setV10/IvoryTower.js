"use strict";
const Constants = require ("../../../Constants");
const IvoryTowerBase = require("../setATQ/IvoryTower");

class IvoryTower extends IvoryTowerBase {
  constructor(game) {
    super(game, "Ivory Tower", "From the Vault: Relics", "V10");
  }
}

module.exports = IvoryTower;

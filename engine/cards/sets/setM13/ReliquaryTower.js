"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReliquaryTowerBase = require("../setC14/ReliquaryTower.js");

class ReliquaryTower extends ReliquaryTowerBase {
  constructor(game) {
    super(game, "Reliquary Tower", "Magic 2013", "M13");
  }
}

module.exports = ReliquaryTower;

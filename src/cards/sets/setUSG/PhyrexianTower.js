"use strict";
const Constants = require ("../../../Constants");
const PhyrexianTowerBase = require("../setWC00/PhyrexianTower");

class PhyrexianTower extends PhyrexianTowerBase {
  constructor (game) {
    super(game, "Phyrexian Tower", "Urza's Saga", "USG");
  }
}

module.exports = PhyrexianTower;

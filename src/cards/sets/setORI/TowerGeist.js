"use strict";
const Constants = require ("../../../Constants");
const TowerGeistBase = require("../setDDQ/TowerGeist");

class TowerGeist extends TowerGeistBase {
  constructor (game) {
    super(game, "Tower Geist", "Magic Origins", "ORI");
  }
}

module.exports = TowerGeist;

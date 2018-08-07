"use strict";
const Constants = require ("../../../Constants");
const TowerGeistBase = require("../setDDQ/TowerGeist");

class TowerGeist extends TowerGeistBase {
  constructor (game) {
    super(game, "Tower Geist", "Dark Ascension", "DKA");
  }
}

module.exports = TowerGeist;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TowerGeistBase = require("../setDKA/TowerGeist.js");

class TowerGeist extends TowerGeistBase {
  constructor(game) {
    super(game, "Tower Geist", "Magic Origins", "ORI");
  }
}

module.exports = TowerGeist;

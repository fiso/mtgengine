"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofSoulsBase = require("../setSTH/WallofSouls.js");

class WallofSouls extends WallofSoulsBase {
  constructor(game) {
    super(game, "Wall of Souls", "Tempest Remastered", "TPR");
  }
}

module.exports = WallofSouls;

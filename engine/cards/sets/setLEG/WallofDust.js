"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofDustBase = require("../set4ED/WallofDust.js");

class WallofDust extends WallofDustBase {
  constructor(game) {
    super(game, "Wall of Dust", "Legends", "LEG");
  }
}

module.exports = WallofDust;

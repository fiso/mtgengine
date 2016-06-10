"use strict";
const Constants = require ("../../../Constants");
const WallofDustBase = require("../set4ED/WallofDust");

class WallofDust extends WallofDustBase {
  constructor (game) {
    super(game, "Wall of Dust", "Legends", "LEG");
  }
}

module.exports = WallofDust;

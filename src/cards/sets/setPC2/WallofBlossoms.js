"use strict";
const Constants = require ("../../../Constants");
const WallofBlossomsBase = require("../setC15/WallofBlossoms");

class WallofBlossoms extends WallofBlossomsBase {
  constructor (game) {
    super(game, "Wall of Blossoms", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = WallofBlossoms;

"use strict";
const Constants = require ("../../../Constants");
const WallofBlossomsBase = require("../setCMA/WallofBlossoms");

class WallofBlossoms extends WallofBlossomsBase {
  constructor (game) {
    super(game, "Wall of Blossoms", "Planechase 2012", "PC2");
  }
}

module.exports = WallofBlossoms;

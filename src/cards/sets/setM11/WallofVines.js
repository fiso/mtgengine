"use strict";
const Constants = require ("../../../Constants");
const WallofVinesBase = require("../setM19/WallofVines");

class WallofVines extends WallofVinesBase {
  constructor (game) {
    super(game, "Wall of Vines", "Magic 2011", "M11");
  }
}

module.exports = WallofVines;

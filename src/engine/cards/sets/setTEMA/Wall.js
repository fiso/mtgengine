"use strict";
const Constants = require ("../../../Constants");
const WallBase = require("../setTDDT/Wall");

class Wall extends WallBase {
  constructor (game) {
    super(game, "Wall", "Eternal Masters Tokens", "TEMA");
  }
}

module.exports = Wall;

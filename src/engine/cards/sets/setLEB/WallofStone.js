"use strict";
const Constants = require ("../../../Constants");
const WallofStoneBase = require("../set8ED/WallofStone");

class WallofStone extends WallofStoneBase {
  constructor (game) {
    super(game, "Wall of Stone", "Limited Edition Beta", "LEB");
  }
}

module.exports = WallofStone;

"use strict";
const Constants = require ("../../../Constants");
const WallofStoneBase = require("../set8ED/WallofStone");

class WallofStone extends WallofStoneBase {
  constructor (game) {
    super(game, "Wall of Stone", "Fifth Edition", "5ED");
  }
}

module.exports = WallofStone;

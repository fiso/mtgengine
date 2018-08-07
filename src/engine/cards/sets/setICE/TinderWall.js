"use strict";
const Constants = require ("../../../Constants");
const TinderWallBase = require("../setME2/TinderWall");

class TinderWall extends TinderWallBase {
  constructor (game) {
    super(game, "Tinder Wall", "Ice Age", "ICE");
  }
}

module.exports = TinderWall;

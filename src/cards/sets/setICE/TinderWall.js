"use strict";
const Constants = require ("../../../Constants");
const TinderWallBase = require("../setCST/TinderWall");

class TinderWall extends TinderWallBase {
  constructor (game) {
    super(game, "Tinder Wall", "Ice Age", "ICE");
  }
}

module.exports = TinderWall;

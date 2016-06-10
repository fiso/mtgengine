"use strict";
const Constants = require ("../../../Constants");
const ShieldWallBase = require("../setCHR/ShieldWall");

class ShieldWall extends ShieldWallBase {
  constructor (game) {
    super(game, "Shield Wall", "Fifth Edition", "5ED");
  }
}

module.exports = ShieldWall;

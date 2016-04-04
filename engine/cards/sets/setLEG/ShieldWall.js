"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShieldWallBase = require("../setCHR/ShieldWall.js");

class ShieldWall extends ShieldWallBase {
  constructor(game) {
    super(game, "Shield Wall", "Legends", "LEG");
  }
}

module.exports = ShieldWall;

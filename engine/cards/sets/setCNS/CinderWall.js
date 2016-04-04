"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CinderWallBase = require("../setDDG/CinderWall.js");

class CinderWall extends CinderWallBase {
  constructor(game) {
    super(game, "Cinder Wall", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CinderWall;

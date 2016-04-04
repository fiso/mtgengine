"use strict";
const Constants = require ("../../../Constants");
const CinderWallBase = require("../setDDG/CinderWall");

class CinderWall extends CinderWallBase {
  constructor(game) {
    super(game, "Cinder Wall", "Weatherlight", "WTH");
  }
}

module.exports = CinderWall;

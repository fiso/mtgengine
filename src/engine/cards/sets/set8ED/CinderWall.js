"use strict";
const Constants = require ("../../../Constants");
const CinderWallBase = require("../setCNS/CinderWall");

class CinderWall extends CinderWallBase {
  constructor (game) {
    super(game, "Cinder Wall", "Eighth Edition", "8ED");
  }
}

module.exports = CinderWall;

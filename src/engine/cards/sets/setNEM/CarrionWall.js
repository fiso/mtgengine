"use strict";
const Constants = require ("../../../Constants");
const CarrionWallBase = require("../set8ED/CarrionWall");

class CarrionWall extends CarrionWallBase {
  constructor (game) {
    super(game, "Carrion Wall", "Nemesis", "NEM");
  }
}

module.exports = CarrionWall;
